import React from 'react'
import { Link } from 'react-router-dom'
import {
  HomeHover,
  Home,
  Bookmark,
  BookmarkHover,
  Notification,
  NotificationHover,
  ParentConnect,
  ParentConnectHover,
  Profile,
  ProfileHover,
  SignOutHover,
  SignOut,
  Subscription,
  SubscriptionHover,
} from '../assets/images/navBar'

import styled from 'styled-components'
const NavMenu = () => {
  return (
    <UL>
      <div className='container'>
        <li>
          <Link to={'/'} className='link'>
            <img src={Home} alt='' />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to={'/'} className='link'>
            <img src={Bookmark} alt='' />
            <span>Bookmark</span>
          </Link>
        </li>
        <li>
          <Link to={'/'} className='link'>
            <img src={Notification} alt='' />
            <span>Notification</span>
          </Link>
        </li>
        <li>
          <Link to={'/'} className='link'>
            <img src={Profile} alt='' />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to={'/'} className='link'>
            <img src={ParentConnect} alt='' />
            <span>ParentConnect</span>
          </Link>
        </li>
        <li>
          <Link to={'/'} className='link'>
            <img src={Subscription} alt='' />
            <span>Subscription</span>
          </Link>
        </li>
        <li>
          <Link to={'/'} className='link'>
            <img src={SignOut} alt='' />
            <span>Sign out</span>
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
    gap: 0.5rem;
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

    &:hover.active {
      background: white;
      color: black;
      padding: 10px 15px;
      border-radius: 20px;
      font-size: 0.8rem;
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
