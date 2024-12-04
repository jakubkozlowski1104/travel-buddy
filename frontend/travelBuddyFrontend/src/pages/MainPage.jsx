import React from 'react';
import { StyledContainer } from './MainPageStyles';
import { Button } from '@mui/material';

const MainPage = () => {
  return (
    <StyledContainer>
      <Button variant="contained" color="primary">
        Primary Dark Button
      </Button>
      <Button variant="contained" color="secondary" className="btnBrowse">
        Secondary Button
      </Button>
    </StyledContainer>
  );
};

export default MainPage;
