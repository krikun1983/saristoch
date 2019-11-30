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
            <QuestionsQuestion 
                        addQuestionDate2={props.questionsPage.addQuestionDate2} 
                        newQuestionText={props.questionsPage.newQuestionText}
                        dispatch={props.dispatch} />
            <QuestionsInfo/>
            <QuestionsPosts 
                        addQuestionDate={props.questionsPage.addQuestionDate} 
                        newPostText={props.questionsPage.newPostText}
                        dispatch={props.dispatch}/>
        </div>

      </div>
    </div>
  );
}

export default Questions;