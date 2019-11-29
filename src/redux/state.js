let renderEntireTree = () => {}

let state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 5, 
    message: state.questionsPage.newPostText, 
    likesCount: 0,
  };
  state.questionsPage.addQuestionDate.push(newPost);
  state.questionsPage.newPostText = '';
  renderEntireTree(state);
};

export const addQuestion = () => {
  let newQuestion = {
    id: 5, 
    message: state.questionsPage.newQuestionText, 
    likesCount: 0,
  };
  state.questionsPage.addQuestionDate2.push(newQuestion);
  state.questionsPage.newQuestionText = '';
  renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.questionsPage.newPostText = newText;
  renderEntireTree(state);
};

export const updateNewQuestionText = (newText) => {
  state.questionsPage.newQuestionText = newText;
  renderEntireTree(state);
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
}


export default state;