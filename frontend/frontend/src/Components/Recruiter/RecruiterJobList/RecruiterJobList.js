import React, { useEffect,useState } from 'react'
import useAxios from '../../../Axios/useAxios'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
const RecruiterJobList = () => {
  const id = useSelector((state) => state.user.user.id);
  console.log(id,"ge")
  const [jobs, setJobs] = useState();

 
  const api = useAxios();
  const data = async () => {
    try {
      
      const response = await api.post(`/recruiter/job/post`, {
        id,
        
        
      });
      setJobs(response.data)
      console.log("rec321",response.data)
     
      
    
    }
     catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    data();

   },[]);
  return (
    <div className="">
     
        <div className="grid grid-cols-8 lg:grid-cols-12  mb-4 mx-auto">
            <div className="col-start-2 lg:col-start-4 col-span-6  ">
            <div className="flex justify-between">
            <Link to="/recruiter_buy_post"><button type="button" className="text-white bg-red-800 hover:bg-red-900   font-medium rounded-md text-sm px-4 py-1  mt-4 dark:bg-red-800 dark:hover:bg-red-700  dark:border-gray-700">BUY POST</button></Link>
            <Link to="/recruiter_add_job"><button type="button" className="text-white bg-red-800 hover:bg-red-900   font-medium rounded-md text-sm px-4 py-1  mt-4 dark:bg-red-800 dark:hover:bg-red-700  dark:border-gray-700">ADD POST</button></Link>

            </div>
            <p className="text-sm font-semibold mt-2 ml-1">Balance Post:10</p>
            </div>

        </div>
        
      <div className="grid grid-cols-8 lg:grid-cols-12 gap-4 mb-10 mx-auto">
      {jobs?.map((job)=>(
        <div className="col-start-2  lg:col-start-4 col-span-6 border rounded-2xl p-4 shadow ">
          <div className="flex justify-between mr-4">
            <img
              className="w-8 h-8 rounded-full mt-1 mb-2"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Rounded avatar"
            />
            <h1 className="text-sm  font-bold mt-2 ml-14 ">
             {job.designation}
            </h1>
            
          </div>
          <div className="flex justify-between mr-4 ">
            <p className=" text-sm  font-semibold">{job.company_name}</p>
            <p className=" text-sm  font-normal ">{job.location}</p>
          </div>
         
          <div className="flex justify-between mr-4">
          <p className="text-sm font-normal ">
            {job.type}
            </p>
            
            <p className="text-sm font-normal ">
            {job.experience_from}-{job.experience_to} Yrs
           
            </p>
            
          </div>
          <div className="flex justify-between mr-4">
            
            <h1 className="text-sm font-normal">
            {job.workmode}
            </h1>
            <h1 className="text-sm font-normal">
            ₹{job.payscale_from}-{job.payscale_to}/month
            </h1>
            
          </div>
          <div className="flex justify-between mr-4">
            <p className=" text-sm  font-normal "></p>
            <p className=" text-sm  font-normal ">No: of Vacancy: {job.vacancies}</p>
          </div>
          <div className=" mr-4 mt-2 text-center">
            
            <h1 className='font-semibold text-left'>Job Description:</h1>
            <h1 className="text-sm font-normal text-left mt-2">
            {job.job_description}
            </h1>
            <h1 className='font-semibold text-left mt-2'>Criteria:</h1>
            <h1 className="text-sm font-normal text-left mt-2">
            {job.criteria}
            </h1>
            
            
          </div>
          <div className="flex justify-end mr-4">
          <Link to={`/recruiter_job_edit/${job.id}`}><button type="button" className="text-white bg-gray-800 hover:bg-gray-900   font-medium rounded-md text-sm px-4 py-1  mt-4 dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700">EDIT</button></Link>
            
          </div>
        </div>
         ))} 
        
      </div>
    </div>
  )
}

export default RecruiterJobList
