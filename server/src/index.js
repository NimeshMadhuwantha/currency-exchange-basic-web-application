const express=require("express");
const cors=require("cors");
const axios=require("axios");
const app=express();

app.use(express.json());
app.use(cors());

app.listen(5000,()=>{
    console.log("SERVER STARTED0");
});