import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import {addPost, addQuestion, updateNewQuestionText, updateNewPostText} from './redux/state';

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addQuestion={addQuestion} updateNewQuestionText={updateNewQuestionText} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'));
}
