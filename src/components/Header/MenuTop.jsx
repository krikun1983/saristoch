import React from 'react';
import s from './MenuTop.module.css';
import {NavLink} from 'react-router-dom';

const MenuTop = () => {
  return (
    <div className={s.menu_top}>
      <ul className={s.menu_top__list}>
        <li className={s.menu_top__item}><NavLink to='/aboutUs' className={s.menu_top__link} activeClassName={s.active}>О нас</NavLink></li>
        <li className={s.menu_top__item}><NavLink to='/aboutProject' className={s.menu_top__link} activeClassName={s.active}>О нашем проекте</NavLink></li>
        <li className={s.menu_top__item}><NavLink to='/reports' className={s.menu_top__link} activeClassName={s.active}>Отчеты</NavLink></li>
      </ul>
    </div>
  );
}

export default MenuTop;