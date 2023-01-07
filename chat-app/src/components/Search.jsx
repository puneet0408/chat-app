import React from 'react'
import  ProfileImg from "../img/puneet.jpg"

 const Search = () => {
  return (
    <div className='search' >
      
      <div className="searchForm">
        <input type="text" placeholder='find a user' />
      </div>
      <div className="userChat">
 
        <img src={ProfileImg} alt="" />
        <div className="userchatinfo">
          <span>Puneet</span>

        </div>
      </div>
      </div>
  )
}

export default Search;
