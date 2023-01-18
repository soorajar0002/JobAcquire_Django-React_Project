import React from "react"
import "./Footer.css"
import facebook from "../../Images/facebook.png"
import twitter from "../../Images/twitter.png"
import instagram from "../../Images/instagram.png"

const Footer = () => {
  return (
    <div>
      <div className="bg-black footer pb-6 bottom-0 ">
        <div className=" text-4sm text-center font-black bg-gray-100  py-2">
          <h1>
            JOB<span className="footer-one-color">ACQUIRE</span>
          </h1>
        </div>
        <h1 className=" text-center font-bold  text-white text-xs sm:text-lg mt-2 mb-2 ">
          HELPS COMPANIES TO HIRE AND SEEKERS TO FIND JOB
        </h1>
        <div className="flex justify-center my-4">
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
        <div className="grid  grid-cols-4 text-center text-white  mx-4 text-xs sm:text-sm">
          <div className="my-2 col-span-4 sm:col-span-1 order-last">
            <h1>2022 © CopyrightsSAR</h1>
          </div>
          <div className="my-2 col-span-4 sm:col-span-1">
            <h1>Terms of Use</h1>
          </div>
          <div className="my-2 col-span-4 sm:col-span-1">
            <h1>Privacy Policy</h1>
          </div>
          <div className="my-2 col-span-4 sm:col-span-1">
            <h1>Code of Conduct</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
