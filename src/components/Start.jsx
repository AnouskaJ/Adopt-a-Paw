import React from 'react';
import { Link } from 'react-router-dom';
import start from "../styles/start.module.css";



class MyClass extends React.Component {
  render() {
    return (
      <div className={start.body}>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Adopt-a-Paw</title>
        <div className={start.new}>
          <h1>Don't shop, <span>just Adopt</span></h1>
          <p>Embark on a journey of companionship and joy, bring home a new best friend</p>
          <Link to="/other"> <button className={start.button1}>Get Started</button></Link>
          
          
          <div className={start.ajax}>
            <div className={start.paw}><i className="fas fa-paw" /></div>
            <div className={start.paw}><i className="fas fa-paw" /></div>
            <div className={start.paw}><i className="fas fa-paw" /></div>
            <div className={start.paw}><i className="fas fa-paw" /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyClass;
