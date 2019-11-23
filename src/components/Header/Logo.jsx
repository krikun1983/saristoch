import React from 'react';
import s from './Logo.module.css';

const Logo = () => {
    return (
      <div className={s.logo}>
        <div className={s.logo__img}></div>
      </div>
    );
  }
  
export default Logo;