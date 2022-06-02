import React, { useState } from 'react'
import styled from 'styled-components'
import Content from '../components/Content'
import GpsIcon from '../assets/images/register/gps_icon.png'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { countries } from '../utils/CountryList'
import { lists } from '../utils/CountryList'
import Wrapper from '../assets/wrappers/RegisterWrapper'
import PhoneField from '../components/PhoneField'
import PasswordField from '../components/PasswordField'
import { useForm } from 'react-hook-form'

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  const [formStep, setFormStep] = useState(0)
  const [countriesActive, setCountriesActive] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState('Nigeria')
  const [school, setSchool] = useState('')
  const showCountry = () => {
    setCountriesActive(!countriesActive)
  }
  const handleRadio = (e) => {
    setSchool(e.target.value)
  }
  const handleSelected = (country) => {
    setCountriesActive(false)
    setSelectedCountry(country)
  }
  return (
    <Wrapper>
      <div className='container'>
        <div className='wrapper'>
          <div className='form_container'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              {formStep >= 0 && (
                <div
                  className={formStep === 0 ? 'showform formOne' : 'hideform'}
                >
                  <h4>Select Your Country</h4>
                  <div className='country_select' onClick={showCountry}>
                    <div className='country_details'>
                      <img src={GpsIcon} alt='' className='gps' />
                      <h3>{selectedCountry}</h3>
                    </div>
                    {countriesActive ? <AiFillCaretUp /> : <AiFillCaretDown />}
                  </div>
                  <div className='options'>
                    <h3>Pre-School</h3>

                    <label className='custom-radio'>
                      <input
                        type='radio'
                        name='radio'
                        value='Football'
                        onClick={handleRadio}
                      />
                      <span className='radio-btn'>Football</span>
                    </label>

                    <h3>Primary School</h3>
                    <div className='group'>
                      <label className='custom-radio'>
                        <input
                          type='radio'
                          name='radio'
                          value='Grade1'
                          onClick={handleRadio}
                        />
                        <span className='radio-btn'>Grade 1</span>
                      </label>
                      <label className='custom-radio'>
                        <input
                          type='radio'
                          name='radio'
                          value='Grade 2'
                          onClick={handleRadio}
                        />
                        <span className='radio-btn'>Grade 2</span>
                      </label>
                      <label className='custom-radio'>
                        <input
                          type='radio'
                          name='radio'
                          value='Grade 3'
                          onClick={handleRadio}
                        />
                        <span className='radio-btn'>Grade 3</span>
                      </label>
                      <label className='custom-radio'>
                        <input
                          type='radio'
                          name='radio'
                          value='Grade 4'
                          onClick={handleRadio}
                        />
                        <span className='radio-btn'>Grade 4</span>
                      </label>
                      <label className='custom-radio'>
                        <input
                          type='radio'
                          name='radio'
                          value='Grade 5'
                          onClick={handleRadio}
                        />
                        <span className='radio-btn'>Grade 5</span>
                      </label>
                      <label className='custom-radio'>
                        <input
                          type='radio'
                          name='radio'
                          value='Grade 6'
                          onClick={handleRadio}
                        />
                        <span className='radio-btn'>Grade 6</span>
                      </label>
                    </div>
                    <h3>Secondary School Entrance Exam Prep.</h3>
                    <div className='group'>
                      <label className='custom-radio'>
                        <input
                          type='radio'
                          name='radio'
                          value='British'
                          onClick={handleRadio}
                        />
                        <span className='radio-btn'>British</span>
                      </label>
                      <label className='custom-radio'>
                        <input
                          type='radio'
                          name='radio'
                          value='Catholic'
                          onClick={handleRadio}
                        />
                        <span className='radio-btn'>Catholic</span>
                      </label>
                      <label className='custom-radio'>
                        <input
                          type='radio'
                          name='radio'
                          value='Military'
                          onClick={handleRadio}
                        />
                        <span className='radio-btn'>Military</span>
                      </label>
                      <label className='custom-radio'>
                        <input
                          type='radio'
                          name='radio'
                          value='National/Unity School'
                          onClick={handleRadio}
                        />
                        <span className='radio-btn'>National/Unity School</span>
                      </label>
                    </div>
                  </div>
                  <button
                    type='button'
                    onClick={() => setFormStep(1)}
                    className='firstBtn'
                  >
                    Next
                  </button>
                  {countriesActive && (
                    <div className='content'>
                      <div className='search'>
                        <input type='text' placeholder='Search' />
                      </div>
                      <ul className='country_list'>
                        {countries.map((country, i) => {
                          return (
                            <li key={i} onClick={() => handleSelected(country)}>
                              <img src={GpsIcon} alt='' className='gps' />
                              <span>{country}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              {formStep >= 0 && (
                <div
                  className={formStep === 1 ? 'showform formTwo' : 'hideform'}
                >
                  <div className='input_password'>
                    <input type='name' placeholder='Full Name' />
                  </div>
                  <PhoneField />
                  <div className='input_password'>
                    <input type='email' placeholder='Email' />
                  </div>
                  <PasswordField />
                  <div className='button_group'>
                    <button
                      type='button'
                      onClick={() => setFormStep(0)}
                      className='prevBtn'
                    >
                      Previous
                    </button>
                    <button
                      type='button'
                      onClick={() => setFormStep(2)}
                      className='firstBtn'
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              {formStep >= 0 && (
                <div
                  className={formStep === 2 ? 'showform formThree' : 'hideform'}
                >
                  <div className='input_password'>
                    <input type='name' placeholder='Enter Your Address' />
                  </div>
                  <div className='input_password'>
                    <input type='date' placeholder='Enter Your Address' />
                  </div>
                  <h3>Gender</h3>
                  <label className='custom-radio'>
                    <input
                      type='radio'
                      name='radio'
                      value='Male'
                      onClick={handleRadio}
                    />
                    <span className='radio-btn'>Male</span>
                  </label>
                  <label className='custom-radio'>
                    <input
                      type='radio'
                      name='radio'
                      value='Female'
                      onClick={handleRadio}
                    />
                    <span className='radio-btn'>Female</span>
                  </label>
                  <div className='button_group'>
                    <button
                      type='button'
                      onClick={() => setFormStep(1)}
                      className='prevBtn'
                    >
                      Previous
                    </button>
                    <button
                      type='submit'
                      onClick={() => setFormStep(2)}
                      className='firstBtn'
                    >
                      Register
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
          <Content />
        </div>
      </div>
    </Wrapper>
  )
}

export default Register
