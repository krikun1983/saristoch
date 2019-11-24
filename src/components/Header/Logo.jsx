import React from 'react';
import s from './Logo.module.css';

const Logo = () => {
    return (
      <div className={s.logo}>
        <div className={s.logo__img}></div>
        <div className={s.logo__address}>
          <div>СРОО ЦВП «Саратовский источник»</div>
          <div>410000, г. Саратов, пр. Строителей, д.36</div>
          <div><a href="tel:+78452520593" className={s.logo__link}>☎ Тел.: +7(845-2) 52-05-93</a></div>
          <div><a href="tel:+79053204597" className={s.logo__link}>☎ Моб: +7-905-320-45-97</a></div>
          <div><a href="mailto:saristoch@bk.ru" className={s.logo__link}>📧 E-mail: saristoch@bk.ru</a></div>
        </div>
        <h1 className={s.logo__h1}><div>Национальная политика</div>в муниципальном образовании</h1>
      </div>
    );
  }
  
export default Logo;