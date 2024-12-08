import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledMenu } from './MenuStyled';

const Menu = ({}) => {
  const [activeItem, setActiveItem] = useState('start');
  const { t } = useTranslation();

  const menuItems = [
    { name: 'start', label: t('menu.start') },
    { name: 'recent', label: t('menu.recent') },
    { name: 'meet', label: t('menu.meet') },
    { name: 'add', label: t('menu.add') },
  ];

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
    <StyledMenu>
      {menuItems.map((item) => (
        <li
          key={item.name}
          className={activeItem === item.name ? 'active' : ''}
          onClick={() => handleClickLi(item.name)}
        >
          {item.label}
        </li>
      ))}
    </StyledMenu>
  );
};

export default Menu;
