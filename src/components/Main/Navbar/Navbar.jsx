import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.needs}>важно</div>
      <div className={s.navbar__list}>
        <ul>
          <li className={s.navbar__item}><a href="#" className={s.navbar__link}>Аналитика</a></li>
          <li className={s.navbar__item}><a href="#" className={s.navbar__link}>Рекомендации муниципальным органам власти, лидерам национально-культурных организаций</a></li>
          <li className={s.navbar__item}><a href="#" className={s.navbar__link}>Законодательные акты. Комментарии. Правоприменительная практика</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;