import React, { useState, useRef } from 'react'
import HideIcon from '../assets/images/login/pass-hide-icon.png'
import ShowIcon from '../assets/images/login/pass-show-icon.png'

const PasswordField = () => {
  const [togglePassword, setTogglePassword] = useState(false)
  const password = useRef()
  const showPassword = () => {
    if (password.current.type === 'password') {
      password.current.type = 'text'
    } else {
      password.current.type = 'password'
    }
    setTogglePassword(!togglePassword)
  }
  return (
    <div className='input_password'>
      <input type='password' ref={password} placeholder='Password' />
      <img
        src={togglePassword ? ShowIcon : HideIcon}
        alt=''
        onClick={showPassword}
      />
    </div>
  )
}

export default PasswordField
