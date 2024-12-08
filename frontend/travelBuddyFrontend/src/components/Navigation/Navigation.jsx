import { useState, useEffect } from 'react';
import { StyledNav } from './NavigationStyles';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';
import StyledLanguageSelect from './LanguageSelect/LanguageSelect';
import Menu from './Menu/Menu';

const Navigation = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledNav>
      <nav className={isScrolled ? 'scrolled' : ''}>
        <img src={logo} alt="foto" className="logo" />
        <Menu />

        <div className="buttons">
          <Button color="primary" variant="contained">
            {t('auth.login')}
          </Button>
          <Button color="primary" variant="contained">
            {t('auth.signup')}
          </Button>
        </div>

        <StyledLanguageSelect />
      </nav>
    </StyledNav>
  );
};

export default Navigation;
