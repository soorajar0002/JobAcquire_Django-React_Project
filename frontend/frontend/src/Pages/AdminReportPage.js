import React, { useEffect, useState } from "react"
import useAxios from "../Axios/useAxios"
import { useDispatch, useSelector } from "react-redux"
import { ReactToPrint } from "react-to-print"
import { Link } from "react-router-dom"
import { BiLogOutCircle } from "react-icons/bi"
import { logOutAdmin } from "../Redux/Reducers/AuthSlice"
import NavBar1 from "../Components/NavBar/NavBar"
const AdminReportPage = () => {
  const api = useAxios()
  const [datas, setDatas] = useState([])

  const response = async () => {
    try {
      const response = await api.get(`admin/report`, {})
      setDatas(response.data)
      console.log("rec321", response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    response()
  }, [])

  const dispatch = useDispatch()
  const logout = () => {
    dispatch(logOutAdmin())
  }
  const Print = () =>{     
    //console.log('print');  
    let printContents = document.getElementById('printablediv').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
   document.body.innerHTML = originalContents; 
  }

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
                <BiLogOutCircle className="text-white " onClick={logout} />
              </Link>
            </div>

            <Link to="/admin_dashboard">
              {" "}
              <p className=" text-xs mt-3 font-bold text-white">ADMIN</p>
            </Link>
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
              <h1 className="text-white font-semibold text-md mt-6">REPORT</h1>
            </Link>
          </div>
        </div>
        <div class="col-span-10  lg:col-span-10 ">
        <NavBar1 className=""/>
          <div className=" mt-6 sm:mt-20">
            <div className="  flex justify-between ">
              <h1 className="font-bold text-3xl text-left ml-4 mb-6">REPORT</h1>

            </div>
           <div className="flex justify-between sm:mx-20">
            <p></p>
            <button type="button" onClick={Print} className="text-gray-100 bg-black border  border-gray-300  font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 ">PDF</button>
            </div>
            <div className="sm:mx-10 rounded-lg">
              <div class="relative overflow-x-auto">
               
                <div id="printablediv">
                  <table class="w-full text-sm text-left text-gray-500 bg-gray-50">
                    <thead class="text-xs text-gray-700 uppercase">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          SL NO
                        </th>
                        <th scope="col" class="px-6 py-3">
                          APPLICANT
                        </th>
                        <th scope="col" class="px-6 py-3">
                          POST
                        </th>
                        <th scope="col" class="px-6 py-3">
                          PHONE NO
                        </th>
                        <th scope="col" class="px-6 py-3">
                          RECRUITER
                        </th>
                        <th scope="col" class="px-6 py-3">
                          APPLIED DATE
                        </th>
                        <th scope="col" class="px-6 py-3">
                          STATUS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {datas?.map((data, num) => (
                        <tr class="bg-gray-100 border-b rounded-lg ">
                          <td class="px-6 py-4">{num + 1}</td>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900  whitespace-nowrap "
                          >
                            {data.user_first_name} {data.user_last_name}
                          </th>
                          <td class="px-6 py-4">{data.job.designation}</td>
                          <td class="px-6 py-4">{data.phone_number}</td>
                          <td class="px-6 py-4">
                            {data.job.first_name} {data.job.last_name}
                          </td>
                          <td class="px-6 py-4">
                            {data.created
                              .slice(0, 10)
                              .split("-")
                              .reverse()
                              .join("-")}
                          </td>
                          <td class="px-6 py-4">{data.status}</td>
                        </tr>
                      ))}
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

export default AdminReportPage
