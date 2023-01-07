import React from 'react'
import  ProfileImg from "../img/puneet.jpg"

 const Navbar = () => {
  return (
    <div className='navbar'>

      <span className="logo">Chat-App</span>
      <div className="user">
        <img src={ProfileImg} alt="" />
        <span>Puneet</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar; 