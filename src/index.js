import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let addNewsDate = [
  { h2: 'Семинар с иммигрантами из Таджикистана', id: 1, entry: 'В нашей общественной приемной иммигранты из Таджикистана частые гости. Практически в ежедневном режиме поддерживаем связь с руководителем Таджикского национально-культурного центра «Дусти» Истатхон Саломовой. Земляки уважительно называю ее «Роиса», что в переводе означает уважительное «наш лидер».',},
  { h2: 'В Саратовском отделении Изборского клуба обсудили роль ООН в современном мире', id: 2, entry: '22 ноября 2019 г. в Русском подворье «Национальной деревни народов Саратовской области» состоялось заседание Саратовского отделения Изборского клуба, посвященное проблемам народной дипломатии и роли ООН в налаживании равноправных и доверительных отношений в мире.',}
];

ReactDOM.render(<App addNewsDate={addNewsDate} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
