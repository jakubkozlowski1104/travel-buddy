import React, { useEffect, useState } from 'react';
import { StyledHowItWorks } from './HowItWorks.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faCalendarPlus } from '@fortawesome/free-regular-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <StyledHowItWorks>
      <div className="center">
        <div className="items">
          <div className="slogan">
            <h2 className="header">{t('howItWorks.header')}</h2>
            <div className="names">
              <p className="search-text">{t('howItWorks.search')}-</p>
              <p className="create-text">{t('howItWorks.create')}-</p>
              <p className="meet-text">{t('howItWorks.meet')}</p>
            </div>
          </div>

          <div className="item">
            <div className="graphic">
              <i>
                <FontAwesomeIcon icon={faMap} />
              </i>
            </div>
            <div className="info">
              <h4>{t('howItWorks.search')}</h4>
              <p>{t('howItWorks.search-info')}</p>
            </div>
          </div>

          <div className="item">
            <div className="graphic">
              <i>
                <FontAwesomeIcon icon={faCalendarPlus} />
              </i>
            </div>
            <div className="info">
              <h4>{t('howItWorks.create')}</h4>
              <p>{t('howItWorks.create-info')}</p>
            </div>
          </div>

          <div className="item">
            <div className="graphic">
              <i>
                <FontAwesomeIcon icon={faUsers} />
              </i>
            </div>
            <div className="info">
              <h4>{t('howItWorks.meet')}</h4>
              <p>{t('howItWorks.meet-info')}</p>
            </div>
          </div>
        </div>
      </div>
    </StyledHowItWorks>
  );
};

export default HowItWorks;
