import React from 'react'
import { Link } from 'react-router-dom';
const UserJobDetailed = () => {
  return (
    <div className="">
        
        
      <div class="grid grid-cols-8 lg:grid-cols-12 gap-4 mb-10 mx-auto">
        
        <div class="col-start-2 lg:col-start-4 col-span-6 border rounded-2xl p-4 shadow ">
          <div className="flex justify-between mr-4">
          <h1 className="text-sm font-bold mt-2 ">
              FULL STACK DEVELOPER
            </h1>
            <img
              class="w-8 h-8 rounded-full mt-1"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Rounded avatar"
            />
            
            
          </div>
          <div className="flex justify-start mr-4 ">
            <p className=" text-sm  font-semibold ">Google</p>
          </div>
          <div className="flex justify-start mr-4">
            <p className=" text-sm  font-normal ">Mumbai</p>
          </div>
          <div className="flex justify-start mr-4">
            
            <p className="text-sm font-normal ">
            ₹20000-50000
            </p>
            
          </div>
          <div className="flex justify-start mr-4">
            
            <h1 className="text-sm font-normal">
            0-2 Yrs
            </h1>
            
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default UserJobDetailed