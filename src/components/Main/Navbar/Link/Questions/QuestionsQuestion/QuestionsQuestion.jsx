import React from 'react';
import s from './QuestionsQuestion.module.css';
import Question from './Question/Question';

class QuestionsQuestion extends React.Component {
  state = {
    text: '',
  };

  handleTextareaChange = event => {
    this.setState({
      text: event.currentTarget.value,
    });
  };

  handleClick = () => {
    const { text } = this.state;
    const { addQuestion } = this.props;

    addQuestion(text);
  };

  render() {
    const { text } = this.state;

    let questionElements = this.props.addQuestionDate2.map(q => (
      <Question message={q.message} likesCount={q.likesCount} />
    ));

    return (
      <div>
        <div className={s.postsBlock__textarea}>
          <textarea
            onChange={this.handleTextareaChange}
            value={text}
            placeholder="Вы можете задать вопрос здесь"
            cols="50"
            rows="5"
            maxlength="1000"
          />
        </div>
        <div className={s.postsBlock__button}>
          <button onClick={this.handleClick}>Задать вопрос</button>
        </div>
        <div>{questionElements}</div>
      </div>
    );
  }
}

export default QuestionsQuestion;
