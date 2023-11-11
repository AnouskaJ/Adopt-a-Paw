import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Adopt.css';

function Adopt() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get('/pets/pets.json')
      .then((response) => {
        const petsWithImages = response.data.filter((pet) =>
          imageExists(`/pets/images/${pet.PetID}-1.jpg`)
        );
        setPets(petsWithImages);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const imageExists = (path) => {
    const img = new Image();
    img.src = path;
    return img.complete;
  };

  return (
    <div>
      <section className="menu" id="up">
        <div className="content">
          {pets.map((pet) => (
            <Link to={`/adopt/${pet.PetID}`} key={pet.PetID}>
              <div className="box">
                <div className="imgbx">
                  <img src={`/pets/images/${pet.PetID}-1.jpg`} alt={pet.Name} />
                </div>
                <div className="text">
                  <h3>{pet.Name}</h3>
                  <p>Age: {pet.Age}</p>
                  <p>Breed: {pet.Breed1}</p>
                  <p>Gender: {pet.Gender}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/other">
          <a href="#" className="btn">
            Go back
          </a>
        </Link>
      </section>
    </div>
  );
}

export default Adopt;
