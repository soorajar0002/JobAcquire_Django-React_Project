import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import RecruiterJobList from '../Components/Recruiter/RecruiterJobList/RecruiterJobList'

const RecruiterJobListPage = () => {
  return (
    <div>
        <NavBar/>
        <RecruiterJobList/>
        <Footer/>
    </div>
  )
}

export default RecruiterJobListPage