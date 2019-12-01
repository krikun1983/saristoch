import React from 'react';
import s from './News.module.css';
import News from './News';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    addNewsDate: state.newsPage.addNewsDate,
      // newPostText: state.questionsPage.newPostText,
  }
}

const NewsContainer = connect(mapStateToProps)(News);

export default NewsContainer;