import React from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { logOut, userData } from '../Redux/Reducers/AuthSlice';


const DashBoardPage = () => {
  const dispatch = useDispatch();
  const logout = () => {
    
    dispatch(logOut());
  };
  const users = useSelector((state)=>state.user.user)
  const usersProfile = useSelector((state)=>state.user.profile)
  console.log(users)
  console.log("janga jaga jaga",usersProfile)
  
  return (
    <div>
      <NavBar/>
      <div className='flex  justify-center'>
        <Link to="/" ><button onClick={logout} className=" bg-black hover:bg-red-500 text-white font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">
  LOGOUT
    </button></Link></div>
    <div className='text-center mt-5 text-lg font-bold'>
      <p>{users.username}</p>
    <p>{users.firstname} {users.lastname}</p>
      <p>{users.email}</p>
      <p>{users.phone_number}</p>
    </div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <Footer/>
    </div>
  )
}

export default DashBoardPage