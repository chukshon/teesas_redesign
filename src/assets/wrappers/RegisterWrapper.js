import styled from 'styled-components'

const Wrapper = styled.section`
  background: #edffdf;
  overflow: hidden;
  .container {
    display: grid;
    padding: 30px 10px;
  }
  .wrapper {
    overflow: hidden;
    display: grid;
    align-items: center;
    justify-content: center;
  }

  .form_container {
    max-width: 500px;
    position: relative;
    background: linear-gradient(to bottom, #7ed95b 0%, #039525 100%);
    border-radius: 12px;
    padding: 10px 30px;
  }

  .form_container h1 {
    color: white;
    text-align: center;
    padding-bottom: 60px;
  }
  .showform {
    position: relative;
    display: block;
  }
  .hideform {
    display: none;
  }
  .showform h4 {
    color: white;
    font-size: 1.4rem;
    text-align: center;
  }

  .formOne {
    display: flex;
    flex-direction: column;
    .firstBtn {
      margin: 20px 0px 0px 10px;
      width: max-content;
      padding: 10px 80px;
      border-radius: 5px;
      border: none;
      align-self: center;
    }
    .country_select {
      margin-top: 10px;
      cursor: pointer;
      width: 100%;
      justify-content: space-between;
      display: flex;
      align-items: center;
      background: white;
      padding: 10px 10px;
      border-radius: 10px;
    }
    .country_details {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .gps {
      width: 20px;
    }
    .country_details h3 {
      font-weight: 600;
    }

    .content {
      width: 100%;
      position: absolute;
      top: 72px;
      padding: 10px 0px;
      background: white;
      transition: all 0.5s;
    }
    .search {
      padding: 0px 10px;
    }
    .content input {
      width: 100%;
      border: 1px solid grey;
      padding: 10px 10px;
      border-radius: 5px;
      font-size: 1rem;
    }
    .country_list {
      width: 100%;
      background-color: white;
      overflow-y: auto;
      height: 100px;
      top: 100px;
      padding-top: 10px;
    }
    .country_list li {
      width: 100%;
      display: flex;
      gap: 10px;
      margin-top: 10px;
      padding: 10px 10px;
      background: none;
    }
    .country_list li:hover {
      width: 100%;
      background: #2d9b19;
      cursor: pointer;
    }
    .options {
      padding-top: 50px;

      h3 {
        color: white;
        padding-bottom: 10px;
      }
    }

    .group {
      display: flex;
      flex-wrap: wrap;
    }
    .custom-radio input {
      display: none;
    }

    .radio-btn {
      margin: 10px;
      border: 1px solid white;
      display: inline-block;
      border-radius: 10px;
      position: relative;
      text-align: center;
      padding: 10px 10px;
      color: white;
      cursor: pointer;
    }

    .custom-radio input:checked + .radio-btn {
      background: white;
      color: black;
    }

    .custom-radio input:checked + .radio-btn > i {
      opacity: 1;
      transform: translateX(-50%) scale(1);
    }
  }

  .formTwo {
    display: flex;
    flex-direction: column;
    .firstBtn {
      margin: 20px 0px 0px 10px;
      width: max-content;
      padding: 10px 40px;
      border-radius: 5px;
      border: none;
      align-self: center;
      font-weight: 600;
    }
    .button_group {
      align-self: center;
    }
    .prevBtn {
      margin: 20px 0px;
      width: max-content;
      padding: 10px 40px;
      color: white;
      border-radius: 5px;
      border: 1px solid white;
      font-weight: 600;
      background: transparent;
    }
    .input_field {
      position: relative;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 0px 10px 30px;
      background-color: white;
      border-radius: 10px;
    }
    .country_select {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
    }
    .input_field input {
      outline: none;
      border: none;
      font-size: 17px;
    }
    .country_list {
      position: absolute;
      top: 40px;
      background: white;
      width: 100%;
      left: 0px;
      height: 60px;
      overflow-y: auto;
      z-index: 999;
    }
    .country_list li {
      cursor: pointer;
      padding: 10px 0px 10px 10px;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .country_list li:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    .input_password {
      position: relative;
      padding: 10px 10px 10px 20px;
      margin-top: 20px;
      margin-bottom: 20px;
      width: 100%;
      background-color: white;
      border-radius: 10px;
      display: flex;
      align-items: center;
    }
    .input_password input {
      outline: none;
      border: none;
      font-size: 17px;
      width: 100%;
    }
    .input_password img {
      width: 20px;
    }
  }
  .formThree {
    h3 {
      padding-bottom: 10px;
      color: white;
    }
    .firstBtn {
      width: max-content;
      padding: 10px 40px;
      border-radius: 5px;
      border: none;
      font-weight: 600;
    }
    .button_group {
      margin: 20px 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
    .prevBtn {
      width: max-content;
      padding: 10px 40px;
      color: white;
      border-radius: 5px;
      border: 1px solid white;
      font-weight: 600;
      background: transparent;
    }
    .input_field {
      position: relative;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 0px 10px 30px;
      background-color: white;
      border-radius: 10px;
    }
    .country_select {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
    }
    .input_field input {
      outline: none;
      border: none;
      font-size: 17px;
    }
    .country_list {
      position: absolute;
      top: 40px;
      background: white;
      width: 100%;
      left: 0px;
      height: 60px;
      overflow-y: auto;
      z-index: 999;
    }
    .country_list li {
      cursor: pointer;
      padding: 10px 0px 10px 10px;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .country_list li:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    .input_password {
      position: relative;
      padding: 10px 10px 10px 20px;
      margin-top: 20px;
      margin-bottom: 20px;
      width: 100%;
      background-color: white;
      border-radius: 10px;
      display: flex;
      align-items: center;
    }
    .input_password input {
      outline: none;
      border: none;
      font-size: 17px;
      width: 100%;
    }
    .input_password img {
      width: 20px;
    }
    .options {
      padding-top: 50px;

      h3 {
        padding-bottom: 10px;
        color: white;
      }
    }

    .group {
      display: flex;
      flex-wrap: wrap;
    }
    .custom-radio input {
      display: none;
    }

    .radio-btn {
      margin: 10px;
      border: 1px solid white;
      display: inline-block;
      border-radius: 10px;
      position: relative;
      text-align: center;
      padding: 10px 10px;
      color: white;
      cursor: pointer;
    }

    .custom-radio input:checked + .radio-btn {
      background: white;
      color: black;
    }

    .custom-radio input:checked + .radio-btn > i {
      opacity: 1;
      transform: translateX(-50%) scale(1);
    }
  }
  @media (min-width: 951px) {
    background: white;
    .container {
      padding: 30px 70px;
      align-items: center;
      /* place-items: center; */
    }
    .wrapper {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
    .form_container {
      order: 2;
    }
  }
`
export default Wrapper
