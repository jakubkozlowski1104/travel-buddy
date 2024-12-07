import React from 'react';
import { StyledContainer } from './MainPageStyles';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../assets/backgroud-first.jpg';
import logo from '../assets/logo.png';
import ES from '../assets/flags/ES.png';
import PL from '../assets/flags/PL.png';
import GB from '../assets/flags/GB.png';

const flags = [
  { src: PL, alt: 'Poland', name: 'pl', language: 'Polski' },
  { src: GB, alt: 'Great Britain', name: 'en', language: 'English' },
  { src: ES, alt: 'Spain', name: 'es', language: 'Español' },
];

const MainPage = () => {
  const { t, i18n } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [flagsState, setFlagsState] = useState(flags);
  const [actualLanguage, setActualLanguage] = useState(flags[0].src);
  const [actualLanguageName, setActualLanguageName] = useState(flags[0].name);
  const [isScrolled, setIsScrolled] = useState(false);

  const changeLanguage = (lang) => {
    setTimeout(() => {
      const selectedFlag = flagsState.find((flag) => flag.name === lang);
      setActualLanguage(selectedFlag.src);
      setActualLanguageName(selectedFlag.name);
      i18n.changeLanguage(lang);

      const reorderedFlags = [
        selectedFlag,
        ...flagsState.filter((flag) => flag.name !== lang),
      ];
      setFlagsState(reorderedFlags);
      setOpenModal(false);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledContainer>
      <nav className={isScrolled ? 'scrolled' : ''}>
        <img src={logo} alt="foto" className="logo" />
        <div className="menu">
          <li>{t('menu.start')}</li>
          <li>{t('menu.recent')}</li>
          <li>{t('menu.meet')}</li>
          <li>{t('menu.add')}</li>
        </div>
        <div className="buttons">
          <Button color="primary" variant="contained">
            {t('auth.login')}
          </Button>
          <Button color="primary" variant="contained">
            {t('auth.signup')}
          </Button>
        </div>
        <div className="language">
          <div className="circle" onClick={() => setOpenModal(!openModal)}>
            <img src={actualLanguage} alt="Selected language" />
            <div className={`dropdown ${openModal ? 'open' : ''}`}>
              {flagsState.map((flag) => (
                <img
                  key={flag.name}
                  src={flag.src}
                  alt={flag.alt}
                  onClick={() => changeLanguage(flag.name)}
                />
              ))}
            </div>
          </div>
          <div className="name">{actualLanguageName.toUpperCase()}</div>
        </div>
      </nav>
      <section className="banner">
        <img src={backgroundImage} alt="foto" className="background-image" />
        <div className="overlay"></div>
      </section>
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
