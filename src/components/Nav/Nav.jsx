import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.nav__menu}>
        <ul className={s.nav__list}>
          <li className={`${s.nav__item} ${s.active}`}><a href='#' className={s.nav__link}>Главная</a></li>
          <li className={s.nav__item}><a href='#' className={s.nav__link}>Наши фильмы</a></li>
          <li className={s.nav__item}><a href='#' className={s.nav__link}>Деятельность</a></li>
          <li className={s.nav__item}><a href='#' className={s.nav__link}>Вопрос-ответ</a></li>
          <li className={s.nav__item}><a href='#' className={s.nav__link}>Новости</a></li>
          <li className={s.nav__item}><a href='#' className={s.nav__link}>Фотогалерея</a></li>
          <li className={s.nav__item}><a href='#' className={s.nav__link}>Районы области</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;