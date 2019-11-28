import React from 'react';
import s from './QuestionsPosts.module.css';
import Post from './Post/Post';

const QuestionsPosts = (props) => {
    let postsElements = props.addQuestionDate.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text );
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={ newPostElement }></textarea>
                </div>
                <div>
                <button onClick={ addPost }>Задать вопрос2</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default QuestionsPosts;