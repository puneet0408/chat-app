import React from 'react'
import  ProfileImg from "../img/puneet.jpg"
const Chats = () => {
  return (
    <div className='chats' >
      <div className="userChat">
        <img src={ProfileImg} alt="" />
        <div className="userchatinfo">
          <span>Puneet</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}
export default Chats;