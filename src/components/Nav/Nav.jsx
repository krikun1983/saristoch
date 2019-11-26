import React from 'react';
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.nav__menu}>
        <ul className={s.nav__list}>
          <li className={s.nav__item}><NavLink to='/' className={s.nav__link} activeClassName={s.active}>Главная</NavLink></li>
          <li className={s.nav__item}><NavLink to='/news' className={s.nav__link} activeClassName={s.active}>Новости</NavLink></li>
          <li className={s.nav__item}><NavLink to='/activity' className={s.nav__link} activeClassName={s.active}>Деятельность</NavLink></li>
          <li className={s.nav__item}><NavLink to='/ourFilms' className={s.nav__link} activeClassName={s.active}>Наши фильмы</NavLink></li>
          <li className={s.nav__item}><NavLink to='/questionAnswer' className={s.nav__link} activeClassName={s.active}>Вопрос-ответ</NavLink></li>
          <li className={s.nav__item}><NavLink to='/gallery' className={s.nav__link} activeClassName={s.active}>Фотогалерея</NavLink></li>
          <li className={s.nav__item}><NavLink to='/regions' className={s.nav__link} activeClassName={s.active}>Районы области</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;