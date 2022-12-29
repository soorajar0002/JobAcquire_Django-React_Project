import React, { useEffect } from 'react'
import useAxios from '../../Axios/useAxios'
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { recProfileData,recLogin } from '../../Redux/Reducers/AuthSlice';
const RecruiterProfile = () => {
  const id = useSelector((state) => state.user.user.id);
  const dispatch = useDispatch();
  const recruiter = useSelector((state)=>state.user.user)
  const recProfile = useSelector((state)=>state.user.profile)
 
  const api = useAxios();
  const data = async () => {
    try {
      
      const response = await api.post(`/recruiter/profile/`, {
        id,
        
      });
      console.log("rec",response.data)
      dispatch(recProfileData(response.data))
      
    
    }
     catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    data();

   },[]);
  return (
    <div className='container  mb-20'>
      
      <div class="flex  justify-between mx-10">
      <h1 className='font-extrabold text-3xl mx-6 '>PROFILE</h1>
      <Link to="/recruiter_profile_edit">
        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium  text-sm px-6 py-2 rounded mr-2 mb-6 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700">EDIT</button>
        </Link>
</div>
        <div className='grid lg:grid-cols-4  mx-6'>
          
            <div className='lg:col-span-2  order-2 sm:order-2 text-center'>
              <div className='p-10  my-8 shadow-2xl  text-center '>
              <img class="inline object-cover w-28 h-28 mr-2 rounded-full " src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
              
              <h1 className='mt-6 font-medium mx-8'>{recProfile.recruiter_bio}</h1>
              </div>
            
            </div>
            <div className='lg:col-span-2 p-4 order-2 sm:order-2'>
            <div className='p-4  my-4  shadow-2xl text-center'>
            <h1 className='font-extrabold text-2xl mx-6 mb-6'> BASIC INFO</h1>
            
            <div className='mt-6 font-medium mx-8 '>
            <h1 className='my-2'>{recruiter.firstname} {recruiter.lastname}</h1>
            <h1 className='my-2'>{recProfile.position}</h1>
            <h1 className='my-2'>{recProfile.location}</h1>
            <h1 className='my-2'>{recProfile.company_name}</h1>
            <h1 className='my-2'>{recruiter.email}</h1>
            <h1 className='my-2'>{recruiter.phone_number}</h1>
            
            
            </div></div>
            
            

          </div>
          <div className='lg:col-span-4 p-4 order-2 sm:order-2'>
          <div className='p-4  my-4  shadow-2xl border'>
            <h1 className='font-extrabold text-2xl mx-6 text-center'> COMPANY INFO</h1>
            <div className='mt-6 font-medium mx-8 text-center '>
            <h1 className='my-2 '>{recProfile.description}</h1>
            <h1 className='my-2'>{recProfile.company_address_line1}</h1>
            <h1 className='my-2'>{recProfile.company_address_line2}</h1>
            <h1 className='my-2'>{recProfile.company_mobile}</h1>
            <h1 className='my-2'>{recProfile.company_website}</h1>
            <h1 className='my-2'>{recProfile.company_email}</h1>
            
            
            
            
            </div></div>
          </div>
          

        </div>
    </div>
  )
}

export default RecruiterProfile