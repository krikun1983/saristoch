import React from 'react';
import s from './Question.module.css';

const Question = (props) => {
  return (
    <div className={s.item}>
      <div className={s.item__img}>
        <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' />
      </div>
      <div className={s.item__message}>
          <div className={s.item__text}>{ props.message }</div>
          <div className={s.item__like}>
            <span>Нравится? - </span> { props.likesCount }
        </div>
      </div>
    </div>
  )
}

export default Question;