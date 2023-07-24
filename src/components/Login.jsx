import React, { useState } from 'react';
import login from "../styles/login.module.css";
import feedingImage from "../assets/feeding.png";


const LoginForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggleForm = () => {
     console.log("Toggling form...");
    setIsSignIn(!isSignIn);
  };


  return (
    <div className={login.container1}>
      <div className={`${login.formscontainer} ${isSignIn ? login.signinmode : login.signupmode}`}>
        <div className={login.signinsignup}>
          <form action="#" className={login.signinform}>
            <h2 className={login.title1}>Log in</h2>
            <div className={login.inputfield}>
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className={login.inputfield}>
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="login" className={login.btn1 + " " + login.solid} />
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
          <form action="#" className={login.signupform}>
            <h2 className={login.title1}>Sign up</h2>
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

      <div className={`${login.panelscontainer} ${isSignIn ? login.signinmode : login.signupmode}`}>
        <div className={`${login.panel} ${login.leftpanel}`}>
          <div className={login.content}>
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className={`${login.btn1} ${login.transparent}`} onClick={handleToggleForm}>
              Sign up
            </button>
          </div>
          <img src={feedingImage} className={login.image} alt="" />
        </div>
        <div className={`${login.panel} ${login.rightpanel}`}>
          <div className={login.content}>
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className={`${login.btn1} ${login.transparent}`} onClick={handleToggleForm}>
              Log in
            </button>
          </div>
          <img src={feedingImage} className={login.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
