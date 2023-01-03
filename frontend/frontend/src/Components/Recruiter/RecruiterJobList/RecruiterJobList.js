import React from "react"
import { Link } from 'react-router-dom';
const RecruiterJobList = () => {
  return (
    <div className="">
        <div className="grid grid-cols-8 lg:grid-cols-12  mb-4 mx-auto">
            <div className="col-start-2 lg:col-start-4 col-span-6  ">
            <div className="flex justify-between">
            <Link to="/recruiter_buy_post"><button type="button" class="text-white bg-red-800 hover:bg-red-900   font-medium rounded-md text-sm px-4 py-1  mt-4 dark:bg-red-800 dark:hover:bg-red-700  dark:border-gray-700">BUY POST</button></Link>
            <Link to="/recruiter_add_job"><button type="button" class="text-white bg-red-800 hover:bg-red-900   font-medium rounded-md text-sm px-4 py-1  mt-4 dark:bg-red-800 dark:hover:bg-red-700  dark:border-gray-700">ADD POST</button></Link>

            </div>
            <p className="text-sm font-semibold mt-2 ml-1">Balance Post:10</p>
            </div>

        </div>
        
      <div class="grid grid-cols-8 lg:grid-cols-12 gap-4 mb-10 mx-auto">
        
        <div class="col-start-2 lg:col-start-4 col-span-6 border rounded-2xl p-4 shadow ">
          <div className="flex justify-between mr-4">
            <img
              class="w-8 h-8 rounded-full mt-1"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Rounded avatar"
            />
            <h1 className="text-sm font-bold mt-2 ml-2">
              FULL STACK DEVELOPER
            </h1>
            
          </div>
          <div className="flex justify-end mr-4 ">
            <p className=" text-sm  font-semibold ">Google</p>
          </div>
          <div className="flex justify-end mr-4">
            <p className=" text-sm  font-normal ">Mumbai</p>
          </div>
          <div className="flex justify-end mr-4">
            
            <p className="text-sm font-normal ">
            ₹20000-50000
            </p>
            
          </div>
          <div className="flex justify-end mr-4">
            
            <h1 className="text-sm font-normal">
            0-2 Yrs
            </h1>
            
          </div>
          <div className="flex justify-end mr-4">
          <Link to="/recruiter_job_edit"><button type="button" class="text-white bg-gray-800 hover:bg-gray-900   font-medium rounded-md text-sm px-4 py-1  mt-4 dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700">EDIT</button></Link>
            
          </div>
        </div>
        <div class="col-start-2 lg:col-start-4 col-span-6 border rounded-2xl p-4 shadow ">
          <div className="flex justify-between mr-4">
            <img
              class="w-8 h-8 rounded-full mt-1"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Rounded avatar"
            />
            <h1 className="text-sm font-bold mt-2 ml-2">
              FULL STACK DEVELOPER
            </h1>
            
          </div>
          <div className="flex justify-end mr-4 ">
            <p className=" text-sm  font-semibold ">Google</p>
          </div>
          <div className="flex justify-end mr-4">
            <p className=" text-sm  font-normal ">Mumbai</p>
          </div>
          <div className="flex justify-end mr-4">
            
            <p className="text-sm font-normal ">
            ₹20000-50000
            </p>
            
          </div>
          <div className="flex justify-end mr-4">
            
            <h1 className="text-sm font-normal">
            0-2 Yrs
            </h1>
            
          </div>
          <div className="flex justify-end mr-4">
          <Link to="/recruiter_job_edit"><button type="button" class="text-white bg-gray-800 hover:bg-gray-900   font-medium rounded-md text-sm px-4 py-1  mt-4 dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700">EDIT</button></Link>
           
            
          </div>
        </div>
        <div class="col-start-2 lg:col-start-4 col-span-6 border rounded-2xl p-4 shadow ">
          <div className="flex justify-between mr-4">
            <img
              class="w-8 h-8 rounded-full mt-1"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Rounded avatar"
            />
            <h1 className="text-sm font-bold mt-2 ml-2">
              FULL STACK DEVELOPER
            </h1>
            
          </div>
          <div className="flex justify-end mr-4 ">
            <p className=" text-sm  font-semibold ">Google</p>
          </div>
          <div className="flex justify-end mr-4">
            <p className=" text-sm  font-normal ">Mumbai</p>
          </div>
          <div className="flex justify-end mr-4">
            
            <p className="text-sm font-normal ">
            ₹20000-50000
            </p>
            
          </div>
          <div className="flex justify-end mr-4">
            
            <h1 className="text-sm font-normal">
            0-2 Yrs
            </h1>
            
          </div>
          <div className="flex justify-end mr-4">
          <Link to="/recruiter_job_edit"><button type="button" class="text-white bg-gray-800 hover:bg-gray-900   font-medium rounded-md text-sm px-4 py-1  mt-4 dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700">EDIT</button></Link>
           
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecruiterJobList
