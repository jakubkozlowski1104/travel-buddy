import { useState, useEffect, useRef } from 'react';
import { StyledNav } from './NavigationStyles';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';
import ES from '../../assets/flags/ES.png';
import PL from '../../assets/flags/PL.png';
import GB from '../../assets/flags/GB.png';
import LanguageSelect from './LanguageSelect/LanguageSelect';

const flags = [
  { src: GB, alt: 'Great Britain', name: 'en', language: 'English' },
  { src: PL, alt: 'Poland', name: 'pl', language: 'Polski' },
  { src: ES, alt: 'Spain', name: 'es', language: 'Español' },
];

const MainPage = () => {
  const { t, i18n } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [actualLanguage, setActualLanguage] = useState(flags[0].src);
  const [actualLanguageName, setActualLanguageName] = useState(flags[0].name);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('start');

  const menuItems = [
    { name: 'start', label: t('menu.start') },
    { name: 'recent', label: t('menu.recent') },
    { name: 'meet', label: t('menu.meet') },
    { name: 'add', label: t('menu.add') },
  ];

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

  const handleClickLi = (item) => {
    setActiveItem(item);
    const section = document.getElementById(item);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <StyledNav>
      <nav className={isScrolled ? 'scrolled' : ''}>
        <img src={logo} alt="foto" className="logo" />
        <div className="menu">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={activeItem === item.name ? 'active' : ''}
              onClick={() => handleClickLi(item.name)}
            >
              {item.label}
            </li>
          ))}
        </div>

        <div className="buttons">
          <Button color="primary" variant="contained">
            {t('auth.login')}
          </Button>
          <Button color="primary" variant="contained">
            {t('auth.signup')}
          </Button>
        </div>

        <LanguageSelect
          actualLanguage={actualLanguage}
          openModal={openModal}
          actualLanguageName={actualLanguageName}
          setActualLanguage={setActualLanguage}
          setActualLanguageName={setActualLanguageName}
          setOpenModal={setOpenModal}
          flags={flags}
        />
      </nav>
    </StyledNav>
  );
};

export default MainPage;
