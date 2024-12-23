import React, { useEffect, useState } from 'react';
import { StyledHowItWorks } from './HowItWorks.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faHandPointer } from '@fortawesome/free-regular-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  return (
    <StyledHowItWorks>
      <div className="center">
        <div className="items">
          <div className="slogan">
            <h2 className="header">How its works?</h2>
            <div className="names">
              <p className="search-text">SEARCH-</p>
              <p className="create-text">CREATE-</p>
              <p className="meet-text">MEET</p>
            </div>
          </div>

          <div className="item">
            <div className="graphic">
              <i>
                <FontAwesomeIcon icon={faMap} />
              </i>
            </div>
            <div className="info">
              <h4>SEARCH</h4>
              <p>Find Your Dream Trp</p>
            </div>
          </div>

          <div className="item">
            <div className="graphic">
              <i>
                <FontAwesomeIcon icon={faHandPointer} />
              </i>
            </div>
            <div className="info">
              <h4>CREATE</h4>
              <p>Create your own trip</p>
            </div>
          </div>

          <div className="item">
            <div className="graphic">
              <i>
                <FontAwesomeIcon icon={faUsers} />
              </i>
            </div>
            <div className="info">
              <h4>MEET</h4>
              <p>Meet new friend</p>
            </div>
          </div>
        </div>
      </div>
    </StyledHowItWorks>
  );
};

export default HowItWorks;
