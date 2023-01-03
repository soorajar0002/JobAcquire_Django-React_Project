import React from 'react'

const RecruiterJobEdit = () => {
  return (
    <div>
    <div className="grid grid-cols-10 gap-4 mb-20">
      <div className="col-start-2 col-span-8 ">
        <h1 className="text-black font-bold text-xl md:text-3xl  mb-2">EDIT POST</h1>
        <div className=" p-4">
        <form>
  <div className="grid gap-6 mb-6 md:grid-cols-2">
      <div>
          <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
          <input type="text" id="first_name" className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 " placeholder="Job Category" required/>
      </div>
      <div>
          <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Designation</label>
          <input type="text" id="first_name" className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 " placeholder="Designation" required/>
      </div>
      <div>
          <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Vacancies</label>
          <input type="number" id="first_name" className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 " placeholder="Total Vacancies" required/>
      </div>
      <div>
          <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Location</label>
          <input type="text" id="first_name" className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 " placeholder="Job Location" required/>
      </div>
      <div>
          <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Type</label>
          <input type="text" id="first_name" className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 " placeholder="Part Time / Full Time" required/>
      </div>
      <div>
          <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Work Mode</label>
          <input type="text" id="first_name" className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 " placeholder="On-Site / Remote" required/>
      </div>
      <div>
          <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Experience From</label>
          <input type="number" id="first_name" className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 " placeholder="Min Year" required/>
      </div>
      <div>
          <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Experience To</label>
          <input type="number" id="first_name" className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 " placeholder="Max Year" required/>
      </div>
      <div>
          <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Job Description</label>
          <input type="text" id="first_name" className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 " placeholder="Description of Job" required/>
      </div>
      <div>
          <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Criteria</label>
          <input type="text" id="first_name" className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 " placeholder="Criteria" required/>
      </div>
      <div>
          <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Payscale From</label>
          <input type="number" id="first_name" className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 " placeholder="From Range" required/>
      </div>
      <div>
          <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Payscale To</label>
          <input type="number" id="first_name" className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 " placeholder="To Range" required/>
      </div>
      
      
  </div>
  <div class="flex space-x-2 justify-center">
<button type="button" class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">POST</button>
</div>
  </form>

        </div>

      </div>
    </div>
  </div>
  )
}

export default RecruiterJobEdit