const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const {isValidDocument, errorHandler, idValidation} = require("./dataProcessingHelper")

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

const schema = new mongoose.Schema({
    id:{type: Number, required: true},
    wCzym: {type: String, required: false},
    mieso: {type: String, required: false},
    sos: {type: String, required: false},
    dodatki: {type: Array, required: false},
    cena: {type: Number, required: false},
    rozmiar: {type: String, required: false},
    popularnosc: {type: Number, required: false},
    img: {type: String, required: false},
})

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

app.patch(`/api/Kebabs/:id`, cors(), async (req,res)=>{
    try{
        const object = req.body
        if(!isValidDocument(object)){
            return res.status(400).json({message: "Invalid document format"})
        }

        const result = await Kebabs.updateOne({id: req.body.id}, {$set:object})

        if(result.matchedCount === 0){
            return res.status(404).json({message: "Doc not found"})
        }

        if(result.modifiedCount === 0){
            return res.status(400).json({message: "Can't modificate"})
        }

        res.status(200).json({message:"modified object"})

    }catch(err){
        errorHandler(res,err)
    }
})

app.listen(PORT, ()=>console.log(`Server express is running on ${PORT}`));

process.on('SIGINT', ()=>{
    console.log("Closing MongoDB");
    mongoose.disconnect()
        .then(()=>console.log(`MongoDB connection lost`))
        .finally(()=>process.exit());
})