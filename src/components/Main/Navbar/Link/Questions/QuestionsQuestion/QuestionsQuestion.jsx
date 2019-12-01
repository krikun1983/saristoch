import React from 'react';
import s from './QuestionsQuestion.module.css';
import Question from './Question/Question';
import {addQuestionActionCreator, updateNewQuestionTextActionCreator} from '../../../../../../redux/questions-reducer';

const QuestionsQuestion = (props) => {
    let questionElements = props.addQuestionDate2.map( q => <Question message={q.message} likesCount={q.likesCount}/>);

    let newQuestionElement = React.createRef();

    let addQuestion = () => {
        props.dispatch(addQuestionActionCreator());
    }

    let onQuestionChange = () => {
        let text = newQuestionElement.current.value;
        props.dispatch(updateNewQuestionTextActionCreator(text));
    }

    return (
        <div>
            <div className={s.postsBlock__textarea}>
                <textarea onChange={ onQuestionChange } ref={ newQuestionElement } value={ props.newQuestionText } 
                placeholder="Вы можете задать вопрос здесь" cols="50" rows="5" maxlength="1000"/>
            </div>
            <div className={s.postsBlock__button}>
            <button onClick={ addQuestion }>Задать вопрос</button>
            </div>
            <div>{ questionElements }</div>
        </div>
    )
}

export default QuestionsQuestion;