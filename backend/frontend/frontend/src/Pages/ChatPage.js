import React from 'react'
import Chat from '../Components/Chat/Chat'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'

const ChatPage = () => {
  return (
    <div>
       <NavBar/>
        <Chat/>
       <Footer/>
    </div>
  )
}

export default ChatPage