import React from 'react';
import s from './Questions.module.css';
import QuestionsPosts from './QuestionsPosts/QuestionsPosts';
import QuestionsInfo from './QuestionsInfo/QuestionsInfo';

const Questions = (props) => {
  
  let newQuestionsElement = React.createRef();

  let addQuestions = () => {
    let text = newQuestionsElement.current.value;
    alert(text);
  }

  return (
    <div className={s.postBlock}>
      <h3 className={s.h3}>Вопрос-ответ</h3>
      <div>
        <div>
          <textarea ref={ newQuestionsElement }></textarea>
        </div>
        <div>
          <button onClick={ addQuestions }>Задать вопрос</button>
        </div>
      </div>
      <div className={s.post}>
        <div>
            <QuestionsInfo/>
            <QuestionsPosts addQuestionDate={props.state.addQuestionDate}/>
        </div>

      </div>
    </div>
  );
}

export default Questions;