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

app.get("/convert", async (req, res) => {
    const { date, mainCurrency, exchangeCurrency, amountmaincurrency } = req.query;
    try {
        const dataUrl = `https://openexchangerates.org/api/historical/${date}.json?app_id=f17b75b11e4c47f1b1d1154941b6292d`;
        const dataResponse = await axios.get(dataUrl);
        const rates = dataResponse.data.rates;

        const sourceRate = rates[mainCurrency];
        const targetRate = rates[exchangeCurrency];

        if (!sourceRate || !targetRate) {
            return res.status(400).json({ error: "Invalid currency code" });
        }

        const targetAmount = (targetRate / sourceRate) * amountmaincurrency;

        return res.json({ targetAmount });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(5000,()=>{
    console.log("SERVER STARTED");
});