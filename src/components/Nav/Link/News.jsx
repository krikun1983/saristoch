import React from 'react';
import s from './News.module.css';
import NewItem from '../../Main/Content/News/NewItem';

const News = (props) => {
  let newsElements = props.addNewsDate.map(addNews => <NewItem h2={addNews.h2} id={addNews.id} entry={addNews.entry}/>);

  return (
    <div>
      <h3 className={s.h3}>Новости</h3>
      {newsElements}
    </div>
  );
};

export default News;