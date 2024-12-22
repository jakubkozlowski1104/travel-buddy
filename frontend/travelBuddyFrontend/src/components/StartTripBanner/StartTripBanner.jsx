import React from 'react';
import { StyledStartContainer } from './StartTripBannerStyles';
import { Button } from '@mui/material';
import logo from '../../assets/logo.png';

const StartTripBanner = () => {
  return (
    <StyledStartContainer>
      <div className="img">
        <img src="/bannerJoinTrip.jpg" alt="startTravel" />
      </div>
      <div className="center">
        <div className="img-logo">
          <img src={logo} alt="" />
        </div>
        <div className="info">
          <div className="slogan">Create your own travel!</div>
          <div className="description">
            Planujesz wyjazd? Wystarczy, że wypełnisz formularz i zgłosisz swoją
            podróż, a zgłoszą się chętni by jechać z tobą
          </div>
          <div className="bottom">
            <Button color="secondary" variant="contained" className="btn">
              Create
            </Button>
            <div className="text">Nie zwlekaj kliknij by storzyc podróż!</div>
          </div>
        </div>
      </div>
    </StyledStartContainer>
  );
};

export default StartTripBanner;
