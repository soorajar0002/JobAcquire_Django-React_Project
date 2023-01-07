import React, { useEffect, useState } from "react"
import useAxios from "../../Axios/useAxios"
import { Link } from "react-router-dom"
const UserJobDiscover = () => {
  const [jobs, setJobs] = useState()
  console.log(jobs)
  const api = useAxios()
  const data = async () => {
    try {
      const response = await api.get(`/user/jobdiscover`, {})
      setJobs(response.data)
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
      <div class="grid grid-cols-8 lg:grid-cols-12 gap-4 mb-10 mx-auto">
        {jobs?.map((job) => (
          <div class="col-start-2 lg:col-start-4 col-span-6 border bg-gray-50 rounded-2xl p-4 shadow ">
            <div className="flex justify-between mr-4">
              <img
                class="w-8 h-8 rounded-full mt-1"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Rounded avatar"
              />
              <h1 className="text-sm font-bold mt-2 ml-2 text-end">{job.designation}</h1>
            </div>

            <div className="flex justify-between mr-4 mt-2">
              <p className=" text-sm  font-semibold ">{job.company_name}</p>
              <p className="text-sm font-normal">
                
                {job.experience_from}-{job.experience_to} Yrs
              </p>
              
            </div>

            <div className="flex justify-between mr-4 mt-1">
            <p className=" text-sm  font-normal ">{job.location}</p>
            <p className="text-sm font-normal">{job.type}</p>
             
            </div>
            <div className="flex justify-between mr-4 mt-1">
            <p className="text-sm font-normal ">
                ₹{job.payscale_from}-{job.payscale_to}
              </p>
            <p className="text-sm font-normal ">{job.workmode}</p>
              
            </div>
            <div className="flex justify-between mr-4 mt-1">
            
            
            
            </div>
           

            <div className="flex justify-center md:justify-end mr-4 ">
              <Link to={`/user_job_detailed/${job.id}`}>
                <button
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-900   font-medium rounded-md text-sm px-2 py-1  mt-4 dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700"
                >
                  VIEW DETAILS
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserJobDiscover
