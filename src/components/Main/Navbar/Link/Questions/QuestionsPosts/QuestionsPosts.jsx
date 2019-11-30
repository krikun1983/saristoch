import React from 'react';
import s from './QuestionsPosts.module.css';
import Post from './Post/Post';

const QuestionsPosts = (props) => {
    let postsElements = props.addQuestionDate.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return (
        <div className={s.postsBlock}>
            <h4 className={s.h4}>Мои посты</h4>
            <div>
                <div className={s.postsBlock__textarea}>
                    <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText }
                    placeholder="Опишите, что вы думаете" cols="50" rows="5" maxlength="500"/>
                </div>
                <div className={s.postsBlock__button}>
                    <button onClick={ addPost }>Добавить пост</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default QuestionsPosts;