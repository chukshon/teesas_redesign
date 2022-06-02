import styled from 'styled-components'
import FormImg from '../images/login/login_form_img.png'

const Wrapper = styled.section`
  background: #edffdf;
  overflow: hidden;
  .container {
    padding: 30px 10px;
    display: grid;
    justify-content: center;
  }
  .form_container {
    max-width: 500px;
    position: relative;
    background: linear-gradient(to bottom, #7ed95b 0%, #039525 100%);
    border-radius: 12px;
    padding: 10px 30px;
  }

  .form_container:before {
    background: url(${FormImg}) 0 0 no-repeat;
    background-size: cover;
    width: 100%;
    height: 152px;
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
  }
  .form_container h1 {
    color: white;
    text-align: center;
    padding-bottom: 60px;
  }

  form {
    display: flex;
    flex-direction: column;
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
    height: 150px;
    border-radius: 10px;
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
  .forgot_password {
    text-decoration: none;
  }
  .forgot_password h3 {
    color: white;
    text-align: center;
    margin: 10px 0px 60px 0px;
    color: white;
    transition: 0.5s;
  }
  .forgot_password h3:hover {
    color: red;
  }
  .submit_btn {
    margin-bottom: 150px;
  }

  @media (min-width: 951px) {
    background: white;
    .container {
      all: unset;
      padding: 40px 50px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
    }
    .form_container {
      order: 2;
    }
  }
`

export default Wrapper
