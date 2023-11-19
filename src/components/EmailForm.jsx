import React, { useState, useRef } from 'react';

const EmailForm = ({ sendEmail, petDetails }) => {
  const [userEmail, setUserEmail] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setAdditionalDetails(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail({ recipientEmail: userEmail, additionalDetails, petDetails });
  };

};

export default EmailForm;
