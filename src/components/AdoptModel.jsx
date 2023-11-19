import React, { useState, useRef } from 'react';
import '../styles/AdoptModel.css';
import EmailForm from './EmailForm'; 
import emailjs from 'emailjs-com'; 
const AdoptModel = ({ rescuerId, ownerName, ownerContact, petDetails, onClose }) => {
  const [userEmail, setUserEmail] = useState('');
  const formRef = useRef(null);

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const sendAdoptionDetailsEmail = async () => {
    const templateParams = {
      to_name: userEmail,
      from_name: 'Adopt-A-Paw Team',
      rescuerId: rescuerId,
      ownerName: ownerName,
      ownerContact: ownerContact,
    };

    emailjs.send(
      'service_73idkq1',
      'template_4e7ffy2',
      templateParams,
      'kCCdrSKYZKD87lgzO'
    )
      .then(() => {
        alert('Adoption details email sent successfully!');
        onClose();
      })
      .catch((error) => {
        console.error('Email sending error:', error);
      });
  };

  return (
    <div className="adopt-modal-overlay">
      <div className="adopt-modal">
        <h2>Adoption Information</h2>
        <p>Rescuer ID: {rescuerId}</p>
        <p>Owner Name: {ownerName}</p>
        <p>Owner Contact: {ownerContact}</p>

        <div className="email-container">
          <label htmlFor="userEmail">Enter your email address:</label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            placeholder="Enter your email address"
            value={userEmail}
            onChange={handleEmailChange}
          />
          <button onClick={sendAdoptionDetailsEmail}>Mail me the details</button>
        </div>

        <EmailForm ref={formRef} sendEmail={sendAdoptionDetailsEmail} petDetails={petDetails} />
      </div>
    </div>
  );
};

export default AdoptModel;
