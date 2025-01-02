import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { useTranslation } from 'react-i18next';
import { StyledMenu } from './MenuStyled';

const Menu = ({ isMainPage }) => {
  const [activeItem, setActiveItem] = useState('start');
  const { t } = useTranslation();

  const menuItems = [
    { name: 'start', label: t('menu.start') },
    { name: 'recent', label: t('menu.recent') },
    { name: 'meet', label: t('menu.meet') },
    { name: 'add', label: t('menu.add') },
  ];

  const handleClickLi = (item) => {
    if (item !== 'add') {
      setActiveItem(item);
      const section = document.getElementById(item);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <StyledMenu isMainPage={isMainPage}>
      {menuItems.map((item) => (
        <li
          key={item.name}
          className={activeItem === item.name ? 'active' : ''}
          onClick={
            item.name !== 'add' ? () => handleClickLi(item.name) : undefined
          }
        >
          {item.name === 'add' ? (
            <NavLink
              to="/create-trip"
              className="link"
              onClick={() => setActiveItem(item.name)}
            >
              {item.label}
            </NavLink>
          ) : (
            item.label
          )}
        </li>
      ))}
    </StyledMenu>
  );
};

export default Menu;
