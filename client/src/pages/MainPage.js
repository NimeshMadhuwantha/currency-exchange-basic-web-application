import  React, {useEffect, useState} from 'react'
import axios from "axios";
export default function MainPage() {
  const[date,setDate]=useState(null);
  const[mainCurrency,setMainCurrency]=useState("");
  const[exchangeCurrency,setExchangeCurrency]=useState("");
  const[amount,setAmount]=useState(0);
  const[currencyNames,setCurrencyNames]=useState([]);
  
  const handleSubmit=(e)=>{e.preventDefault();
  console.log(date,setMainCurrency,exchangeCurrency,amount);};
  console.log(exchangeCurrency)

  useEffect(()=>{
    const getCurrencyNames=async()=>{
      
      try{
        const responce=await axios.get(
          "http://localhost:5000/getAllCurrencies"
          );
          
          setCurrencyNames(responce.data.nameData);

        } catch(err) {
          console.error(err);
         
        }
      }; getCurrencyNames();
    },[]);

  return (
    <div>
        <h1 className="text-5xl lg:mx-32 font-bold text-blue-700">
            Convert the Currency and Rates
        </h1>
        <p className="lg:mx-32 opacity-30 py-6">Introducing our currency conversion app: your one-stop solution for instant and reliable currency exchange. 
          With real-time rates for 150+ currencies and a user-friendly interface, converting money has never been easier. 
          Say goodbye to confusion and hello to seamless currency conversions, anytime, anywhere.</p>

<div className="mt-5 flex items-center justify-center flex-col"><section className="w-full lg:w-1/2">
  <form onSubmit={handleSubmit}>
  <div className="mb-5">
    <label htmlFor={date} className=" block mb-2 text-xl font-medium text-white-900 opacity-90 dark:text-white">Date</label>
    <input onChange={(e)=>setDate(e.target.value)} type="Date" id={date} name={date} className="shadow-sm bg-gray-50 border opacity-80 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
  </div>

  <div className="mb-5">
    <label htmlFor={mainCurrency} className=" block mb-2 text-xl font-medium text-white-900 opacity-90 dark:text-white">Main Currency</label>
    
    <select onChange={(e)=>setMainCurrency(e.target.value)} name={mainCurrency} id={mainCurrency} value={mainCurrency} className="shadow-sm bg-gray-50 border opacity-80 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" >
    <option value="">Select Main Currency</option>
    
    {currencyNames && Object.keys(currencyNames).map((currency)=>(
      <option className=" p-1" key={currency} value={currency}>
        {currencyNames[currency]}
        </option>
    ))}

    
     </select>
    
  </div>

  <div className="mb-5">
    <label htmlFor={exchangeCurrency} className=" block mb-2 text-xl font-medium text-white-900 opacity-90 dark:text-white">Exchange Currency</label>
    <select onChange={(e)=>setExchangeCurrency(e.target.value)} name={exchangeCurrency} id={exchangeCurrency} value={exchangeCurrency} className="shadow-sm bg-gray-50 border opacity-80 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" >
    <option value="">Select Exchange Currency</option>
    {currencyNames && Object.keys(currencyNames).map((currency)=>(
      <option className=" p-1" key={currency} value={currency}>
        {currencyNames[currency]}
        </option>
    ))}
    </select>
    
  </div>

  <div className="mb-5">
    <label htmlFor={amount} className=" block mb-2 text-xl font-medium text-white-900 opacity-90 dark:text-white">Amount</label>
    <input onChange={(e)=>setAmount(e.target.value)} type="Amount" id={amount} name={amount} className="shadow-sm bg-gray-50 border opacity-80 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Amount of Main Currency" required />
  </div>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Exchange</button>

  </form>
</section>


</div>


    </div>
  )
}
