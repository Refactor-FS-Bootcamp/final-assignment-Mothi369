import React from 'react'
import { useDispatch } from 'react-redux'
import { signin } from '../features/userSlice'

import { auth, provider } from '../firebase'
import "./Login.css"
const Login = () => {
    const dispatch=useDispatch()
    
    const login=()=>{
        auth.signInWithPopup(provider).then(({user})=>{
          dispatch(signin({
            displayName:user.displayName,
            photoURL:user.photoURL,
            email:user.email
          }))
        }).catch(error=>{
            alert(error)
        })
    }
    //displayName email photoURL
  return (
    <div className='loginWrapper'>
        <div className='loginImg'>
            <img src='https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg' alt='imgg'/>
        
            <button className='loginBtn' onClick={login}>Login with Gmail</button>
        </div>
    </div>
  )
}

export default Login