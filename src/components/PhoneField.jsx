import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import styled from 'styled-components'
import { lists } from '../utils/CountryList'
const PhoneField = () => {
  const [phoneDropdown, setPhoneDropdown] = useState(false)
  const [name, setName] = useState(+234)

  const toggleDropDown = () => {
    setPhoneDropdown(!phoneDropdown)
  }
  const handleDropDown = (list) => {
    setPhoneDropdown(false)
    setName(list.code)
  }
  return (
    <div className='input_field'>
      <div className='country_select' onClick={toggleDropDown}>
        <p className='dial_Code'>{name}</p>
        <AiFillCaretDown />
      </div>
      {phoneDropdown && (
        <ul className='country_list'>
          {lists.map((list, i) => {
            return (
              <li
                key={i}
                className='single_country'
                onClick={() => handleDropDown(list)}
              >
                <span className='country_name'>{list.name}</span>
                <span className='country_code'>{list.code}</span>
              </li>
            )
          })}
        </ul>
      )}
      <input type='phone' maxLength='15' placeholder='802 123 4567' />
    </div>
  )
}

export default PhoneField
