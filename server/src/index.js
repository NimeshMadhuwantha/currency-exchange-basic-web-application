const express=require("express");
const cors=require("cors");
const axios=require("axios");
const app=express();

app.use(express.json());
app.use(cors());
app.get("/getAllCurrencies",async (req,res)=>{
    const nameURL ='https://openexchangerates.org/api/currencies.json?app_id=f17b75b11e4c47f1b1d1154941b6292d';



    try{
        const namesResponce=await axios.get(nameURL);
        const nameData = namesResponce.data;
        return res.json({nameData})
    }
    catch(err){
        console.error(err);
    }
})

app.listen(5000,()=>{
    console.log("SERVER STARTED");
});