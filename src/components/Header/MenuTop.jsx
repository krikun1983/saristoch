import React from 'react';
import s from './MenuTop.module.css';

const MenuTop = () => {
  return (
    <div className={s.menu_top}>
      <ul className={s.menu_top__list}>
        <li className={`${s.menu_top__item} ${s.active}`}><a href='#' className={s.menu_top__link}>О нас</a></li>
        <li className={s.menu_top__item}><a href='#' className={s.menu_top__link}>О нашем проекте</a></li>
        <li className={s.menu_top__item}><a href='#' className={s.menu_top__link}>Отчеты</a></li>
      </ul>
    </div>
  );
}

export default MenuTop;