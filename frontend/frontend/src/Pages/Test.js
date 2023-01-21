import React from "react"
import Footer from "../Components/Footer/Footer"
import NavBar from "../Components/NavBar/NavBar"

const Test = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div class="grid grid-cols-12 gap-4">
            
          <div class=" grid col-start-2 col-span-10 sm:col-start-4 sm:col-span-6 bg-black p-6 gap-6">
            
            <div className="bg-white md:col-start-2">ff</div>
            <div className="bg-white">ff</div>
          </div>
        </div>
      </div>
         {/* <div className="bg-gray-900 py-4 rounded mb-6">
            <p className="text-white">{message.first_name}</p>
          </div> */}
      <Footer />
    </div>
  )
}

export default Test
