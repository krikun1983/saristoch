import React from 'react';
import s from './QuestionsPosts.module.css';
import Post from './Post/Post';

const QuestionsPosts = (props) => {
    let postsElements = props.addQuestionDate.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text );
        newPostElement.current.value = '';
    }

    return (
        <div className={s.postsBlock}>
            <h4 className={s.h4}>Мои посты</h4>
            <div>
                <div className={s.postsBlock__textarea}>
                    <textarea ref={ newPostElement } placeholder="Опишите, что вы думаете" cols="50" rows="5" maxlength="500"></textarea>
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