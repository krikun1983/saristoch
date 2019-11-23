import React from 'react';
import s from './Header.module.css';
import MenuTop from './MenuTop';
import Logo from './Logo';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__top}>
        <MenuTop />
      </div>
      <div className={s.header__logo}>
        <Logo />
      </div>
    </header>
  );
}

export default Header;