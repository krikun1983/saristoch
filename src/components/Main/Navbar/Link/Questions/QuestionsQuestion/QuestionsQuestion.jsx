import React from 'react';
import s from './QuestionsQuestion.module.css';
import Question from './Question/Question';

const QuestionsQuestion = (props) => {
    let questionElements = props.addQuestionDate2.map( q => <Question message={q.message} likesCount={q.likesCount}/>);

    let newQuestionElement = React.createRef();

    let addQuestion = () => {
        let text = newQuestionElement.current.value;
        props.addQuestion(text );
        newQuestionElement.current.value = '';
    }

    return (
        <div>
            <div className={s.postsBlock__textarea}>
                <textarea ref={ newQuestionElement } placeholder="Вы можете задать вопрос здесь" cols="50" rows="5" maxlength="1000"></textarea>
            </div>
            <div className={s.postsBlock__button}>
            <   button onClick={ addQuestion }>Задать вопрос</button>
            </div>
            <div>{ questionElements }</div>
        </div>
    )
}

export default QuestionsQuestion;