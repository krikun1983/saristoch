import React from 'react';
import s from './Persons.module.css';
import PersonItem from './PersonItem/PersonItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../../../../redux/persons-reducer';
import {NavLink} from 'react-router-dom';
import Persons from './Persons';


const PersonsContainer = (props) => {

    let state = props.store.getState().personsPage;

    let onSendMessageClick = () => {
      props.store.dispatch( sendMessageCreator() );
    }

    let onNewMessageChange = (body) => {
      props.store.dispatch( updateNewMessageBodyCreator(body) );
    } 

    return ( <Persons updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} personsPage={state}/> );
}

export default PersonsContainer;