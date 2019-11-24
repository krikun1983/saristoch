import React from 'react';
import s from './Grant.module.css';
import Grants from './img/grantLogo.svg';

const Grant = () => {
  return (
    <div className={s.grant}>
      <div className={s.grant__block}>
        <img src={Grants} className={s.grant__logo} />
        <div className={s.grant__text}>
          <p>Сайт создан с использованием гранта Президента Российской Федерации 
          на развитие гражданского общества, предоставленного Фондом президентских грантов
          </p>
        </div>
      </div>
    </div>
  );
}

export default Grant;