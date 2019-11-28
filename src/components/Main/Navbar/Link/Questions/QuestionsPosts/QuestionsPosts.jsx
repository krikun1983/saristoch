import React from 'react';
import s from './QuestionsPosts.module.css';
import Post from './Post/Post';

const QuestionsPosts = (props) => {
    let postsElements =
        props.addQuestionDate.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default QuestionsPosts;