import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import RecruiterJobEdit from '../Components/Recruiter/RecruiterJobEdit/RecruiterJobEdit'

const RecruiterJobEditPage = () => {
  return (
    <div>
        <NavBar/>
        <RecruiterJobEdit/>
        <Footer/>
    </div>
  )
}

export default RecruiterJobEditPage