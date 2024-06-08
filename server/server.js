const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

const myDataBase = "Main";
const url = `mongodb://localhost:27017/${myDataBase}`;
mongoose.connect(url)
    .then(()=>console.log("Connected to MongoDB"))
    .catch((err)=>console.log("Connection Error:", err.message));

const db = mongoose.connection

const Kebabs = db.collection("Kebabs")
const Admins = db.collection("Admins")


app.get("/api/Kebabs", async(req, res)=>{
    try{
        const kebabs = await Kebabs.find({}).toArray();
        res.json(kebabs);
    }
    catch(err){
        res.status((500).json({message: err.message}));
    }
});

app.get("/api/TopKebabs", async(req, res)=>{
    try{
        const kebabs = await Kebabs.find().sort({"popularnosc": -1}).limit(3).toArray();
        res.json(kebabs);
    }
    catch(err){
        res.status((500).json({message: err.message}));
    }
});

app.get("/api/GetAdmins", async(req, res)=>{
    try{
        const admins = await Admins.find().toArray();
        res.json(admins);
    }
    catch(err){
        res.status((500).json({message: err.message}));
    }
});

app.delete("/api/Kebabs/:id", async(req, res)=>{
    try{
        const objectToDelete = await Kebabs.deleteOne({id: Number(req.params.id)})
        if(objectToDelete.deletedCount === 0){
            return res.status(404).json({message: "Doc not found"})
        }
    }
    catch(err){
        res.status((500).json({message: err.message}));
    }
    res.status(200).json({message: "deleted"})
});

app.listen(PORT, ()=>console.log(`Server express is running on ${PORT}`));

process.on('SIGINT', ()=>{
    console.log("Closing MongoDB");
    mongoose.disconnect()
        .then(()=>console.log(`MongoDB connection lost`))
        .finally(()=>process.exit());
})