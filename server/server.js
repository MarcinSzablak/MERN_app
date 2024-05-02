const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

const myDataBase = "main";
const url = `mongodb://localhost:27017/${myDataBase}`;
mongoose.connect(url)
    .then(()=>console.log("Connected to MongoDB"))
    .catch((err)=>console.log("Connection Error:", err.message));

const db = mongoose.connection

const Cienkie = db.collection("cienkie")

app.get("/api/Cienkie", async(req, res)=>{
    try{
        const cienkie = await Cienkie.find({}).toArray();
        res.json(cienkie);
    }   
    catch(err){
        res.status((500).json({message: err.message}));
    }
});

app.listen(PORT, ()=>console.log(`Server express is running on ${PORT}`));

process.on('SIGINT', ()=>{
    console.log("Closing MongoDB");
    mongoose.disconnect()
        .then(()=>console.log(`MongoDB connection lost`))
        .finally(()=>process.exit());
})