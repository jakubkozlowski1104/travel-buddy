import React, { useEffect, useState } from 'react';
import { StyledHowItWorks } from './HowItWorks.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMap,
  faHandPointer,
  faUsers,
} from '@fortawesome/free-regular-svg-icons';
import { useTranslation } from 'react-i18next';
{
  /*  /> */
}
{
  /* <FontAwesomeIcon icon={faUsers} />
   */
}
const HowItWorks = () => {
  return (
    <StyledHowItWorks>
      <div className="center">
        <div className="items">
          <div className="slogan">
            <div className="header">How its works?</div>
            <div className="search-text">SEARCH</div>
            <div className="create-text">CREATE</div>
            <div className="meet-text">MEET</div>
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
                <FontAwesomeIcon icon={faMap} />
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
