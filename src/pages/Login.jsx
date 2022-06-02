import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Content from '../components/Content'
import Wrapper from '../assets/wrappers/LoginPage'
import PhoneField from '../components/PhoneField'
import PasswordField from '../components/PasswordField'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Wrapper>
      <div className='container'>
        <div className='form_container'>
          <h1>Let's get started</h1>
          <form onSubmit={handleSubmit}>
            <PhoneField />
            <PasswordField />
            <Link to={'/'} className='forgot_password'>
              <h3>Forgot Password ?</h3>
            </Link>
            <button type='Submit' className='btn btn-secondary submit_btn'>
              Login
            </button>
          </form>
        </div>
        <Content />
      </div>
    </Wrapper>
  )
}

export default Login
