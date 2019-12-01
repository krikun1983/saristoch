import React from 'react';
import s from './Questions.module.css';
import QuestionsQuestionContainer from './QuestionsQuestion/QuestionsQuestionContainer';
import QuestionsInfo from './QuestionsInfo/QuestionsInfo';
import QuestionsPostsContainer from './QuestionsPosts/QuestionsPostsContainer';

const Questions = (props) => {
  return (
    <div className={s.postBlock}>
      <h3 className={s.h3}>Вопрос-ответ</h3>
      <div className={s.post}>
        <div>
            <QuestionsQuestionContainer/>
            <QuestionsInfo/>
            <QuestionsPostsContainer/>
        </div>

      </div>
    </div>
  );
}

export default Questions;