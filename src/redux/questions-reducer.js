const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_QUESTION = 'ADD-QUESTION';
const UPDATE_NEW_QUESTION_TEXT = 'UPDATE-NEW-QUESTION-TEXT';

const questionsReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST: let newPost = {
            id: 5, 
            message: state.newPostText, 
            likesCount: 0,
            };
            state.addQuestionDate.push(newPost);
            state.newPostText = '';
            return state;
        case ADD_QUESTION: let newQuestion = {
            id: 5, 
            message: state.newQuestionText, 
            likesCount: 0,
            };
            state.addQuestionDate2.push(newQuestion);
            state.newQuestionText = '';
            return state;
        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText;
            return state;
        case UPDATE_NEW_QUESTION_TEXT: 
            state.newQuestionText = action.newText;
            return state;
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