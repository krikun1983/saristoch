import React from 'react';
import s from './QuestionsQuestion.module.css';
import Question from './Question/Question';

const QuestionsQuestion = (props) => {
    let questionElements = props.addQuestionDate2.map( q => <Question message={q.message} likesCount={q.likesCount}/>);

    let newQuestionElement = React.createRef();

    let onAddQuestion = () => {
        props.addQuestion();
    }

    let onQuestionChange = () => {
        let text = newQuestionElement.current.value;
        props.updateNewQuestionText(text);
    }

    return (
        <div>
            <div className={s.postsBlock__textarea}>
                <textarea onChange={ onQuestionChange } ref={ newQuestionElement } value={ props.newQuestionText } 
                placeholder="Вы можете задать вопрос здесь" cols="50" rows="5" maxlength="1000"/>
            </div>
            <div className={s.postsBlock__button}>
            <button onClick={ onAddQuestion }>Задать вопрос</button>
            </div>
            <div>{ questionElements }</div>
        </div>
    )
}

export default QuestionsQuestion;