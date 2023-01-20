import React, { useEffect, useState } from "react"
import useAxios from "../../Axios/useAxios"
import { useParams } from "react-router-dom"
import {useSelector} from 'react-redux';
 
const UserJobDetailed = () => {
  const [jobStatus, setJobStatus] = useState([])
  console.log(jobStatus,"dd")
  const applied =jobStatus?.applied
  const { postId } = useParams()
  console.log(postId)
  const [jobs, setJobs] = useState([])
  
  const api = useAxios()
  const user = useSelector((state) => state.user.user);
  console.log(user.id)
  
  const ids={
    job_id:postId,
    user_id:user.id,
    rec_id:jobs.recruiter_id,
  }
  const applyJob = async () => {
    
    try {
      
      const response = await api.post(`/user/job/apply`, {
        
        ids,
      
        
        
      });
      
      console.log(response.data)
      setJobStatus(response.data)
     
      
    
    }
     catch (err) {
      console.log(err);
    }
  };
  const data = async () => {
    try {
      const response = await api.post(`/user/jobdiscover`, {
        id:postId,
      })
      setJobs(response.data[0])
      console.log("userdisc", response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    data()
   
  }, [])

  return (
    <div className="">
        
        
      <div class="grid grid-cols-8 lg:grid-cols-12  mb-10 mx-auto ">
        
        <div class="col-start-2 lg:col-start-4 col-span-6 border rounded-2xl p-3  ">
          <div className="">
          <div className="flex justify-between mr-4">
          <h1 className="text-sm font-bold mt-2 text-left ">
              {jobs.designation}
            </h1>
            <img
              class="w-8 h-8 rounded-full mt-1"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Rounded avatar"
            />
            
            
          </div>
          <div className="flex justify-start mr-4 ">
            <p className=" text-sm  font-semibold ">{jobs.company_name}</p>
          </div>
          <div className="flex justify-start mr-4 mt-2">
            <p className=" text-sm  font-normal ">Mumbai</p>
          </div>
          <div className="flex justify-start mr-4 mt-2">
            
            <p className="text-sm font-normal ">
            ₹{jobs.payscale_from}-{jobs.payscale_to}
            </p>
            
          </div>
         {applied?
          <div className="flex justify-start mr-4 mt-2 ">
          <button  class="text-white bg-blue-700    font-medium rounded-lg text-sm mt-4 px-5 py-1 mr-2 mb-2 dark:bg-black disabled  ">APPLIED</button>
           
            
          </div>:
           <div className="flex justify-start mr-4 mt-2">
           <button  onClick={applyJob} class="text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm mt-4 px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">APPLY</button>
            
             
           </div>
           }
          
          </div>
          <div>
            <h1 className="font-semibold mt-4 ">JOB DESCRIPTION</h1>
            <p className="text-sm text-gray-600 mt-2">{jobs.job_description}</p>
          </div>
          <div>
            <h1 className="font-semibold mt-4">REQUIREMENT</h1>
            <p className="text-sm text-gray-600 mt-2">{jobs.criteria}</p>
          </div>
          <div>
            <h1 className="font-semibold mt-4">EXPERIENCE</h1>
            <p className="text-sm text-gray-600 mt-2">{jobs.experience_from} to {jobs.experience_to} Yrs</p>
          </div>
          <div>
            <h1 className="font-semibold mt-4">JOB MODE</h1>
            
            <p className="text-sm text-gray-600 mt-2"> {jobs.workmode}</p>
          </div>
          <div>
            <h1 className="font-semibold mt-4">JOB TYPE</h1>
            
            <p className="text-sm text-gray-600 mt-2"> {jobs.type}</p>
          </div>
          <div>
            <h1 className="font-semibold mt-4">COMPANY DETAILS</h1>
            <p className="text-sm text-gray-600 mt-2"> {jobs.company_website}</p>
            <p className="text-sm text-gray-600 mt-2"> {jobs.company_email}</p>
            <p className="text-sm text-gray-600 mt-2"> {jobs.company_mobile}</p>
            
            <p className="text-sm text-gray-600 mt-2"> {jobs.company_address_line1}</p>
            <p className="text-sm text-gray-600 mt-2"> {jobs.company_address_line2}</p>
          </div>
          <div>
            <h1 className="font-semibold mt-4">POSTED BY</h1>
            <p className="text-sm text-gray-600 mt-2"> {jobs.first_name} {jobs.last_name}</p>
            
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default UserJobDetailed