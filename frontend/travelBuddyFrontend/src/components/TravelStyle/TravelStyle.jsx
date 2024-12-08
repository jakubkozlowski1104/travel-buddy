import React, { useEffect, useState, useRef } from 'react';
import { StyledTravelStyles } from './TravelStyleStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../Context/LanguageContext';
import { useTranslation } from 'react-i18next';

const TravelStyle = () => {
  const [travelStyles, setTravelStyles] = useState([]);
  const containerRef = useRef(null);
  const customOrder = [6, 5, 4, 1, 2, 7, 3];
  const { language } = useLanguage();
  const { t } = useTranslation(); // Access the translation function

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

  useEffect(() => {
    console.log(`Current language: ${language}`);
  }, [language]);

  let scrollInterval;

  const startScrolling = (direction) => {
    if (containerRef.current) {
      scrollInterval = setInterval(() => {
        containerRef.current.scrollLeft += direction * 18;
      }, 16);
    }
  };

  const stopScrolling = () => {
    clearInterval(scrollInterval);
  };

  return (
    <StyledTravelStyles translation={t('travelStyle.joinNow')}>
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
          <h1>{t('travelStyle.h1')}</h1>
          <h3 className="slogan">{t('travelStyle.slogan')}</h3>
          <h3 className="search">
            {t('travelStyle.search')}
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
          </h3>
        </div>
      </div>
      <div className="container" ref={containerRef}>
        {travelStyles
          .sort((a, b) => customOrder.indexOf(a.id) - customOrder.indexOf(b.id))
          .map((style) => (
            <div className="item" key={style.id}>
              <img src={style.imageUrl} alt={style.name} />
              <div className="info">
                <h2>{style.name}</h2>
                <p>
                  {style.tours || 20} {t('travelStyle.tours')}
                </p>
              </div>
            </div>
          ))}
      </div>
    </StyledTravelStyles>
  );
};

export default TravelStyle;
