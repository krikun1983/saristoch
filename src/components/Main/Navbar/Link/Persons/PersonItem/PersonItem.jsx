import React from 'react';
import s from './PersonItem.module.css';
import {NavLink} from "react-router-dom";

const PersonItem = (props) => {
  let path = "/persons/" + props.id;
  return (
    <div className={s.item}>
        {/* img добавить познее */}
        Пост №1
        <div>
            {props.message}
        </div>
        <div>
            <span>Like</span>
        </div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default PersonItem;