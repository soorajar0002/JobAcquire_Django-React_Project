import React, { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import useAxios from "../../Axios/useAxios"
import { BiLogOutCircle } from "react-icons/bi"
import { useDispatch } from "react-redux"
import { logOutAdmin } from "../../Redux/Reducers/AuthSlice"
import ChartData from "./ChartData"
import NavBar1 from '../../Components/NavBar/NavBar'
const NavBar = () => {
  const [datas, setDatas] = useState(0)
  const value = 0
  const total = datas?datas.total.amount__sum:value

  const api = useAxios()
  const dispatch = useDispatch()
  const data = async () => {
    try {
      const response = await api.get(`/admin/dashboard`, {})
      console.log(response.data)
      setDatas(response.data)
      
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    data()
  }, [])
  const logout = () => {
    dispatch(logOutAdmin())
  }
  return (
    <div className="">
      <div className="grid grid-cols-12  ">
        <div className="bg-black  sm:col-span-2  invisible sm:visible ">
          <div className="bg-gray-700 mt- pb-12  ">
            <div className="flex justify-center">
              <img
                className="w-14 h-14 rounded-full mt-8"
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=360&t=st=1673897504~exp=1673898104~hmac=c690de999eb731a6c3135ea02452e7af3bf97f155fa0bab5ab029b5cb2655aa8"
                alt="Rounded avatar"
              />
            </div>
            <div className="flex justify-center mt-3 text-sm">
              <Link to="">
                <BiLogOutCircle className="text-white " onClick={logout} />
              </Link>
            </div>

            <Link to="/admin_dashboard">
              {" "}
              <p className="  mt-3 font-bold text-xs text-white">ADMIN</p>
            </Link>
          </div>
        <div className="">
          <div className="">
            <Link to="/admin_user_page">
              <h1 className="text-white font-semibold text-md mt-16">USERS</h1>
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
        </div>
       
        <div className="col-span-10  lg:col-span-10 h-screen ">
        <NavBar1 className=""/>
        <div className=" mt-6 sm:mt-20">
            <div className="container mx-auto">
              <h1 className="font-bold text-3xl text-left ml-4 mb-6">
                
              </h1>
              <div class="grid lg:grid-cols-3 gap-20 sm:mx-20">
                <div class="bg-gray-600 text-white text-xl font-bold p-6">
                  TOTAL USERS
                  <p className="mt-2">{datas.users}</p>
                  </div>
                <div class="bg-gray-600 text-white text-xl font-bold p-6">
                  TOTAL RECRUITERS
                  <p className="mt-2">{datas.recruiters}</p>
                  </div>
                <div class="bg-gray-600 text-white text-xl font-bold p-6">
                  TOTAL EARNINGS
                  <p className="mt-2">₹{total}</p>
                  </div>
                
              </div>
              <div className="flex justify-center mt-20 ">
              <ChartData datas={datas}/>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar