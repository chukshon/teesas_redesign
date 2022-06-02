import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import TopBarLogo from '../assets/images/topbar/site-logo.png'
import WhatsappLogo from '../assets/images/topbar/whatsapp_icon.png'
import ProfileLogo from '../assets/images/topbar/profile.png'
import { AiFillCaretDown } from 'react-icons/ai'
import { classes } from '../utils/CountryList'

const TopBar = () => {
  const [activeClasses, setActiveClasses] = useState(false)
  return (
    <Header>
      <div className='container'>
        <Link to={'/'}>
          <img src={TopBarLogo} alt='' className='topBar_logo' />
        </Link>
        <div className='left'>
          <div className='content'>
            <img src={WhatsappLogo} alt='' />
            <h4>Enquire Now</h4>
          </div>
          <div className='content'>
            <img src={ProfileLogo} alt='' />
            <h4>Chukwuka Honour</h4>
          </div>
          <div
            className='classList'
            onClick={() => setActiveClasses(!activeClasses)}
          >
            <span>Reception</span>
            <AiFillCaretDown />
            {activeClasses && (
              <ul className='classes'>
                {classes.map((singleClass, i) => {
                  return (
                    <li key={i}>
                      <p className='classHeader'>{singleClass.class}</p>
                      <ul>
                        {singleClass.category.map((e, i) => {
                          return (
                            <h4 className='grade' key={i}>
                              {e}
                            </h4>
                          )
                        })}
                      </ul>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Header>
  )
}

const Header = styled.header`
  background: #edffdf;
  .classes {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: #ecf7e5;
    border-radius: 5px;
    z-index: 999;
    padding: 10px 10px;
    .classHeader {
      color: #9d8484;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 5px;
    }
    .grade {
      color: black;
      margin-left: 10px;
      font-weight: 400;
      margin-bottom: 10px;
    }
  }
  .container {
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .topBar_logo {
    width: 80px;
  }
  .left {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  .content img {
    width: 30px;
  }
  .content h4 {
    font-size: 0.8rem;
  }
  .classList {
    position: relative;
    display: flex;
    align-items: center;
    background-color: #4f9f06;
    color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 10px 30px;
    border-radius: 5px;
  }

  @media (min-width: 670px) {
    .container {
      padding: 20px 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
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

export default TopBar
