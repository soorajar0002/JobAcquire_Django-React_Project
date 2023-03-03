import React, { useEffect } from "react"
import profile from "../../Images/prof-pp.jpg"
import useAxios from "../../Axios/useAxios"
import { useSelector, useDispatch } from "react-redux"
import { userProfileData } from "../../Redux/Reducers/AuthSlice"
import { Link } from "react-router-dom"
const UserProfile = () => {
  const users = useSelector((state) => state.user.user)
  const usersProfile = useSelector((state) => state.user.profile)
  console.log(users)
  console.log(usersProfile)
  const id = useSelector((state) => state.user.user.id)
  const nodata = "--------------------------------------------"
  const dispatch = useDispatch()

  const api = useAxios()
  const data = async () => {
    try {
      const response = await api.post(`/user/profile/`, {
        id,
      })
      console.log(response.data)
      dispatch(userProfileData(response.data))
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    data()
  }, [])
  return (
    <div className="container mx-auto mb-20 mt-10">
     <h1 className="text-black text-left ml-6 lg:ml-48 font-bold text-4xl"></h1>

      <div className="grid gap-6 lg:grid-cols-9  mx-4 mt-5  ">
        
        <div className="p-4 lg:col-start-2 lg:col-span-3 rounded-xl border  border-gray-100   text-black  text-center shadow-2xl ">
          <img
            class="w-20 h-20 rounded-full mx-auto "
            src={
              usersProfile.profile_picture
                ? `https://jobacquire.online/api${usersProfile.profile_picture}`
                : profile
            }
            alt="Large avatar"
          ></img>
          <h1 className="text-2sm font-bold mt-6">{users.username}</h1>
          <p className="text-2sm  font-medium">{usersProfile.title}</p>
          <p className="font-normal text-sm   mt-4  mx-10">{usersProfile.bio}</p>
          <div className=" p-4 my-2   ">
            <h1 className="font-extrabold text-2xl mx-6 ">BASIC INFO</h1>
            <div className="mt-6 font-normal text-sm mx-6 uppercase">
              <h1 className="my-2">
                
                <span className="pl-2">
                  {users.firstname} {users.lastname}
                </span>
              </h1>
              <h1 className="my-2">
                <span className="pl-2 lowercase">{users.email}</span>
              </h1>
              <h1 className="my-2">
                <span className="pl-2">{users.phone_number}</span>
              </h1>
              <h1 className="my-2">
                
                <span className="pl-2">{usersProfile.desired_job}</span>
              </h1>
              <h1 className="my-2">
               
                <span className="pl-2">{usersProfile.desired_location}</span>
              </h1>
            </div>
          </div>
          
          <Link to="/user_profile_edit">
            <button
              type="button"
              class=" bg-white border border-gray-300 focus:outline-none   font-normal rounded-md text-2sm px-5 py-1  mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 "
            >
              EDIT
            </button>
          </Link>
        </div>
        <div className="lg:col-span-4  p-4 shadow-2xl border-gray-100 rounded-xl   text-black  text-left">
        <div className=" p-4 my-2 mt-">
            <h1 className="font-extrabold text-2xl mx-6 ">SKILLS</h1>
            <div className="mt-6  mx-6 font-normal text-sm  uppercase">
              <h1 className="my-2">{usersProfile.skill?usersProfile.skill:nodata}</h1>
            </div>
          </div>
         
          <hr/>
          <div className=" p-4 my-2">
            <h1 className="font-extrabold text-2xl mx-6">EXPERIENCE</h1>
            <div className="mt-6 font-normal text-sm mx-6 uppercase">
              <h1 className="my-2">
                
                <span className="pl-2">{usersProfile.designation?usersProfile.designation:nodata}</span>
              </h1>
              <h1 className="my-2">
               <span className="pl-2">{usersProfile.company?usersProfile.company:nodata}</span>
              </h1>

              <h1 className="my-2">
                <span className="pl-2">{usersProfile.joining_year?usersProfile.joining_year:nodata}</span> {usersProfile.joining_year?"-":""} <span className="">{usersProfile.passout_year}</span>
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
               <span className="pl-2">{usersProfile.degree?usersProfile.degree:nodata}</span>{" "}
              </h1>
              <h1 className="my-2">
                <span className="pl-2">{usersProfile.college?usersProfile.college:nodata}</span>
              </h1>
              <h1 className="my-2">
              <span className="pl-2">{usersProfile.start?usersProfile.start:nodata}</span> {usersProfile.start?"-":" "} <span className="">{usersProfile.end}</span>
              </h1>
              <h1 className="my-2">
           
              </h1>
              <h1 className="my-2">
              
                <span className="pl-2">{usersProfile.percentage?usersProfile.percentage+"%":nodata}</span>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
