import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../../../redux/questions-reducer';
import QuestionsPosts from './QuestionsPosts';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        addQuestionDate: state.questionsPage.addQuestionDate,
        // newPostText: state.questionsPage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    }
}

const QuestionsPostsContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionsPosts);

export default QuestionsPostsContainer;