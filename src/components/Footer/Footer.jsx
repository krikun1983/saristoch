import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__block}>
        <div className={s.footer__text}>© 2019 СРОО ЦВП «Саратовский источник»</div>
      </div>
    </footer>
  );
}

export default Footer;