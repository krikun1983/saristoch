import React from 'react';
import s from './News.module.css';
import New from './Content/News/New';

const News = () => {
  return (
    <div className={s.content}>
      <h3 className={s.h3}>Новости</h3>
      <New h2='Семинар с иммигрантами из Таджикистана' entry='В нашей общественной приемной иммигранты из Таджикистана частые гости. 
      Практически в ежедневном режиме поддерживаем связь с руководителем Таджикского национально-культурного центра 
      «Дусти» Истатхон Саломовой. Земляки уважительно называю ее «Роиса», что в переводе означает уважительное «наш лидер». '/>
      <New h2='В Саратовском отделении Изборского клуба обсудили роль ООН в современном мире' entry='22 ноября 2019 г. в Русском подворье «Национальной деревни народов Саратовской области» состоялось заседание 
      Саратовского отделения Изборского клуба, посвященное проблемам народной дипломатии и роли ООН в налаживании равноправных и доверительных отношений в мире.'/>
    </div>
  );
}

export default News;