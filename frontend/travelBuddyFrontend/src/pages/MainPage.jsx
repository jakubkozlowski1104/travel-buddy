import React from 'react';
import { StyledContainer } from './MainPageStyles';
import { Button } from '@mui/material';
import backgroundImage from '../assets/backgroud-first.jpg';
import logo from '../assets/logo.png';

const MainPage = () => {
  return (
    <StyledContainer>
      <section className="banner">
        <img src={backgroundImage} alt="foto" className="background-image" />
        <div className="overlay"></div>
      </section>
      <nav>
        <img src={logo} alt="foto" className="logo" />
        <div className="menu">
          <li>start</li>
          <li>podroze</li>
          <li>menu</li>
          <li>info</li>
          <li>traveling</li>
        </div>
        <Button color="primary" variant="contained">
          LOGIN
        </Button>
        <div className="language">EN</div>
      </nav>
      <section className="trvel-type">What is your travel style?</section>
      <section className="recent">osatio dodane</section>
      <section className="meet-people">poznawaj ludzi!</section>
      <section className="travelers"></section>
      <section className="how">How it works?</section>
      <footer>stópka</footer>
    </StyledContainer>
  );
};

export default MainPage;
