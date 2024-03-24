import React from 'react'

export default function MainPage() {
  return (
    <div>
        <h1 className="text-5xl lg:mx-32 font-bold text-blue-700">
            Convert the Currency and Rates
        </h1>
        <p className="lg:mx-32 opacity-30 py-6">Introducing our currency conversion app: your one-stop solution for instant and reliable currency exchange. 
          With real-time rates for 150+ currencies and a user-friendly interface, converting money has never been easier. 
          Say goodbye to confusion and hello to seamless currency conversions, anytime, anywhere.</p>

<div className="mt-5 flex items-center justify-center flex-col"><section className="w-full lg:w-1/2">
  <form>
  <div class="mb-5">
    <label for="Date" className=" block mb-2 text-xl font-medium text-white-900 opacity-90 dark:text-white">Date</label>
    <input type="Date" id="" className="shadow-sm bg-gray-50 border opacity-80 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
  </div>

  <div class="mb-5">
    <label for="Main Currency" className=" block mb-2 text-xl font-medium text-white-900 opacity-90 dark:text-white">Main Currency</label>
    <select name="" id="" className="shadow-sm bg-gray-50 border opacity-80 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" >
    <Option value=""> Select the Currency </Option>
    </select>
    
  </div>

  </form>
</section>


</div>


    </div>
  )
}
