import React from 'react';
import s from './Persons.module.css';
import PersonItem from "./PersonItem/PersonItem";
import Message from "./Message/Message";
import {NavLink} from 'react-router-dom';


const Persons = (props) => {
    let personsElements =  props.state.addPersonDate.map( d => <PersonItem name={d.name} id={d.id} />  );
    let messagesElements = props.state.addMessagesDate.map( m => <Message message={m.message}/> );
  return (
    <div>
      <h3 className={s.h3}>Персоны</h3>
      {/* <PersonItem name='Муратов Сергей' id='1'/>
      <PersonItem name='Кутузов Василий' id='2'/>
      <PersonItem name='Перекальский Евгений' id='3'/> */}
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Добавить сообщение</button>
        </div>
      </div>
      <div className={s.messages}>
        <Message message='Добрый день!'/>
        <Message message='Ты вчера лег спать рано?'/>
        <Message message='Ты вчера лег спать рано?'/>
      </div>
      <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { personsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
      </div>
    </div>
  );
}

export default Persons;