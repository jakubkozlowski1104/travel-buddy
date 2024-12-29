/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
// import { StyledLogin, StyledCenter, StyledForm } from './LogIn.styles';

import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleExclamation,
  faLock,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { StyledCenter, StyledForm, StyledLogin } from './LoginStyles';

const LogIn = () => {
  const [inputs, setInputs] = useState({});
  const [isloginwrong, setIsLoginWrong] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: inputs.email,
          password: inputs.password,
        }),
      });

      if (response.status === 202) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Save token
        localStorage.setItem('user', JSON.stringify(data.user)); // Save user data
        setIsLoginWrong(false);
        navigate('/'); // Redirect to home
        window.location.reload(); // Optional: Refresh page
      } else {
        setIsLoginWrong(true);
      }
    } catch (error) {
      console.error('Login error:', error);
      setIsLoginWrong(true);
    }
  };

  // const changePath = () => {
  //   if (isLogIn) {

  //   }
  // };

  return (
    <StyledCenter>
      <div className="wrapper">
        <StyledLogin isloginwrong={isloginwrong ? 'true' : undefined}>
          <h1>Login</h1>
          <StyledForm onSubmit={handleSubmit}>
            <div className="form-input">
              <input
                placeholder="Email"
                type="text"
                name="email"
                onChange={handleChange}
              />
              <div className="icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
            <div className="form-input">
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChange}
              />
              <div className="icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
            </div>
            <div className="info">
              <div className="error">
                {isloginwrong && (
                  <>
                    <FontAwesomeIcon
                      className="error-icon"
                      icon={faCircleExclamation}
                    />
                    <p>Entered data is incorrect</p>
                  </>
                )}
              </div>
              <p className="forgot">Forgot Password?</p>
            </div>
            <button type="submit">Login</button>
            <div className="register">
              <p>
                Dont have an accont?
                <span onClick={() => navigate('/signup')}> Register</span>
              </p>
            </div>
          </StyledForm>
        </StyledLogin>
      </div>
    </StyledCenter>
  );
};

export default LogIn;
