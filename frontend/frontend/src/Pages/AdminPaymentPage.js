import React, { useEffect, useState } from "react"
import useAxios from "../Axios/useAxios"
import { Link } from "react-router-dom"
import { BiLogOutCircle } from "react-icons/bi"
const AdminPage = () => {
  const api = useAxios()
  const [payments, setPayments] = useState([])
  const data = async () => {
    try {
      const response = await api.get(`/admin/payment_details`, {})
      console.log(response.data)
      setPayments(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    data()
  }, [])
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
              <Link to="/login">
                <BiLogOutCircle className="text-white " />
              </Link>
            </div>

            <p className=" text-xs mt-3 fon-medium text-white">ADMIN</p>
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
        </div>
        <div class="col-span-10  lg:col-span-10 mt-20 ">
          <div>
            <div className="container mx-auto">
              <h1 className="font-bold text-3xl text-left ml-4 mb-6">
                ADMIN MANAGEMENT
              </h1>
              <div className=" p-4">
                <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left text-black dark:text-black">
                    <thead class="text-xs text-black uppercase  dark:bg-gray-50 dark:text-gray-700">
                      <tr>
                        <th scope="col" class="py-3 px-2">
                          Id
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Name
                        </th>
                        <th scope="col" class="py-3 px-2">
                          Order Id
                        </th>
                        <th scope="col" class="py-3 px-2">
                          Payment ID
                        </th>
                        <th scope="col" class="py-3 px-2">
                          AMOUNT
                        </th>
                        <th scope="col" class="py-3 px-2">
                          STATUS
                        </th>

                        <th scope="col" class="py-3 px-10">
                          DATE
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {payments.map((payment) => (
                        <tr class="bg-white border-b dark:bg-gray-200 dark:border-gray-100 hover:bg-gray-1000 dark:hover:bg-gray-300">
                          <td class="py-4 px-3">{payment.id}</td>
                          <td class="py-4 ">{payment.name}</td>
                          <td class="py-4 ">{payment.provider_order_id}</td>
                          <td class="py-4 ">{payment.payment_id}</td>
                          <td class="py-4 px-6">{payment.amount}</td>
                          <td class="py-4 px-2">{payment.status}</td>
                          <td class="py-4 px-6">
                            {payment.created_date
                              .slice(0, 10)
                              .split("-")
                              .reverse()
                              .join("-")}
                          </td>
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

export default AdminPage
