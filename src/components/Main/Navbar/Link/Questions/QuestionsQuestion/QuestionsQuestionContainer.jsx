import React from 'react';
import {addQuestionActionCreator, updateNewQuestionTextActionCreator} from '../../../../../../redux/questions-reducer';
import QuestionsQuestion from './QuestionsQuestion';


const QuestionsQuestionContainer = (props) => {
    let state = props.store.getState();

    let addQuestion = () => {
        props.store.dispatch(addQuestionActionCreator());
    }

    let onQuestionChange = (text) => {
        let action = updateNewQuestionTextActionCreator(text);
        props.store.dispatch(action);
    }

    return ( <QuestionsQuestion updateNewQuestionText={ onQuestionChange } 
                                addQuestion={ addQuestion } 
                                addQuestionDate2={state.questionsPage.addQuestionDate2} 
                                newQuestionText={state.questionsPage.newQuestionText}/>)
}

export default QuestionsQuestionContainer;