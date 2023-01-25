import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useAxios from "../../../Axios/useAxios"
const RecruiterUserProfile = () => {
    const { id } = useParams()
    const api = useAxios()
    const [userdata, setuserData] = useState([])
    const data = async () => {
        try {
          const response = await api.post(`/recruiter/user_profile`, {
            id,
          })
          
          console.log("userdisc321", response.data)
          setuserData(response.data)
        } catch (err) {
          console.log(err)
        }
      }
      useEffect(() => {
        data()
       
      }, [])
    
  return (
    <div className="container mx-auto mb-20 mt-2">
     <h1 className="text-black text-left ml-6 lg:ml-48 font-bold text-4xl">PROFILE</h1>

      <div className="grid gap-6 lg:grid-cols-9  mx-4 mt-5  ">
        
        <div className="p-4 lg:col-start-2 lg:col-span-3 rounded-xl border  border-gray-100 bg-gray-100  text-black  text-center shadow-2xl ">
          <img
            class="w-20 h-20 rounded-full mx-auto "
            src={
              userdata.profile_picture
                ? `http://localhost:8000/api${userdata.profile_picture}`
                : null
            }
            alt="Large avatar"
          ></img>
          <h1 className="text-2sm font-bold mt-6">{userdata.title}</h1>
          <p className="text-2sm  font-medium">{userdata.bio}</p>
          
          <div className=" p-4 my-2   ">
            <h1 className="font-extrabold text-2xl mx-6 ">BASIC INFO</h1>
            <div className="mt-6 font-normal text-sm mx-6 uppercase">
              <h1 className="my-2">
                
                <span className="pl-2">{userdata.first_name} {userdata.last_name}</span>
              </h1>
              <h1 className="my-2">
                <span className="pl-2 lowercase">{userdata.email}</span>
              </h1>
              <h1 className="my-2">
                <span className="pl-2">{userdata.phone_number}</span>
              </h1>
              <h1 className="my-2">
                
                <span className="pl-2">{userdata.desired_job}</span>
              </h1>
              <h1 className="my-2">
               
                <span className="pl-2">{userdata.desired_location}</span>
              </h1>
            </div>
          </div>
          <button
            type="button"
            class=" bg-white border border-gray-300 focus:outline-none   font-normal rounded-md text-2sm px-2 py-1 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 "
          >
            RESUME
          </button>
          
        </div>
        <div className="lg:col-span-4  p-4 shadow-2xl border-gray-100 rounded-xl bg-gray-100  text-black  text-left">
        <div className=" p-4 my-2 mt-">
            <h1 className="font-extrabold text-2xl mx-6 ">SKILLS</h1>
            <div className="mt-6  mx-6 font-normal text-sm  uppercase">
              <h1 className="my-2">{userdata.skill}</h1>
            </div>
          </div>
         
          <hr/>
          <div className=" p-4 my-2">
            <h1 className="font-extrabold text-2xl mx-6">EXPERIENCE</h1>
            <div className="mt-6 font-normal text-sm mx-6 uppercase">
              <h1 className="my-2">
                
                <span className="pl-2">{userdata.designation}</span>
              </h1>
              <h1 className="my-2">
               <span className="pl-2">{userdata.company}</span>
              </h1>

              <h1 className="my-2">
                <span className="pl-2">{userdata.joining_year}</span> - <span className="">{userdata.passout_year}</span>
              </h1>
              <h1 className="my-2">
              
              </h1>
            </div>
          </div>
          <hr/>
          <div className=" p-4 my-2 ">
            <h1 className="font-extrabold text-2xl mx-6">QUALIFICATION</h1>
            <div className="mt-6  mx-6 font-normal text-sm  uppercase">
              <h1 className="my-2">
               <span className="pl-2">{userdata.degree}</span>{" "}
              </h1>
              <h1 className="my-2">
                <span className="pl-2">{userdata.college}</span>
              </h1>
              <h1 className="my-2">
              <span className="pl-2">{userdata.start}</span> - <span className="">{userdata.end}</span>
              </h1>
              <h1 className="my-2">
           
              </h1>
              <h1 className="my-2">
              
                <span className="pl-2">{userdata.percentage}%</span>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecruiterUserProfile
