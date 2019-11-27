import React from 'react';
import s from './NewItem.module.css';
import Avatar from './img/avatar.jpg';
import {NavLink} from 'react-router-dom';

const NewItem = (props) => {

  let path = '/news/' + props.id;

  return (
      <div className={s.content__news}>
        <img src={Avatar} className={s.content__img}/>
        <div className={s.content__block}>
          <div className={s.content__h2}>
            <h2><NavLink to={path} className={s.content__link}>{props.h2}</NavLink></h2>
          </div>
          <div className={s.content__text}>
            <p>{props.entry}</p>
          </div>
          <div className={s.content__link_a}>
            <a href="#" className={s.content__link_a_a}>Подробнее</a>
          </div>
        </div>
      </div>
  );
};

export default NewItem;