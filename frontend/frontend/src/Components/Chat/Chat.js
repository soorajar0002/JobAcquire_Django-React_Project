import React, { useState } from "react"
import useWebSocket, { ReadyState } from "react-use-websocket"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AiOutlineSend } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { Link } from "react-router-dom"
const Chat = () => {
  const user = useSelector((state) => state.user.user)
  const [messageHistory, setMessageHistory] = useState([])
  console.log(messageHistory, "hereiam")
  const user_name = messageHistory[0]?.from_user.first_name != user?.firstname?messageHistory[0]?.from_user.username:messageHistory[0]?.to_user.username


  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [welcomeMessage, setWelcomeMessage] = useState("")
  
  console.log(user.firstname,"user")
  const token = useSelector((state) => state.user.token.access_token)
  console.log(token, "321")
  const { conversationName } = useParams()
  console.log(conversationName)
  // const {sendJsonMessage  } = useWebSocket("ws://127.0.0.1:8000/");
  const { readyState, sendJsonMessage } = useWebSocket(
    token ? `ws://127.0.0.1:8000/${conversationName}/` : null,
    {
      queryParams: {
        token: token ? token : "",
      },
      onOpen: () => {
        console.log("Connected!")
      },
      onClose: () => {
        console.log("Disconnected!")
      },

      onMessage: (e) => {
        const data = JSON.parse(e.data)
        switch (data.type) {
          case "welcome_message":
            setWelcomeMessage(data.message)
            break
          case "chat_message_echo":
            setMessageHistory((prev) => prev.concat(data.message))
            break
          case "last_50_messages":
            setMessageHistory(data.messages)
            break

          default:
            console.error("Unknown message type!")
            break
        }
      },
    }
  )
  function handleChangeMessage(e) {
    setMessage(e.target.value)
  }

  function handleSubmit() {
    sendJsonMessage({
      type: "chat_message",
      message,
      name,
    })
    setName("")
    setMessage("")
  }

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState]
  return (
    <div className="h-screen">
     
      <div className="grid grid-cols-12 gap-4 my-16 ">
        <div className=" col-start-2 col-span-10 md:col-start-5 md:col-span-4 bg-gray-200 rounded-xl border shadow-xl ">
          <div className="bg-gray-600 py-3 rounded-md mb-6 flex justify-between">
            <p className="text-white text-sm text-left ml-6">{user_name}</p>
            <Link to="/user_applied_jobs"><ImCross className="text-white mr-4 mt-1 h-3 "/></Link>
          </div>
       <div className="py- px-2 overflow-y-auto h-96">
        {messageHistory.map((message) => (
        
           message.from_user.first_name === user.firstname?
          <div className="  py-3 px-3 flex justify-end " >
            <div className="bg-white rounded   text-left pr-24 sm:pr-64 p-1 sm:p-2"> 
            <p className="text-xs font-semibold "> {message.from_user.username}</p>
             <p className="text-md ">{message.content}</p> 
              </div>
           
          </div>:<div className=" py-3 px-3 flex justify-start" >
            <div className="bg-white rounded text-left pr-16 sm:pr-48 p-1 sm:p-2">
            <p className="text-xs font-semibold "> {message.from_user.username}</p>
             <p className=" text-md">{message.content}</p> 
            </div>
          </div>
          
      
          
          
        ))}
        </div>
      <div className="p-6 flex">
        <input
          name="message"
          placeholder="Message"
          onChange={handleChangeMessage}
          value={message}
          className="ml-2 pl-2 shadow-sm sm:text-sm border-gray-300 w-full bg-white rounded-md py-2"
        />

        <button className="ml-3 bg-gray-300 text-sm  px-2" onClick={handleSubmit}>
        <AiOutlineSend/>
        </button>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Chat
