import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledRecentTrips } from './RecentTripsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faLocationDot,
  faLayerGroup,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';

const RecentTrips = () => {
  const { t } = useTranslation();
  const [trips, setTrips] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch('http://localhost:8080/trips');
        const data = await response.json();
        setTrips(data.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trips:', error);
        setLoading(false);
      }
    };

    const fetchPexelsPhotos = async () => {
      const PEXELS_API_KEY = 'U1xaJzxEdI3UoLLPQdR49iQfkDp980LzgSoWIq55uhIgnaPlWKK305Rg';
      const searchQuery = 'bali';

      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=20`,
          {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          }
        );
        const data = await response.json();
        const horizontalImages = data.photos.filter((photo) => photo.width > photo.height);
        setImages(horizontalImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    const fetchData = async () => {
      await fetchTrips();
      await fetchPexelsPhotos();
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledRecentTrips id="recent">
      <div className="center">
        <div className="banner">
          <h1>{t('travelStyle.h1')}</h1>
          <h3 className="slogan">{t('travelStyle.slogan')}</h3>
          <h3 className="search">
            {t('travelStyle.search')}
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
          </h3>
        </div>
        <div className="trips-container">
          {trips.map((trip, index) => (
            <div className="item" key={trip.tripId}>
              <div className="time-left">
                {Math.max(
                  0,
                  Math.ceil(
                    (new Date(trip.startDate) - new Date()) / (1000 * 60 * 60 * 24)
                  )
                ) > 99
                  ? `STARTS DATE ${new Date(
                      trip.startDate
                    ).toLocaleDateString()}`
                  : `${Math.max(
                      0,
                      Math.ceil(
                        (new Date(trip.startDate) - new Date()) / (1000 * 60 * 60 * 24)
                      )
                    )} DAYS LEFT`}
              </div>

              <div className="img">
                <img
                  src={images[index % images.length]?.src?.large || '/travelTypes/test.jpg'}
                  alt={`Photo for ${trip.tripName}`}
                />
              </div>
              <div className="details">
                <div className="user">
                  <div className="icon">
                    <img
                      src={`http://localhost:8080/users/image/${trip.users[0].id}.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="name">
                    {trip.users[0].username} |{' '}
                    <span className="smaller">{trip.users[0].country}</span> |{' '}
                    <span className="smaller">{trip.users[0].age} years</span>
                  </div>
                </div>
                <div className="top-info">
                  <h1>{trip.tripName}</h1>
                </div>
                <div className="bottom-info">
                  <div className="left-info">
                    <div className="more-info">
                      <i>
                        <FontAwesomeIcon icon={faLayerGroup} />
                      </i>
                      <p>{trip.travelTypes[0].name}</p>
                    </div>
                    <div className="more-info">
                      <i>
                        <FontAwesomeIcon icon={faCalendar} />
                      </i>
                      <p>{trip.daysOfTravel} days</p>
                    </div>
                    <div className="more-info">
                      <i>
                        <FontAwesomeIcon icon={faLocationDot} />
                      </i>
                      <p>{trip.countries[0].name}</p>
                    </div>
                  </div>
                  <div className="right-info">
                    <div className="price-name">
                      <div className="budget">BUDGET</div>
                      <div className="budget">EDTIMATED</div>
                    </div>
                    <div className="price">
                      {trip.estimatedCost}
                      <i>€</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledRecentTrips>
  );
};

export default RecentTrips;
