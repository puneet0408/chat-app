import React from 'react'
 

export const Login = () => {
    return (

        <div className='formContainer' >
            <div className='formWrapper' >
                <span className='logo' >
                    chat App
                </span>
                <span className='title' >
                    login
                </span>
                <form>
                     
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
              
                    <button>sign in</button>
            
                </form>
                <p>you don't  have an  account ? login </p>
            </div>
        </div>
    )
}
