import React from "react"
import "./Footer.css"
import facebook from "../../Images/facebook.png"
import twitter from "../../Images/twitter.png"
import instagram from "../../Images/instagram.png"

const Footer = () => {
  return (
    <div>
      <div className="bg-black footer pb-8">
        <div className=" text-4sm text-center font-black footer-one py-4">
          <h1>
            JOB<span className="footer-one-color">ACQUIRE</span>
          </h1>
        </div>
        <h1 className=" text-center font-bold  text-white mt-4 mb-4 ">
          HELPS COMPANIES TO HIRE AND SEEKERS TO FIND JOB
        </h1>
        <div className="flex justify-center ">
          <div className="mx-2 ">
            <img className="rounded-lg w-6 h-6" src={facebook} alt="microsoft" />
          </div>
          <div className="mx-2">
            <img className="rounded-lg w-6 h-6" src={twitter} alt="tata" />
          </div>
          <div className="mx-2">
            <img className="rounded-lg w-6 h-6" src={instagram} alt="capgemini" />
          </div>
        </div>
        <div className="grid  grid-cols-4 text-center text-white mt-3 mx-4 text-sm">
          <div className="my-2">
            <h1>2022 © CopyrightsSAR</h1>
          </div>
          <div className="my-2">
            <h1>Terms of Use</h1>
          </div>
          <div className="my-2">
            <h1>Privacy Policy</h1>
          </div>
          <div className="my-2">
            <h1>Code of Conduct</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
