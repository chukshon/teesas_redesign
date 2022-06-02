import React from 'react'
import { Link } from 'react-router-dom'
import HomeHover from '../assets/images/navBar/home.png'

import styled from 'styled-components'
const NavMenu = () => {
  return (
    <UL>
      <div className='container'>
        <li>
          <Link to={'/'} className='link'>
            <img src={HomeHover} alt='' />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to={'/'} className='link'>
            <img src={HomeHover} alt='' />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to={'/'} className='link'>
            <img src={HomeHover} alt='' />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to={'/'} className='link'>
            <img src={HomeHover} alt='' />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to={'/'} className='link'>
            <img src={HomeHover} alt='' />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to={'/'} className='link'>
            <img src={HomeHover} alt='' />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to={'/'} className='link'>
            <img src={HomeHover} alt='' />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to={'/'} className='link'>
            <img src={HomeHover} alt='' />
            <span>Home</span>
          </Link>
        </li>
      </div>
    </UL>
  )
}

const UL = styled.ul`
  background: linear-gradient(to right, #449603 0%, #9ad81d 100%);
  .container {
    padding: 10px 10px;
    overflow-x: auto;
    display: flex;
    align-items: center;
    gap: 1rem;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  li {
  }

  .link {
    background: transparent;
    padding: 10px 15px;
    border-radius: 0px;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    &:hover {
      background: white;
      color: black;
      padding: 10px 15px;
      border-radius: 20px;
    }
    img {
      width: 20px;
    }
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 816px) {
    .container {
      padding: 20px 80px;
    }
  }
  @media (min-width: 1100px) {
    .container {
      max-width: 1300px;
      margin: 0 auto;
      /* padding: 20px 150px; */
    }
  }
`

export default NavMenu
