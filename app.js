const express = require("express")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const categoryRouter = require("./routes/Admin/CategoryRoutes");
dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json())

app.get("/",(req, res)=>{
    res.json({
        success: true, 
        msg:"success full"
    })
});


app.use("/api", categoryRouter)

mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Mongodb connected")
})


app.listen(PORT, ()=>{
    console.log(`Server is running PORT Number : ${PORT}`)
})
