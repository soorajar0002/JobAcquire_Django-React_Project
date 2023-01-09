import React, { useEffect, useState } from "react"
import useAxios from "../../Axios/useAxios"
import { Link, useParams } from "react-router-dom"

const AdminPostApprove = () => {
  const [job, setJobs] = useState([])
  const api = useAxios()
  const params = useParams()
  const id = params.id
  console.log(id)
  const data = async () => {
    try {
      const response = await api.get(`admin/approve/post/${id}/`, {})
      setJobs(response.data)
      console.log("rec321", response.data)
    } catch (err) {
      console.log(err)
    }
  }
  const approve = async () => {
    try {
      const response = await api.post(`admin/approve/post`, {
        id,
      })
      
      console.log("rec321", response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    data()
  }, [])
  return (
    <div className="">
      <div className="grid  lg:grid-cols-12 gap-4 mb-10 mx-auto">
       
        <div className="mx-4 lg:col-start-4 col-span-6 border rounded-2xl p-4 shadow ">
        <h1 className="text-center text-2xl font-bold mb-8">POST APPROVE REQUEST</h1>
          <div className="flex justify-between mr-4">
            <img
              className="w-8 h-8 rounded-full mt-1 mb-2"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Rounded avatar"
            />
            <h1 className="text-sm text-end font-bold mt-2 ml-14 ">
              {job.designation}
            </h1>
          </div>
          <div className="flex justify-between mr-4 mt-4">
            <p className=" text-sm  font-semibold">{job.company_name}</p>
            <p className=" text-sm  font-normal ">{job.location}</p>
          </div>

          <div className="flex justify-between mr-4">
            <p className="text-sm font-normal ">{job.type}</p>

            <p className="text-sm font-normal ">
              {job.experience_from}-{job.experience_to} Yrs
            </p>
          </div>
          <div className="flex justify-between mr-4">
            <h1 className="text-sm font-normal">{job.workmode}</h1>
            <h1 className="text-sm font-normal">
              ₹{job.payscale_from}-{job.payscale_to}/month
            </h1>
          </div>
          <div className="flex justify-between mr-4">
            <p className=" text-sm  font-normal "></p>
            <p className=" text-sm  font-normal ">
              No: of Vacancy: {job.vacancies}
            </p>
          </div>
          <hr className="my-6   "/>
          <div className=" mr-4 mt-2 text-center">
            <h1 className="font-semibold text-left">Job Description:</h1>
            <h1 className="text-sm font-normal text-left mt-2">
              {job.job_description}
            </h1>
            <h1 className="font-semibold text-left mt-2">Criteria:</h1>
            <h1 className="text-sm font-normal text-left mt-2">
              {job.criteria}
            </h1>
            <hr className="my-6   "/>
            <h1 className="font-semibold text-left mt-2">Recruiter Details:</h1>
            
            <h1 className="text-sm font-normal text-left mt-2">
              {job.first_name} {job.last_name}
            </h1>
            <h1 className="text-sm font-normal text-left mt-2">
              {job.company_name}
            </h1>
            <h1 className="text-sm font-normal text-left mt-2">
              {job.company_website}
            </h1>
            <h1 className="text-sm font-normal text-left mt-2">
              {job.company_email}
            </h1>
            <h1 className="text-sm font-normal text-left mt-2">
              {job.company_address_line1}
            </h1>
            <h1 className="text-sm font-normal text-left mt-2">
              {job.company_address_line2}
            </h1>
            <Link to="/"><button type="button" onClick={approve}  className="text-white bg-red-800  hover:bg-red-900   font-medium rounded-md text-sm px-4 py-1  mt-4 dark:bg-red-800 dark:hover:bg-red-700  dark:border-gray-700">APPROVE</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPostApprove
