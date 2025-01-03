import React from 'react';
import { StyledStartContainer } from './StartTripBannerStyles';
import { Button } from '@mui/material';
import logo from '../../assets/logo.png';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const StartTripBanner = () => {
  const { t } = useTranslation();

  return (
    <StyledStartContainer>
      <div className="img">
        <img src="/bannerJoinTrip.jpg" alt={t('startTrip.days')} />{' '}
      </div>
      <div className="center">
        <div className="img-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="info">
          <div className="slogan">{t('startTrip.header')}</div>{' '}
          <div className="description">{t('startTrip.description')}</div>
          <div className="bottom">
            <NavLink
              to="/create-trip"
              className="link"
              onClick={() => setActiveItem(item.name)}
            >
              <Button color="secondary" variant="contained" className="btn">
                {t('startTrip.button')}
              </Button>
            </NavLink>
            <div className="text">{t('startTrip.note')}</div>{' '}
          </div>
        </div>
      </div>
    </StyledStartContainer>
  );
};

export default StartTripBanner;
