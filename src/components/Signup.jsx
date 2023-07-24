import React from 'react';
import login from '../styles/login.module.css'; // Make sure to have the CSS file in the same directory
import feedinganimal from "../assets/feeding.png";
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className={login.container1}>
      <div className={login.formscontainer}>
        <div className={login.signinsignup}>
          <form action="#" className={login.signinform}>
            <h2 className={login.title}>Sign up</h2>
            <div className={login.inputfield}>
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className={login.inputfield}>
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className={login.inputfield}>
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className={login.btn1} value="Sign up" />
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam
              ad deleniti.
            </p>
            <Link to= "/backtologin"><button className={`${login.btn1} ${login.transparent}`} id="sign-in-btn">
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

export default LoginForm;
