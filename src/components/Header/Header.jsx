import React from 'react';
import s from './Header.module.css';
import MenuTop from './MenuTop/MenuTop';
import Logo from './Logo';
import Maps from './Maps';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__top}>
        <MenuTop />
      </div>
      <div className={s.header__center}>
        <div className={s.header__content}>
          <div className={s.header__logo}>
            <Logo />
          </div>
          <div className={s.header__map}>
            <Maps />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;