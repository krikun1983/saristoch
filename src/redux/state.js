let store = {
  _state: {
    newsPage: {
      addNewsDate: [
        { h2: 'Семинар с иммигрантами из Таджикистана', id: 1, entry: 'В нашей общественной приемной иммигранты из Таджикистана частые гости. Практически в ежедневном режиме поддерживаем связь с руководителем Таджикского национально-культурного центра «Дусти» Истатхон Саломовой. Земляки уважительно называю ее «Роиса», что в переводе означает уважительное «наш лидер».',},
        { h2: 'В Саратовском отделении Изборского клуба обсудили роль ООН в современном мире', id: 2, entry: '22 ноября 2019 г. в Русском подворье «Национальной деревни народов Саратовской области» состоялось заседание Саратовского отделения Изборского клуба, посвященное проблемам народной дипломатии и роли ООН в налаживании равноправных и доверительных отношений в мире.',},
    ],
    },
    questionsPage: {
      addQuestionDate: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
      ],
      addQuestionDate2: [
        {id: 1, message: 'Как дела', likesCount: 12},
        {id: 2, message: 'Почем нынче верстка', likesCount: 11},
        {id: 3, message: 'Где беженцы', likesCount: 11},
        {id: 4, message: 'Сколько весит кг хлопка?', likesCount: 11}
      ],
      newPostText: 'saristoch.ru',
      newQuestionText: 'Неужели забыли вопрос',
    },
    personsPage: {
      addPersonDate: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
      ],
      addMessagesDate: [
        {id: 1, message: 'Добрый день!'},
        {id: 2, message: 'Ты вчера лег спать рано?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
      ],
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5, 
        message: this._state.questionsPage.newPostText, 
        likesCount: 0,
      };
      this._state.questionsPage.addQuestionDate.push(newPost);
      this._state.questionsPage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-QUESTION') {
      let newQuestion = {
        id: 5, 
        message: this._state.questionsPage.newQuestionText, 
        likesCount: 0,
      };
      this._state.questionsPage.addQuestionDate2.push(newQuestion);
      this._state.questionsPage.newQuestionText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.questionsPage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-QUESTION-TEXT') {
      this._state.questionsPage.newQuestionText = action.newText;
      this._callSubscriber(this._state);
    }
  },
}

export default store;
window.store = store;