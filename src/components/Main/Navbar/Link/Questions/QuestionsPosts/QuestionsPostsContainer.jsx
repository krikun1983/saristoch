import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../../../redux/questions-reducer';
import QuestionsPosts from './QuestionsPosts';

const QuestionsPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return ( <QuestionsPosts    updateNewPostText={ onPostChange } 
                                addPost={ addPost } 
                                addQuestionDate={state.questionsPage.addQuestionDate} 
                                newPostText={state.questionsPage.newPostText}/>)
}

export default QuestionsPostsContainer;