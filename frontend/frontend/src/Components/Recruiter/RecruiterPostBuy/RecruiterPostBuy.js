import React, { useEffect,useState} from 'react'
import useAxios from '../../../Axios/useAxios'
import { Link } from 'react-router-dom';
const RecruiterPostBuy = () => {
    const [plans, setPlans] = useState([]);
    console.log(plans,"321")
    
    const api = useAxios();
    const data = async () => {
        try {
          
          const response = await api.get(`/recruiter/post/plans/`, {
          
            
            
          });
          setPlans(response.data)
          console.log("plans",response.data)
         
          
        
        }
         catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
        data();
    
       },[]);
  return (
    <div className="mb-28 ">
        <h1 className="text-center text-4xl font-extrabold mb-4">PLANS</h1>
    <div className="grid sm:grid-cols-2 md:grid-cols-3   text-center lg:mx-28 mt-6">
        
     {plans.map((plan)=>(

 
<div class=" p-4 mt-4 bg-gray-100 border rounded-lg shadow-xl mx-10 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">
    <div className="shadow border p-2 bg-white rounded-xl">
    
    <h5 className="text-3xl font-extrabold tracking-tight text-gray-900 ">{plan.plan_name}</h5>
    <h6 className="text-xl mt-4 font-semibold tracking-tight text-gray-900 ">{plan.no_of_post} POSTS </h6>
    
    
    <p className="text-xs font-semibold mt-6">2 JOBS FEATURED</p>
    <p className="text-xs font-semibold mt-2">1 YEAR MEMBERSHIP</p>
    <p className="text-xs font-semibold  mt-2">JOB DISPLAYED FOR 30 DAY </p>
    <p className="text-2sm mt-2 font-semibold ">₹{plan.amount}/-</p>
    <Link to={`/payment/${plan.id}`}><button type="button" class="text-white  bg-gray-800 hover:bg-gray-900   font-medium rounded-md text-sm px-6 py-2  my-6 dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700">SELECT</button></Link>
    </div>

</div>
    ))}





    </div>
    </div>
  )
}

export default RecruiterPostBuy
