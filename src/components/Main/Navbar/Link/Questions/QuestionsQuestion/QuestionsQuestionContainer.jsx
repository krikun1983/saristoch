import React from 'react';
import {
  addQuestionActionCreator,
  updateNewQuestionTextActionCreator,
} from '../../../../../../redux/questions-reducer';
import QuestionsQuestion from './QuestionsQuestion';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    addQuestionDate2: state.questionsPage.addQuestionDate2,
    newQuestionText: state.questionsPage.newQuestionText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNewQuestionText: text => {
      let action = updateNewQuestionTextActionCreator(text);
      dispatch(action);
    },
    addQuestion: text => {
      dispatch(addQuestionActionCreator(text));
    },
  };
};

const QuestionsQuestionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsQuestion);

export default QuestionsQuestionContainer;
