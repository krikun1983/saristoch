const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_QUESTION = 'ADD-QUESTION';
const UPDATE_NEW_QUESTION_TEXT = 'UPDATE-NEW-QUESTION-TEXT';

let initialState = {
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
};

const questionsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5, 
                message: state.newPostText, 
                likesCount: 0,
            };
            let stateCopy = {...state};
            stateCopy.addQuestionDate = [...state.addQuestionDate];
            stateCopy.addQuestionDate.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case ADD_QUESTION: {
            let newQuestion = {
                id: 5, 
                message: state.newQuestionText, 
                likesCount: 0,
            };
            let stateCopy = {...state};
            stateCopy.addQuestionDate2 = [...state.addQuestionDate2];
            stateCopy.addQuestionDate2.push(newQuestion)
            stateCopy.newQuestionText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.addQuestionDate = [...state.addQuestionDate];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case UPDATE_NEW_QUESTION_TEXT: {
            let stateCopy = {...state};
            stateCopy.addQuestionDate2 = [...state.addQuestionDate2];
            stateCopy.newQuestionText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST,})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text,})

export const addQuestionActionCreator = () => ({type: ADD_QUESTION,})
export const updateNewQuestionTextActionCreator = (text) => ({
    type: UPDATE_NEW_QUESTION_TEXT, newText: text,})

export default questionsReducer;