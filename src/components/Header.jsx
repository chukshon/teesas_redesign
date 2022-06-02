import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HeaderLogo from '../assets/images/teesas_logo.png'

import { GiHamburgerMenu } from 'react-icons/gi'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'

const Header = () => {
  const [navActive, setNavActive] = useState(false)

  const openNavBar = () => {
    setNavActive(!navActive)
  }
  return (
    <HeaderNav className={navActive && 'active'}>
      <div className='container'>
        <Link to={'/'} className='header_logo'>
          <img src={HeaderLogo} alt='' />
        </Link>
        <GiHamburgerMenu className='open_nav' onClick={openNavBar} />
        {/* open nav */}
        <nav>
          <ul>
            <li>
              <Link to={'/'} className='nav_link'>
                About
              </Link>
            </li>
            <li>
              <Link to={'/'} className='nav_link'>
                Teach
              </Link>
            </li>
            <li>
              <Link to={'/'} className='nav_link'>
                Buy Learning Tablet
              </Link>
            </li>
            <li>
              <Link to={'/'} className='nav_link'>
                Donate Devices
              </Link>
            </li>
            <li>
              <Link to={''} className='nav-button'>
                <button>
                  <FaSignInAlt />
                  <span>Login</span>
                </button>
              </Link>
            </li>
            <li>
              <Link to={'/register'} className='nav-button'>
                <button>
                  <FaSignOutAlt />
                  <span>Register</span>
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderNav>
  )
}

const HeaderNav = styled.header`
  background-color: #a2ee08;
  transition: 0.5s ease-out;
  z-index: 4;
  height: 80px;
  &.active {
    height: 300px;
    transition: 0.7s ease-out;
  }
  .container {
    position: relative;
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header_logo img {
    width: 90px;
    height: 60px;
    object-fit: contain;
  }
  .open_nav {
    font-size: 3rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
  }
  nav {
    width: 100%;
    position: absolute;
    top: 70px;
    left: 0;
    z-index: 999;
    pointer-events: none;
    visibility: hidden;
    padding-block: 10px;
  }
  &.active nav {
    visibility: visible;
  }
  nav ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  nav .nav_link {
    text-decoration: none;
    color: black;
    font-size: 1rem;
    font-weight: 600;
    padding: 20px 20px;
    transition: 0.1s ease;
    opacity: 0;
  }
  .nav-button {
    text-decoration: none;
  }
  button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: #4caf50;
    margin: 0px 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: white;
  }
  &.active nav .nav_link {
    transition: 0.5s ease;
    opacity: 1;
  }

  @media (min-width: 969px) {
    height: 90px;
    .container {
      padding: 10px 70px;
    }
    &.active {
      height: 90px;
    }
    .open_nav {
      display: none;
    }
    nav {
      all: unset;
    }
    nav ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }

    nav .nav_link {
      text-decoration: none;
      color: #343a40;
      font-size: 1rem;
      font-weight: 700;
      padding: 20px 20px;
      transition: 0.25s ease;
      opacity: 1;
    }
  }
`

export default Header

// #A2EE07
