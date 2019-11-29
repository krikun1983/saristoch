import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import {addPost, addQuestion, updateNewQuestionText, updateNewPostText} from './redux/state';

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addQuestion={addQuestion} updateNewQuestionText={updateNewQuestionText} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree(state);

subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
