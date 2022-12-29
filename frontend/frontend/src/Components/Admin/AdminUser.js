import React, { useEffect } from 'react'
import useAxios from '../../Axios/useAxios';
import axiosInstance from "../../Axios/axiosPrivate"
import {useDispatch,useSelector} from 'react-redux';
import {  usersView } from '../../Redux/Reducers/AuthSlice';
const AdminUser = () => {
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.user.view_user.users)
    console.log(users)
   const api = useAxios();
  const handleBlockUser =  async (id) => {
        try {
            console.log(id)
          const response = await axiosInstance.post(`/block/`, {
            id:id,
            
          });
          data();
          
        } catch (error) {
          alert(error)
          console.log(error)
        }

  };
  const data = async () => {
    try {
      
      const response = await api.get(`/admin/users/`, {
        
        
      });
      console.log(response.data)
      dispatch( usersView(response.data))
    
    }
     catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    data();

   },[]);
  return (
    <div className='container mx-auto'>
        <h1 className='font-bold text-3xl ml-4 mb-6'>USER MANAGEMENT</h1>
        <div className=' p-4'>
        <div class="pb-4 bg-white ">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search" class="block p-2 pl-10 w-80 text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-150 dark:border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
        </div>
    </div>
<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-black dark:text-black">
        <thead class="text-xs text-black uppercase  dark:bg-gray-50 dark:text-gray-700">
            <tr>
                
                <th scope="col" class="py-3 px-6">
                    User Id
                </th>
                <th scope="col" class="py-3 px-6">
                    Username
                </th>
                <th scope="col" class="py-3 px-6">
                    First Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Last Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Phone Number
                </th>
                <th scope="col" class="py-3 px-12">
                    Email
                </th>
                <th scope="col" class="py-3 px-10">
                    Status
                </th>
              
                <th scope="col" class="py-3 px-8">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {users.map((user)=>(

           
            <tr class="bg-white border-b dark:bg-gray-200 dark:border-gray-100 hover:bg-gray-1000 dark:hover:bg-gray-300">
                
                
                <td class="py-4 px-6">
                   {user.id}
                </td>
                <td class="py-4 px-6">
                {user.username}
                </td>
                <td class="py-4 px-6">
                    {user.first_name}
                </td>
                <td class="py-4 px-6">
                {user.last_name}
                </td>
                <td class="py-4 px-6">
                {user.phone_number}
                </td>
                <td class="py-4 px-6">
                {user.email}
                </td>
                
                <td class="py-4 px-6">
                <td class="py-4 px-6">
                {user.is_active?"Active":"Blocked"}
                </td>
                </td>
                <td class="flex items-center py-8 px-8 space-x-3">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-4">{user.is_active?<span className='' onClick={()=>handleBlockUser(user.id)}>Block</span>:<span className='' onClick={()=>handleBlockUser(user.id)}>Unblock</span>}</a>
                    
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>

            

        </div>

    </div>
  )
}

export default AdminUser