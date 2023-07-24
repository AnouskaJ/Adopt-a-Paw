import React from 'react';
import login from '../styles/login.module.css'; // Make sure to have the CSS file in the same directory
import petlove from "../assets/pet-love.png"
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className={login.container1}>
      <div className={login.formscontainer}>
        <div className={login.signinsignup}>
          <form action="#" className={login.signinform}>
            <h2 className={login.title}>Log in</h2>
            <div className={login.inputfield}>
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className={login.inputfield}>
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className={`${login.btn1} ${login.solid}`} />
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
          <Link to = "/signup"><button className={`${login.btn1} ${login.transparent}`} id="sign-up-btn">
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
