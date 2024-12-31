import React from 'react';
import { StyledCreateTripContainer } from './CreateTripStyles';

const CreateTrip = () => {
  return (
    <StyledCreateTripContainer>
      <div className="center">
        <div className="banner">Create new trip!</div>
        <div className="forms"></div>
      </div>
    </StyledCreateTripContainer>
  );
};

export default CreateTrip;
