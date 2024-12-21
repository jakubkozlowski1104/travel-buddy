import React from 'react';
import { StyledStartContainer } from './StartTripBannerStyles';

const StartTripBanner = () => {
  return (
    <StyledStartContainer>
      <div className="center">
        <img src="/bannerJoinTrip.jpg" alt="startTravel" />
      </div>
    </StyledStartContainer>
  );
};

export default StartTripBanner;
