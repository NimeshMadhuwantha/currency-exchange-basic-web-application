const express=require("express");
const cors=require("cors");
const axios=require("axios");
const app=express();

app.use(express.json());
app.use(cors());
app.get("/getAllCurrencies",async (req,res)=>{
    const nameURL ='https://docs.openexchangerates.org/reference/currencies-json?app_id=4efab6a7bb934efea57000511c75098a';



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
    console.log("SERVER STARTED0");
});