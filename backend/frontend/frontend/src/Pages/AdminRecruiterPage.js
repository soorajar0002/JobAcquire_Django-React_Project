import React, { useEffect,useState } from "react"
import useAxios from "../Axios/useAxios"
import { useDispatch, useSelector } from "react-redux"
import { usersView } from "../Redux/Reducers/AuthSlice"
import axiosInstance from "../Axios/axiosPrivate"
import { Link } from "react-router-dom"
import NavBar1 from "../Components/NavBar/NavBar"
import { BiLogOutCircle } from "react-icons/bi"
import { logOutAdmin } from '../Redux/Reducers/AuthSlice'
const AdminRecruiter = () => {
  const dispatch = useDispatch()
  //const users = useSelector((state) => state.user.view_user.users)
  const [users, setUsers] = useState([])
  console.log(users)
  const api = useAxios()
  const handleBlockUser = async (id) => {
    try {
      console.log(id)
      const response = await axiosInstance.post(`/block/`, {
        id: id,
      })
      data()
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }
  const data = async () => {
    try {
      const response = await api.get(`/admin/recruiter/`, {})
      	console.log(response.data)
	setUsers(response.data)
      //dispatch(usersView(response.data))
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    data()
  }, [])

  const logout = () => {
    
    dispatch(logOutAdmin());
    
  };

  return (
    <div>
      <div class="grid grid-cols-12  ">
        <div class="bg-black  sm:col-span-2 h-screen invisible sm:visible">
          <div className="bg-gray-700 mt- pb-12  ">
            <div className="flex justify-center">
              <img
                class="w-14 h-14 rounded-full mt-8"
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=360&t=st=1673897504~exp=1673898104~hmac=c690de999eb731a6c3135ea02452e7af3bf97f155fa0bab5ab029b5cb2655aa8"
                alt="Rounded avatar"
              />
            </div>
            <div className="flex justify-center mt-3 text-sm">
              <Link to="">
                <BiLogOutCircle className="text-white " onClick={logout}/>
              </Link>
            </div>

            <Link to="/admin_dashboard"> <p className=" text-xs mt-3 font-bold text-white">ADMIN</p></Link>
          </div>
          t
          <div>
            <Link to="/admin_user_page">
              <h1 className="text-white font-semibold text-md mt-10">USERS</h1>
            </Link>
          </div>
          <div>
            <Link to="/admin_recruiter_page">
              <h1 className="text-white font-semibold text-md mt-6">
                RECRUITERS
              </h1>
            </Link>
          </div>
          <div>
            <Link to="/admin_payment_page">
              <h1 className="text-white font-semibold text-md mt-6">
                PAYMENTS
              </h1>
            </Link>
          </div>
          <div>
          <Link to="/admin_report_page">
            <h1 className="text-white font-semibold text-md mt-6">
              REPORT
            </h1>
          </Link>
        </div>
        </div>
        <div class="col-span-10  lg:col-span-10  ">
        <NavBar1 className=""/>
        <div className=" mt-6 sm:mt-20">
            <div className="container mx-auto">
              <h1 className="font-bold text-3xl text-left ml-4 mb-6">
                RECRUITER MANAGEMENT
              </h1>
              <div className=" p-4">
                <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left text-black dark:text-black">
                    <thead class="text-xs text-black uppercase  dark:bg-gray-50 dark:text-gray-700">
                      <tr>
                        <th scope="col" class="py-3 px-2">
                          User Id
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Username
                        </th>
                        <th scope="col" class="py-3 px-2">
                          First Name
                        </th>
                        <th scope="col" class="py-3 px-2">
                          Last Name
                        </th>
                        <th scope="col" class="py-3 px-2">
                          Phone Number
                        </th>
                        <th scope="col" class="py-3 px-12">
                          Email
                        </th>
                        <th scope="col" class="py-3 px-10">
                          Status
                        </th>

                        <th scope="col" class="py-3 px-10">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users?users.map((user) => (
                        <tr class=" border-b bg-gray-200 ">
                          <td class="py-2 px-6">{user.id}</td>
                          <td class="py-2 px-6">{user.username}</td>
                          <td class="py-2 px-8">{user.first_name}</td>
                          <td class="py-2 px-7">{user.last_name}</td>
                          <td class="py-2 px-6">{user.phone_number}</td>
                          <td class="py-2 px-6">{user.email}</td>

                         
                            <td class="py-2 pl-10">
                              {user.is_active ? "Active" : "Blocked"}
                            </td>
                          
                          <td class="flex items-center py-4 px-8 space-x-3">
                            <a
                              href="#"
                              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              {user.is_active ? (
                                <span
                                  className=""
                                  onClick={() => handleBlockUser(user.id)}
                                >
                                  Block
                                </span>
                              ) : (
                                <span
                                  className=""
                                  onClick={() => handleBlockUser(user.id)}
                                >
                                  Unblock
                                </span>
                              )}
                            </a>
                          </td>
                        </tr>
                      )):" "}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminRecruiter
