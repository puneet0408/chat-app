import React from 'react'
  import Add from  "../img/addAvatar.png"

export const Register = () => {
    return (

        <div className='formContainer' >
            <div className='formWrapper' >
                <span className='logo' >
                    chat App
                </span>
                <span className='title' >
                    Register
                </span>
                <form>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input type="file" id='file' style={{display:"none"}} />
                    <label htmlFor="file"  >
                        <img src={Add} alt="" />
                        <span>Add an avatar </span>
                    </label>
                    <button>sign up</button>
            
                </form>
                <p>you do  have an  account ? login </p>
            </div>
        </div>
    )
}
