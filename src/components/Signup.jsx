import React, { useState } from 'react';
import login from '../styles/login.module.css';
import feedinganimal from '../assets/feeding.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!username || !email || !password) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setSuccess(false);

    axios
      .post('http://localhost:5000/signup', { username, email, password })
      .then((response) => {
        console.log(response.data);
        setSuccess(true);
        navigate('/login');
      })
      .catch((error) => {
        setError('An error occurred. Please try again.');
        console.error(error);
      });
  };

  return (
    <div className={login.container1}>
      <div className={login.formscontainer}>
        <div className={login.signinsignup}>
          <form action="#" className={login.signinform}>
            <h2 className={login.title}>Sign up</h2>
            {error && <div className={login.error}>{error}</div>}
            {success && (
              <div className={login.success}>Sign-up successful. You can now log in.</div>
            )}
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
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <input
              type="submit"
              className={login.btn1}
              value="Sign up"
              onClick={handleSignUp}
            />
            <p className={login.socialtext}>Or Sign up with social platforms</p>
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
            <h3>One of us ?</h3>
            <p className={login.para}>
              Already a part of our community? Login to your existing account!
            </p>
            <Link to="/login">
              <button className={`${login.btn1} ${login.transparent}`} id="sign-in-btn">
                Log in
              </button>
            </Link>
          </div>
          <img src={feedinganimal} className={login.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
