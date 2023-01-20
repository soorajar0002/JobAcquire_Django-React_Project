import React, { useEffect, useState } from "react"
import useAxios from "../../Axios/useAxios"
import { Link } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
const UserJobDiscover = () => {
  const [message, setMessage] = useState("")
  console.log(message, "ass")

  const [jobs, setJobs] = useState()
  const [count, setCount] = useState(1)
 const nextPage = () => {
    
    setCount(count + 1 );
    data();
    
}
  const prevPage = () => {
    setCount(count - 1 );
    data();
}
  console.log(count)
  console.log(jobs)
  let { user } = useSelector((state) => state.user)
  const handleChange = (event) => {
    event.target.value
      ? setMessage(event.target.value)
      : setMessage(event.target.innerText)
    console.log(event.target.value, "222")
    data()
  }
  
  
  const api = useAxios()
  const search = message
  const data = async () => {
    try {
      const response = await api.get(`/jobdiscover?page=${count}&search=${search}`, {})
      setJobs(response.data.results)
      console.log("userdisc", response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    data()
  }, [])
  return (
    <div>
      {user.isLoggedIn ? (
        <div>
          <div className="grid lg:grid-cols-6 container mx-auto lg:px-48 sm:order-first">
            <div className="lg:col-span-2 px-16  sm:px-4  invisible sm:visible ">
              <div className="border bg-gray-100 border-gray-300 text-center rounded-md shadow-2xl sm:mt-20 p-4">
                <h1 className="font-bold text-lg mb-2 ">CATEGORIES</h1>
                <div className="">
                  <Link>
                    <p className="text-xs  mt-2" onClick={handleChange}>
                      Development & IT
                    </p>
                  </Link>
                  <Link>
                    <p className="text-xs  mt-2" onClick={handleChange}>
                      Design & Creative
                    </p>
                  </Link>
                  <Link>
                    <p className="text-xs mt-2" onClick={handleChange}>
                      Sales & Marketing
                    </p>
                  </Link>
                  <Link>
                    <p className="text-xs  mt-2" onClick={handleChange}>
                      Finance & Accounting
                    </p>
                  </Link>
                  <Link>
                    <p className="text-xs mt-2" onClick={handleChange}>
                      Writing & Translation
                    </p>
                  </Link>
                </div>
                <hr className="mt-4" />
                <h1 className="font-bold text-lg mt-4 ">WORK TYPE</h1>
                <div className="">
                  <Link>
                    <p className="text-xs  mt-2" onClick={handleChange}>
                      Part Time
                    </p>
                  </Link>
                  <Link>
                    <p className="text-xs  mt-2" onClick={handleChange}>
                      Full Time
                    </p>
                  </Link>
                </div>
                <hr className="mt-4" />
                <h1 className="font-bold text-lg mt-4 ">WORK MODE</h1>
                <div className="">
                  <Link>
                    <p className="text-xs  mt-2" onClick={handleChange}>
                      On-Site
                    </p>
                  </Link>
                  <Link>
                    <p className="text-xs  mt-2" onClick={handleChange}>
                      Remote
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 p-4 order-first sm:order-last">
              <div className="mb-6">
                <div className=" flex justify-center sm:justify-end items-center  ">
                  <div className="relative border rounded-md">
                    <input
                      type="text"
                      name="search"
                      onChange={handleChange}
                      className="h-10 w-72 pr-8 pl-5 rounded z-0 shadow focus:outline-none text-sm font-normal"
                      placeholder="Search Job"
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

              <div class="grid gap-4 mb-10 mx-auto">
                {jobs?.map((job) => (
                  <div class="  col-span-4 border bg-gray-50 rounded-2xl p-4 shadow ">
                    <div className="flex justify-between mr-4">
                      <img
                        class="w-8 h-8 rounded-full mt-1"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="Rounded avatar"
                      />
                      <h1 className=" font-bold mt-2 ml-2 text-end">
                        {job.designation}
                      </h1>
                    </div>
                    <div className="flex justify-end mr-4">
                      <p className="text-sm mt-2 ml-2 text-end">
                        {job.category}
                      </p>
                    </div>

                    <div className="flex justify-between mr-4 mt-2">
                      <p className=" text-sm  font-semibold ">
                        {job.company_name}
                      </p>
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
                    <div className="flex justify-between mr-4 mt-1"></div>

                    <div className="flex justify-center md:justify-end mr-4 ">
                      <Link to={`/user_job_detailed/${job.id}`}>
                        <button
                          type="button"
                          class="text-white bg-gray-800 hover:bg-gray-900   font-medium rounded-md text-sm px-2 py-2  mt-4 dark:bg-black dark:hover:bg-gray-700  dark:border-gray-700"
                        >
                          VIEW DETAILS
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
                <div className="flex justify-center  col-span-4 mt-10">
                  <span onClick={() => 
                    prevPage()
                    }>
                  <a
                    href="#"
                    
                    class="  px-4 py-2 mr-3 text-sm font-medium text-gray-100 bg-black border border-gray-300 rounded-lg "
                  >
                    
                      
                    Previous
                  </a></span>
                  <span onClick={() => nextPage()}>
                  <a
                    href="#"
                    
                    class=" px-6 py-2  text-sm font-medium text-gray-100 bg-black border border-gray-300 rounded-lg "
                  >
                    Next
                    
                  </a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  )
}

export default UserJobDiscover
