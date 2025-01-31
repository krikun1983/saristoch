import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../../../../assets/images/user.png';  

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i +=1) {
        pages.push(i);
    }


    return (
        <div>
            <div>
                {pages.map( p => {
                    return <span className={props.currentPage === p && styles.selectedPage }
                    onClick={ (e) => { props.onPageChanged(p); } }>{p}</span>;
                })}
            </div>
            {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed 
                            ? <button onClick={ () => { props.unFollow(u.id) } }>UnFollow</button> 
                            : <button onClick={ () => { props.follow(u.id) } }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div></div>
                    </span>
                </span>
            </div>)
            }
        </div>
    );
}

export default Users;