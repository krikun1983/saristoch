import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.needs}>важно</div>
      <div className={s.navbar__list}>
        <ul>
          <li className={s.navbar__item}><NavLink to='/questions' className={s.navbar__link} activeClassName={s.active}>Вопрос-ответ</NavLink></li>
          <li className={s.navbar__item}><NavLink to="/persons" className={s.navbar__link} activeClassName={s.active}>Персоны</NavLink></li>
          <li className={s.navbar__item}><NavLink to="/users" className={s.navbar__link} activeClassName={s.active}>Пользователи</NavLink></li>
          <li className={s.navbar__item}><NavLink to="/recommendations" className={s.navbar__link} activeClassName={s.active}>Рекомендации муниципальным органам власти, лидерам национально-культурных организаций</NavLink></li>
          <li className={s.navbar__item}><NavLink to="/law" className={s.navbar__link} activeClassName={s.active}>Законодательные акты. Комментарии. Правоприменительная практика</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;