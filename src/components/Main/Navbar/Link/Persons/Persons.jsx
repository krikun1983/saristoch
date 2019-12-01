import React from 'react';
import s from './Persons.module.css';
import PersonItem from './PersonItem/PersonItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../../../../redux/persons-reducer';
import {NavLink} from 'react-router-dom';


const Persons = (props) => {

    let state = props.personsPage;

    let personsElements =  state.addPersonDate.map( d => <PersonItem name={d.name} key={d.id} id={d.id} />  );
    let messagesElements = state.addMessagesDate.map( m => <Message message={m.message} key={m.id}/> );
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = () => {
      props.sendMessage();
    }

    let onNewMessageChange = (event) => {
      let body = event.target.value;
      props.updateNewMessageBody(body);
    } 

    return (
    <div>
      <h3 className={s.h3}>Персоны</h3>
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
                <div>{ messagesElements }</div>
                <div>
                  <div><textarea  value={ newMessageBody } 
                                  onChange={ onNewMessageChange }
                                  placeholder='Введите сообщение'></textarea></div>
                  <div><button onClick={ onSendMessageClick }>Отправить</button></div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Persons;