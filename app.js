const express = require("express")
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/",(req, res)=>{
    res.json({
        success: true, 
        msg:"success ful"
    })
});

mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Mongodb connected")
})


app.listen(PORT, ()=>{
    console.log(`Server is running PORT Number : ${PORT}`)
})
