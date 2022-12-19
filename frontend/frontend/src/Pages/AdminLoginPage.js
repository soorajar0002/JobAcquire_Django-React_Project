import React from 'react'
import Footer from '../Components/Footer/Footer'
import AdminLogin from '../Components/Login/AdminLogin/AdminLogin'
import NavBar from '../Components/NavBar/NavBar'

const AdminLoginPage = () => {
  return (
    <div>
        <NavBar/>
        <AdminLogin/>
        <Footer/>
    </div>
  )
}

export default AdminLoginPage