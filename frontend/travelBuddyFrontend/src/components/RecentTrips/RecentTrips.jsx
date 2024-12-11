import React from 'react';
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
          <div className="item">
            <div className="img">
              <img src="/travelTypes/nomad_style.jpg" alt="" />
            </div>
            <div className="details">
              <div className="top-info">
                <h1>trip name</h1>
              </div>
              <div className="bottom-info">
                <div className="left-info">
                  <div className="more-info">
                    <i>X</i>
                    <p>Kategoria</p>
                  </div>
                  <div className="more-info">
                    <i>X</i>
                    <p>12 days</p>
                  </div>
                  <div className="more-info">
                    <i>X</i>
                    <p>Thailand</p>
                  </div>
                </div>
                <div className="right-info">
                  <p className="price-name">PRICE</p>
                  <p className="price">
                    1500 <i>E</i>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="time-left">12 DAYS LEFT</div>

            <div className="img">
              <img src="/travelTypes/test.jpg" alt="" />
            </div>
            <div className="details">
              <div className="user">
                <div className="icon">
                  <img src="/users/userimg.jpg" alt="" />
                </div>
                <div className="name">
                  Kuba_koz | <span className="smaller">Poland</span> |{' '}
                  <span className="smaller">23 years</span>
                </div>
              </div>
              <div className="top-info">
                <h1>Travel around Thailand</h1>
              </div>
              <div className="bottom-info">
                <div className="left-info">
                  <div className="more-info">
                    <i>
                      <FontAwesomeIcon icon={faLayerGroup} />
                    </i>
                    <p>Nomad Style</p>
                  </div>
                  <div className="more-info">
                    <i>
                      <FontAwesomeIcon icon={faCalendar} />
                    </i>
                    <p>12 days</p>
                  </div>
                  <div className="more-info">
                    <i>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </i>
                    <p>Thailand</p>
                  </div>
                </div>
                <div className="right-info">
                  <p className="price-name">
                    <div className="budget">BUDGET</div>
                    <div className="budget">EDTIMATED</div>
                  </p>
                  <p className="price">
                    2100<i>€</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src="/travelTypes/test.jpg" alt="" />
            </div>
            <div className="details">
              <div className="top-info">
                <h1>trip name</h1>
              </div>
              <div className="bottom-info">
                <div className="left-info">
                  <div className="more-info">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <i></i>
                    <p>Kategoria</p>
                  </div>
                  <div className="more-info">
                    <i>X</i>
                    <p>12 days</p>
                  </div>
                  <div className="more-info">
                    <i>X</i>
                    <p>Thailand</p>
                  </div>
                </div>
                <div className="right-info">
                  <p className="price-name"> BUDGET ESTIMATED</p>
                  <p className="price">
                    2100<i>€</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src="/travelTypes/nomad_style.jpg" alt="" />
            </div>
            <div className="details">
              <div className="top-info">
                <h1>trip name</h1>
              </div>
              <div className="bottom-info">
                <div className="left-info">
                  <div className="more-info">
                    <i>X</i>
                    <p>Kategoria</p>
                  </div>
                  <div className="more-info">
                    <i>X</i>
                    <p>12 days</p>
                  </div>
                  <div className="more-info">
                    <i>X</i>
                    <p>Thailand</p>
                  </div>
                </div>
                <div className="right-info">
                  <p className="price-name">ESTIMATED PRICE</p>
                  <p className="price">
                    1500 <i>E</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src="/travelTypes/nomad_style.jpg" alt="" />
            </div>
            <div className="details">
              <div className="top-info">
                <h1>trip name</h1>
              </div>
              <div className="bottom-info">
                <div className="left-info">
                  <div className="more-info">
                    <i>X</i>
                    <p>Kategoria</p>
                  </div>
                  <div className="more-info">
                    <i>X</i>
                    <p>12 days</p>
                  </div>
                  <div className="more-info">
                    <i>X</i>
                    <p>Thailand</p>
                  </div>
                </div>
                <div className="right-info">
                  <p className="price-name">ESTIMATED PRICE</p>
                  <p className="price">
                    1500 <i>E</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <img src="/travelTypes/nomad_style.jpg" alt="" />
            </div>
            <div className="details">
              <h1>trip name</h1>
              <div className="bottom-info">
                <div className="left-info">
                  <div className="more-info">
                    <i>X</i>
                    <p>Kategoria</p>
                  </div>
                  <div className="more-info">
                    <i>X</i>
                    <p>12 days</p>
                  </div>
                  <div className="more-info">
                    <i>X</i>
                    <p>Thailand</p>
                  </div>
                </div>
                <div className="right-info">
                  <p className="price-name"> PRICE</p>
                  <p className="price">
                    1500 <i>E</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledRecentTrips>
  );
};

export default RecentTrips;
