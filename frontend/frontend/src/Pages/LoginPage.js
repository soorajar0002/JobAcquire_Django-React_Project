import React from "react"
import Footer from "../Components/Footer/Footer"
import UserLogin from "../Components/Login/UserLogin/UserLogin"
import NavBar from "../Components/NavBar/NavBar"

function LoginPage() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4">
        <UserLogin />
      </div>
      <Footer />
    </div>
  )
}

export default LoginPage
