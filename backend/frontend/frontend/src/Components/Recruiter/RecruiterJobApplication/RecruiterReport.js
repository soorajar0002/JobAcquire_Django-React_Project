import React, { useEffect, useState, useRef } from "react"
import useAxios from ".././../../Axios/useAxios"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ReactToPrint from 'react-to-print';

const RecruiterReport = () => {
    const api = useAxios()
  const [datas, setDatas] = useState([])
  const componentRef = useRef();

  const response = async () => {
    try {
      const response = await api.post(`recruiter/report`, {
        recruiter:true,
      })
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
 
  const Print = () =>{     
    //console.log('print');  
    let printContents = document.getElementById('printablediv').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
   document.body.innerHTML = originalContents; 
  }
  return (
    <div className="my-20 mb-96">
    <div className="  flex justify-between mx-16">
      <h1 className="font-bold text-3xl text-left ml-4 ">APPLICATIONS REPORT</h1>

    </div>
   <div className="flex justify-between sm:mx-20">
    <p></p>
      <ReactToPrint
        trigger={() =>  <button type="button"  className="text-gray-100 bg-black border  border-gray-300  font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 ">PDF</button>}
        content={() => componentRef.current}
      />
</div>
    <div className="sm:mx-20 rounded-lg" ref={componentRef} pageStyle="@page { size: 2.5in 4in }">
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
  )
}

export default RecruiterReport
