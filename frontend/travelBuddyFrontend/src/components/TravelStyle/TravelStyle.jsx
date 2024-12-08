import React, { useEffect, useState, useRef } from 'react';
import { StyledTravelStyles } from './TravelStyleStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TravelStyle = () => {
  const [travelStyles, setTravelStyles] = useState([]);
  const containerRef = useRef(null);
  const customOrder = [6, 5, 4, 1, 2, 7, 3];

  useEffect(() => {
    const fetchTravelStyles = async () => {
      try {
        const response = await fetch('http://localhost:8080/travel-types');
        const data = await response.json();
        setTravelStyles(data);
      } catch (error) {
        console.error('Error fetching travel styles:', error);
      }
    };

    fetchTravelStyles();
  }, []);

  let scrollInterval;

  const startScrolling = (direction) => {
    if (containerRef.current) {
      scrollInterval = setInterval(() => {
        containerRef.current.scrollLeft += direction * 18; // Adjust the speed by changing the multiplier
      }, 16); // Smooth scrolling with ~60 FPS
    }
  };

  const stopScrolling = () => {
    clearInterval(scrollInterval);
  };

  return (
    <StyledTravelStyles>
      <div className="center">
        <div className="banner">
          <div
            className="scroll-left"
            onMouseEnter={() => startScrolling(-1)}
            onMouseLeave={stopScrolling}
          ></div>
          <div
            className="scroll-right"
            onMouseEnter={() => startScrolling(1)}
            onMouseLeave={stopScrolling}
          ></div>
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
      <div className="container" ref={containerRef}>
        {travelStyles
          .sort((a, b) => customOrder.indexOf(a.id) - customOrder.indexOf(b.id)) // Sort based on custom order
          .map((style) => (
            <div className="item" key={style.id}>
              <img src={style.imageUrl} alt={style.name} />
              <div className="info">
                <h2>{style.name}</h2>
                <p>{style.tours || 20} tours</p>
              </div>
            </div>
          ))}
      </div>
    </StyledTravelStyles>
  );
};

export default TravelStyle;
