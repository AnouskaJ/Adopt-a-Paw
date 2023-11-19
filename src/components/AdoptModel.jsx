// AdoptModel.jsx
import React from 'react';
import '../styles/AdoptModel.css';

const AdoptModal = ({ rescuerId, ownerName, ownerContact, onClose }) => {
  return (
    <div className="adopt-modal-overlay">
      <div className="adopt-modal">
        <h2>Adoption Information</h2>
        <p>Rescuer ID: {rescuerId}</p>
        <p>Owner Name: {ownerName}</p>
        <p>Owner Contact: {ownerContact}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AdoptModal;
