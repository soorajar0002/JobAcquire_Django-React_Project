import React, { useEffect,useState } from 'react'
import useAxios from '../../Axios/useAxios';
import { Link } from "react-router-dom"
import { BsFillChatRightFill } from 'react-icons/bs';
import {useDispatch,useSelector} from 'react-redux';
const UserAppliedJobs = () => {
    const [jobs, setJobs] = useState([])
    console.log(jobs,"ans")
    const api = useAxios();
    const id = useSelector((state) => state.user.user.id)
    const data = async () => {
        try {
          
          const response = await api.post(`/user/applied_jobs/`, {
          id
            
            
          });
          console.log(response.data)
          setJobs(response.data)
          
        
        }
         catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
        data();
    
       },[]);
  return (
    <div className='mx-16 lg:mx-48 mb-20'>
        <h1 className='text-2xl text-left font-extrabold my-4'>JOB APPLICATIONS</h1>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg text-center">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
            <tr>
                <th scope="col" className="px-6 py-3 font-bold text-sm">
                    JOB
                </th>
                <th scope="col" className="px-6 py-3 text-sm">
                    COMPANY
                </th>
                <th scope="col" className="px-6 py-3 text-sm">
                   LOCATION
                </th>
                <th scope="col" className="px-6 py-3 text-sm">
                   STATUS
                </th>
                <th scope="col" className="px-6 py-3 text-sm">
                   APPLIED DATE
                </th>
                <th scope="col" className="px-6 py-3 text-sm">
                    
                </th>
            </tr>
        </thead>
        <tbody>
        {jobs.map((job)=>(
            <tr className=" border-b bg-gray-50">
                <Link to={`/user_job_detailed/${job.job.id}`}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap ">
                {job.job.designation}
                </th>
                </Link>
                <td className="px-6 py-4 ">
                    {job.job.company_name}
                </td>
                <td className="px-6 py-4">
                {job.job.location}
                </td>
                <td className="px-6 py-4">
                {job.status}
                </td>
                <td className="px-6 py-4">
                    {job.created.slice(0,10).split('-').reverse().join('-')}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium   hover:underline"><BsFillChatRightFill/></a>
                </td>
            </tr>
              ))}
           
        </tbody>
    </table>
</div>

    </div>
  )
}

export default UserAppliedJobs