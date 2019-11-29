import React from 'react';
import s from './Questions.module.css';
import QuestionsQuestion from './QuestionsQuestion/QuestionsQuestion';
import QuestionsInfo from './QuestionsInfo/QuestionsInfo';
import QuestionsPosts from './QuestionsPosts/QuestionsPosts';

const Questions = (props) => {
  return (
    <div className={s.postBlock}>
      <h3 className={s.h3}>Вопрос-ответ</h3>
      <div className={s.post}>
        <div>
            <QuestionsQuestion addQuestionDate2={props.state.addQuestionDate2} addQuestion={props.addQuestion} />
            <QuestionsInfo/>
            <QuestionsPosts addQuestionDate={props.state.addQuestionDate} addPost={props.addPost}/>
        </div>

      </div>
    </div>
  );
}

export default Questions;