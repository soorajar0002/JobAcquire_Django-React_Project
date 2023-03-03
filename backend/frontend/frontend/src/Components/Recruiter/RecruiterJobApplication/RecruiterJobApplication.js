import React, { useEffect, useState, useRef } from "react"
import useAxios from "../../../Axios/useAxios"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { BsFillChatRightFill } from "react-icons/bs"
const RecruiterJobApplication = () => {
  const id = useSelector((state) => state.user.user.id)
  const user = useSelector((state) => state.user.user)
  console.log(user.firstname)
  console.log(id)
  const [search, setSearch] = useState(null)
  console.log(search, "12")
  const [applications, setApplication] = useState([])
  console.log(applications)
  const api = useAxios()
  const data = async () => {
    try {
      const response = await api.post(`/recruiter/job_applications/`, {
        id,
        search,
      })
      setApplication(response.data)
      console.log("userdisc", response.data)
    } catch (err) {
      console.log(err)
    }
  }
 
  // const [value,setValue] = useState([])
  
  const statusChange = async (id,value) => {
    console.log(value,id)
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
  
  const handleChange = (event) => {
    event.target.value
      ? setSearch(event.target.value)
      : setSearch(event.target.innerText)
    console.log(event.target.value, "222")
    data()
  }
  function createConversationName(first_name) {
    const namesAlph = [user?.firstname, first_name].sort()
    return `${namesAlph[0]}__${namesAlph[1]}`
  }
  return (
    <div className=" mb-96">
      <div className="relative overflow-x-auto  sm:rounded-lg mx-6 md:mx-48 mb-20 ">
        <h1 className="text-2xl text-left font-extrabold mb-6">
          
        </h1>
        <div className="mb-6">
          <div className=" flex justify-between sm:justify-between items-center  ">
            <Link to="/recruiter_application_report">
              {" "}
              <button
                type="button"
                class="text-gray-100 bg-black border border-gray-300 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2 mr-2 "
              >
                REPORT
              </button>{" "}
            </Link>
            <div className="relative border rounded-md">
              <input
                type="text"
                name="search"
                onChange={handleChange}
                className="h-10 w-72 pr-8 pl-5 rounded z-0 shadow focus:outline-none text-sm font-normal"
                placeholder="Search "
              />

              <div className="absolute top-3 right-3 btn">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search </span>
              </div>
            </div>
          </div>
        </div>
        <table className="w-full text-sm text-left overflow-y-auto  shadow-md text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200  dark:text-gray-400">
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
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>

          {applications?.map((application) => (
            <tbody>
              <tr className=" border-b  bg-gray-50 px-2 text-center">
                <Link to={`/recruiter_user_profile/${application.user_id}`}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap "
                  >
                    {application.first_name} {application.last_name}
                  </th>
                </Link>
                <td className="px-6 py-4">{application.job_name}</td>
                <td className="px-6 py-4">{application.phone_number}</td>
                <td className=" py-4">
                  <span className="">
                    {" "}
                    {application.created
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("-")}
                  </span>
                </td>
                <td className="px-6 py-4">{application.status}</td>
                <td className="px-6 py-4">
                  {" "}
                  <Link
                    to={`/chats/${createConversationName(
                      application.first_name
                    )}`}
                  >
                    <a href="" className="font-medium   hover:underline">
                      <BsFillChatRightFill />
                    </a>
                  </Link>{" "}
                </td>
                <td className="px-6 ">
                  <select
                    id="status"
                    // onChange={() => statusChange(application.id)}
                    onChange={(e)=>statusChange(application.id,e.target.value)}
                    className="bg-gray-50 border  text-gray-900 text-xs rounded  block w-full px-2.5 py-2 sm:p-2 sm:mx-4"
                  >
                    <option value="DEFAULT" disabled>
                      CHANGE STATUS
                    </option>
                    <option value="PENDING" >PENDING</option>
                    <option value="SHORTLISTED" >SHORTLISTED</option>
                    <option value="INTERVIEWED" >INTERVIEWED</option>
                    <option value="SELECTED" >SELECTED</option>
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
