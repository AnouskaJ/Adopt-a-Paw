import React from 'react';
import { Link } from 'react-router-dom';


class MyClass extends React.Component {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Adopt-a-Paw</title>
        <div className="new">
          <h1>Don't shop, <span>just Adopt</span></h1>
          <p>Embark on a journey of companionship and joy, bring home a new best friend</p>
          <Link to="/other"> <button>Get Started</button></Link>
          
          
          <div className="ajax-loader">
            <div className="paw"><i className="fas fa-paw" /></div>
            <div className="paw"><i className="fas fa-paw" /></div>
            <div className="paw"><i className="fas fa-paw" /></div>
            <div className="paw"><i className="fas fa-paw" /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyClass;
