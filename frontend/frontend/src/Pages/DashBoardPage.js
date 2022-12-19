import React from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import { Link } from 'react-router-dom';

const DashBoardPage = () => {
  return (
    <div>
      <NavBar/>
      <div className='flex  justify-center'>
        <Link to="/" ><button className=" bg-black hover:bg-red-500 text-white font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">
  LOGOUT
    </button></Link></div>
      
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