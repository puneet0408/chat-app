import React from 'react'
import Attach from "../img/attach.png"
import Img from "../img/img.png"
const Input = () => {
  return (
    <div className='inputs' >
      <input type="text"  placeholder='type Somthing...' />
      <div className='inputIcon' >
 <input type="file" id='file' style={{ display: "none" }} />
      <label htmlFor="file"  >
        <img src={Attach} alt="" />
      </label>
      <img src={Img} alt="" />
      <button>send</button>
      </div>
    </div>
  )
}

export default Input;