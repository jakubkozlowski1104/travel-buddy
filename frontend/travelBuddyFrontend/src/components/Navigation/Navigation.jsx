import { useState, useEffect } from 'react';
import { StyledNav } from './NavigationStyles';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';
import StyledLanguageSelect from './LanguageSelect/LanguageSelect';
import Menu from './Menu/Menu';

const Navigation = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('user');
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMainPage = location.pathname === '/';

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <StyledNav>
      <nav className={isScrolled || !isMainPage ? 'scrolled' : ''}>
        <img
          src={logo}
          alt="foto"
          className="logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />
        <Menu isMainPage={isMainPage} />

        <div className="buttons">
          <ul>
            {localStorage.getItem('token') === null ? (
              <>
                <NavLink to="/login" style={{ textDecoration: 'none' }}>
                  <Button color="primary" variant="contained">
                    {t('auth.login')}
                  </Button>
                </NavLink>
                <NavLink to="/sign-up" style={{ textDecoration: 'none' }}>
                  <Button color="primary" variant="contained">
                    {t('auth.signup')}
                  </Button>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={logoutUser}
                  >
                    LOGOUT
                  </Button>
                </NavLink>
                <NavLink to="/user-profile" style={{ textDecoration: 'none' }}>
                  <Button color="primary" variant="contained">
                    My Profile
                  </Button>
                </NavLink>
              </>
            )}
          </ul>
        </div>
        <StyledLanguageSelect />
      </nav>
    </StyledNav>
  );
};

export default Navigation;
