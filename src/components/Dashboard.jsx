

import React from 'react';

function UserProfile() {
  return (
    <section className="profile">
      <header className="header">
        <div className="details">
          <img
            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=b38c22a46932485790a3f52c61fcbe5a"
            alt="John Doe"
            className="profile-pic"
          />
          <h1 className="heading">Claire Doe</h1>
          <div className="location">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12 ,2Z"></path>
            </svg>
            <p>Kochi, India</p>
          </div>
          <div className="stats">
            <div className="col-4">
              <h4>20</h4>
              <p>Reviews</p>
            </div>
            <div className="col-4">
              <h4>10</h4>
              <p>Communities</p>
            </div>
            <div className="col-4">
              <h4>100</h4>
              <p>Discussions</p>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default UserProfile;
