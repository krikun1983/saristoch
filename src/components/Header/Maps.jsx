import React from 'react';
import s from './Maps.module.css';
import Gerb from './img/gerbSarObl.svg';

const Maps = () => {
    return (
      <div className={s.map}>
        <img src={Gerb} />
      </div>
    );
  }
  
export default Maps;