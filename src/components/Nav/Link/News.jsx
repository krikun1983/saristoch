import React from 'react';
import s from './News.module.css';
import NewItem from '../../Main/Content/News/NewItem';
import {NavLink} from 'react-router-dom';

const News = (props) => {

  let addNewsDate = [
    { h2: 'Семинар с иммигрантами из Таджикистана', id: 1, entry: 'В нашей общественной приемной иммигранты из Таджикистана частые гости. Практически в ежедневном режиме поддерживаем связь с руководителем Таджикского национально-культурного центра «Дусти» Истатхон Саломовой. Земляки уважительно называю ее «Роиса», что в переводе означает уважительное «наш лидер».',},
    { h2: 'В Саратовском отделении Изборского клуба обсудили роль ООН в современном мире', id: 2, entry: '22 ноября 2019 г. в Русском подворье «Национальной деревни народов Саратовской области» состоялось заседание Саратовского отделения Изборского клуба, посвященное проблемам народной дипломатии и роли ООН в налаживании равноправных и доверительных отношений в мире.',}
  ];

  return (
    <div>
      <h3 className={s.h3}>Новости</h3>
      <NewItem h2={addNewsDate[0].h2} id={addNewsDate[0].id} entry={addNewsDate[0].entry}/>
      <NewItem h2={addNewsDate[1].h2} id={addNewsDate[1].id} entry={addNewsDate[1].entry}/>
      <NewItem h2={addNewsDate[0].h2} id={addNewsDate[0].id} entry={addNewsDate[0].entry}/>
    </div>
  );
};

export default News;