import React, { useEffect, useState } from "react"
import useAxios from "../../../Axios/useAxios"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { BsFillChatRightFill } from 'react-icons/bs';
const RecruiterJobApplication = () => {
  const id = useSelector((state) => state.user.user.id)
  console.log(id)
  const [applications, setApplication] = useState([])
  console.log(applications)
  const api = useAxios()
  const data = async () => {
    try {
      const response = await api.post(`/recruiter/job_applications/`, {
        id,
      })
      setApplication(response.data)
      console.log("userdisc", response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const statusChange = async (id) => {
    const select = document.getElementById("status")
    const value = select.options[select.selectedIndex].value
    
    console.log(value)
    try {
      console.log(id, "12")
      const response = await api.patch(`/recruiter/job_applications/`, {
        id,
        status: value,
      })

      console.log(response.data)
      data()
      
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    data()
  }, [])
  return (
    <div className="h-screen">
      <div className="relative overflow-x-auto  sm:rounded-md mx-6 md:mx-48 mb-20 mt-10">
        <h1 className="text-sm text-left font-semibold mb-2">
         APPLICATIONS DETAILS
        </h1>
        <table className="w-full text-sm text-left shadow-md text-gray-500 dark:text-gray-500 ">
          <thead className="text-xs text-gray-300 uppercase bg-gray-500  dark:text-gray-600">
            <tr className="text-center">
              <th scope="col" className="px-6 py-3 ">
                APPLICANT
              </th>
              <th scope="col" className="px-6 py-3">
                POST
              </th>
              <th scope="col" className="px-6 py-3">
                PHONE NO
              </th>
              <th scope="col" className="px-6  py-3">
                APPLIED ON 
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3">
                
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
         
            {applications?.map((application) => (
                 <tbody>
              <tr className=" border-b  bg-gray-50 px-2 text-center">
               <Link to={`/recruiter_user_profile/${application.user_id}`}><th
                  scope="row"
                  className="px-6 py-4 capitalize font-medium text-gray-600 whitespace-nowrap  "

                >
                  {application.first_name} {application.last_name}
                </th></Link> 
                <td className="px-6 py-4">{application.job_name}</td>
                <td className="px-6 py-4">{application.phone_number}</td>
                <td className=" py-4">
                 <span className=""> {application.created
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-")}</span>
                </td>
                <td className="px-6 py-4">{application.status}</td>
                <td className="px-6 py-4">  <a href="#" className="font-medium   hover:underline"><BsFillChatRightFill/></a></td>
                <td className="px-6 ">
                  <select
                  
                    id="status"
                    
                    onChange={()=>statusChange(application.id)}
                    className="bg-gray-50 border  text-gray-900 text-xs rounded  block w-full px-2.5 py-2 sm:p-2 sm:mx-4"
                  >
                    <option value="DEFAULT" disabled>CHANGE STATUS</option>
                    <option value="PENDING">PENDING</option>
                    <option value="SHORTLISTED">SHORTLISTED</option>
                    <option value="INTERVIEWED">INTERVIEWED</option>
                    <option value="SELECTED">SELECTED</option>
                  </select>
                </td>
              </tr>
              </tbody>
            ))}
          
        </table>
      </div>
    </div>
  )
}

export default RecruiterJobApplication
