import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../../../../redux/persons-reducer';
import Persons from './Persons';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    personsPage: state.personsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch( sendMessageCreator() );
    },
    updateNewMessageBody: (body) => {
      dispatch( updateNewMessageBodyCreator(body));
    },
  }
}

const PersonsContainer = connect(mapStateToProps, mapDispatchToProps)(Persons);

export default PersonsContainer;