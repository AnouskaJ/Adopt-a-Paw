import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AdoptModel from './AdoptModel';  
import '../styles/AnimalDetails.css';

function AnimalDetails() {
  const { petId } = useParams();
  const [petDetails, setPetDetails] = useState(null);
  const [showAdoptModel, setShowAdoptModel] = useState(false);

  useEffect(() => {
    axios
      .get(`/pets/pets.json`)
      .then((response) => {
        const pet = response.data.find((p) => p.PetID === petId);
        setPetDetails(pet);
      })
      .catch((error) => {
        console.error('Error fetching pet details:', error);
      });
  }, [petId]);

  const handleAdoptClick = () => {
    setShowAdoptModel(true);
  };

  const handleCloseModel = () => {
    setShowAdoptModel(false);
  };

  if (!petDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="animal-details">
      <div className="carousel-container">
        <Carousel showThumbs={false} dynamicHeight={false} useKeyboardArrows>
          {[1, 2, 3].map((imageIndex) => (
            <div key={imageIndex}>
              <img
                src={`/pets/images/${petDetails.PetID}-${imageIndex}.jpg`}
                alt={`Slide ${imageIndex}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="details-container">
        <h2>{petDetails.Name}</h2>
        <p>Age: {petDetails.Age}</p>
        <p>Breed: {petDetails.Breed1}</p>
        <p>Gender: {petDetails.Gender}</p>
        <p>Description: {petDetails.Description}</p>

        <button className="adopt-button" onClick={handleAdoptClick}>
          Adopt Now
        </button>
      </div>

      {showAdoptModel && (
        <AdoptModel
          rescuerId={petDetails.RescuerID}
          ownerName={petDetails.OwnerName}
          ownerContact={petDetails.OwnerContact}
          onClose={handleCloseModel}
        />
      )}
    </div>
  );
}

export default AnimalDetails;
