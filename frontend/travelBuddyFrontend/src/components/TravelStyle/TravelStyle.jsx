import React, { useEffect, useState } from 'react';
import { StyledTravelStyles } from './TravelStyleStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TravelStyle = () => {
  const [travelStyles, setTravelStyles] = useState([]);

  useEffect(() => {
    const fetchTravelStyles = async () => {
      try {
        const response = await fetch('http://localhost:8080/travel-types');
        const data = await response.json();
        setTravelStyles(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching travel styles:', error);
      }
    };

    fetchTravelStyles();
  }, []);

  return (
    <StyledTravelStyles>
      <div className="center">
        <div className="banner">
          <h1>What is your travel style?</h1>
          <h3 className="slogan">Find yourself</h3>
          <h3 className="search">
            Search travel by type
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
          </h3>
        </div>
      </div>
      <div className="container">
        {travelStyles.map((style) => (
          <div key={style.id}>
            {/* <img src={style.imageUrl} alt={style.name} /> */}
            <div className="info">
              <h2>{style.name}</h2>
              <p>{style.tours || 20} tours</p>{' '}
            </div>
          </div>
        ))}
      </div>
    </StyledTravelStyles>
  );
};

export default TravelStyle;
