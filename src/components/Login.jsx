import React, { useState } from 'react';
import login from '../styles/login.module.css';
import petlove from '../assets/pet-love.png';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null); 
  const navigate = useNavigate(); 

  const handleLogin = () => {
    axios.post('http://localhost:5000/login', { username, password })
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          setUser(response.data.user); 
          navigate('/other');
        } else {
          console.log('Login failed');
          setErrorMessage('Invalid username or password');
        }
      })
      .catch(error => {
        console.error(error);
        setErrorMessage('Error occurred during login'); 
      });
  };

  return (
    <div className={login.container1}>
      <div className={login.formscontainer}>
        <div className={login.signinsignup}>
          <form action="#" className={login.signinform}>
            <h2 className={login.title}>Log in</h2>
            <div className={login.inputfield}>
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={login.inputfield}>
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && <p className={login.errorMsg}>{errorMessage}</p>} 
            <input
              type="submit"
              value="Login"
              className={`${login.btn1} ${login.solid}`}
              onClick={handleLogin}
            />
            <p className={login.socialtext}>Or Sign in with social platforms</p>
            <div className={login.socialmedia}>
              <a href="#" className={login.socialicon}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={login.socialicon}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className={login.socialicon}>
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className={login.socialicon}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className={login.panelscontainer}>
        <div className={`${login.panel} ${login.leftpanel}`}>
          <div className={login.content}>
            <h3>New here ?</h3>
            <p className={login.para}>
              Just got to know about Adopt-A-Paw? Sign up right away!
            </p>
            <Link to="/signup">
              <button className={`${login.btn1} ${login.transparent}`} id="sign-up-btn">
                Sign up
              </button>
            </Link>
          </div>
          <img src={petlove} className={login.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
