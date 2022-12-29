import React, { useEffect } from 'react'
import profile from '../../Images/prof-pp.jpg'
import useAxios from '../../Axios/useAxios'
import {useSelector, useDispatch} from 'react-redux';
import { userProfileData } from '../../Redux/Reducers/AuthSlice';
import { Link } from 'react-router-dom';
const UserProfile = () => {
  const users = useSelector((state)=>state.user.user)
  const usersProfile = useSelector((state)=>state.user.profile)
  console.log(users)
  const id = useSelector((state) => state.user.user.id);
  
  const dispatch = useDispatch();
 
  const api = useAxios();
  const data = async () => {
    try {
      
      const response = await api.post(`/user/profile/`, {
        id,
        
      });
      console.log(response.data)
      dispatch(userProfileData(response.data))
    
    }
     catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    data();

   },[]);
  return (
    <div className='container mx-auto '>
      
      <h1 className='text-3xl font-extrabold ml-6  '>PROFILE</h1>
      
        <div className='grid gap-6 lg:grid-cols-3    mx-4 mt-5  '>
          
          <div className='p-4 text-center shadow-2xl mb-6'>
            
          <img class="w-20 h-20 rounded-full mx-auto mt- " src={profile} alt="Large avatar"></img>
        <h1 className='text-2sm font-bold mt-6'>{users.username}</h1>
        <p className='text-lg  font-bold'>{usersProfile.title}</p>
        <p className='text-2sm mt-4 font-medium mx-10'>{usersProfile.bio}</p>
        <div className=' p-4 my-2 mt-20'>
           <h1 className='font-extrabold text-2xl mx-6 '>SKILLS</h1>
            <div className='mt-6 font-medium mx-6'>
            <h1 className='my-2'>{usersProfile.skill}</h1>
            
            </div>
           

           </div>
           <button type="button" class=" bg-white border border-gray-300 focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ">RESUME</button>
            <Link to="/user_profile_edit"><button type="button" class=" bg-white border border-gray-300 focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ">EDIT</button></Link>

          </div>
          <div className='lg:col-span-2  p-4   '>
            
           <div className='shadow-2xl p-4 my-2'>
           <h1 className='font-extrabold text-2xl mx-6'>BASIC INFO</h1>
            <div className='mt-6 font-medium mx-6'>
            <h1 className='my-2'>Name : <span className='pl-2'>{users.firstname} {users.lastname}</span></h1>
            <h1 className='my-2'>Email : <span className='pl-2'>{users.email}</span></h1>
            <h1 className='my-2'>Phone : <span className='pl-2'>{users.phone_number}</span></h1>
            <h1 className='my-2'>Desired Job : <span className='pl-2'>{usersProfile.desired_job}</span></h1>
            <h1 className='my-2'>Desired Job Location : <span className='pl-2'>{usersProfile.desired_location}</span></h1>
            </div>

           </div>
           <div className='shadow-2xl p-4 my-2'>
           <h1 className='font-extrabold text-2xl mx-6'>EXPERIENCE</h1>
            <div className='mt-6 font-medium mx-6'>
            <h1 className='my-2'>Designation : <span className='pl-2'>{usersProfile.designation}</span></h1>
            <h1 className='my-2'>Company : <span className='pl-2'>{usersProfile.company}</span></h1>
            
            <h1 className='my-2'>From : <span className='pl-2'>{usersProfile.joining_year}</span></h1>
            <h1 className='my-2'>To :   <span className='pl-2'>{usersProfile.passout_year}</span></h1>
           
            </div>

           </div>
           <div className='shadow-2xl p-4 my-2'>
           <h1 className='font-extrabold text-2xl mx-6'>QUALIFICATION</h1>
            <div className='mt-6 font-medium mx-6'>
            <h1 className='my-2'>Degree :<span className='pl-2'>{usersProfile.degree}</span> </h1>
            <h1 className='my-2'>College :<span className='pl-2'>{usersProfile.college}</span></h1>
            <h1 className='my-2'>From : <span className='pl-2'>{usersProfile.start}</span></h1>
            <h1 className='my-2'>To :<span className='pl-2'>{usersProfile.end}</span> </h1>
            <h1 className='my-2'>Percentage :<span className='pl-2'>{usersProfile.percentage}</span> </h1>
            </div>

           </div>

          </div>
          

        </div>
        
        
        
    </div>
  )
}

export default UserProfile