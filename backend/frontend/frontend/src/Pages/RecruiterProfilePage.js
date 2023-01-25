import React from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import RecruiterProfile from '../Components/Recruiter/RecruiterProfile/RecruiterProfile'

const RecruiterProfilePage = () => {
  return (
    <div>
        <NavBar/>
        <RecruiterProfile/>
        <Footer/>
    </div>
  )
}

export default RecruiterProfilePage