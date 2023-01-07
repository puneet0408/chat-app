import React from 'react'
import  ProfileImg from "../img/puneet.jpg"
 const Message = () => {
  return (
    <div className='message owner' >
      <div className="messageInfo">
        <img src={ProfileImg} alt="" />
        <span>just now</span>
      </div>
        <div className="messageContent">
        <img src={ProfileImg} alt="" />
          <p>Hello</p>

        </div>
    </div>
  )
}


export default Message;