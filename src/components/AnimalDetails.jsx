import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/AnimalDetails.css';

function AnimalDetails() {
  const { petId } = useParams();
  const [petDetails, setPetDetails] = useState(null);

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
        {/* Rest of your details content */}
        <h2>{petDetails.Name}</h2>
        <p>Age: {petDetails.Age}</p>
        <p>Breed: {petDetails.Breed1}</p>
        <p>Gender: {petDetails.Gender}</p>
        <p>Description: {petDetails.Description}</p>

        <button className="adopt-button">Adopt Now</button>
        <button className="contact-button">Click here for Contact Details</button>
      </div>
    </div>
  );
}

export default AnimalDetails;
