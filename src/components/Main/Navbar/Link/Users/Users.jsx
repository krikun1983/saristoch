import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'http://kto.delovoysaratov.ru/wp-content/uploads/sites/2/2015/06/%D0%B7%D1%83%D0%B5%D0%B21.jpg', followed: false, fullName: 'Зуев Александр Пулатович', status: 'Национальная политика это все', location: {city: 'Saratov'}},
            {id: 2, photoUrl: 'http://kto.delovoysaratov.ru/wp-content/uploads/sites/2/2015/06/%D0%B7%D1%83%D0%B5%D0%B21.jpg', followed: true, fullName: 'Мякшев Анатолий Павлович', status: 'Национальную политику надо менять', location: {city: 'Saratov'}},
            {id: 3, photoUrl: 'http://kto.delovoysaratov.ru/wp-content/uploads/sites/2/2015/06/%D0%B7%D1%83%D0%B5%D0%B21.jpg', followed: false, fullName: 'Семенов Сергей Валерьевич', status: 'Национальную политику надо обдумать', location: {city: 'Saratov'}},
        ])
    }
    return (
        <div>
            {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed 
                            ? <button onClick={ () => { props.unFollow(u.id) } }>UnFollow</button> 
                            : <button onClick={ () => { props.follow(u.id) } }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div></div>
                    </span>
                </span>
            </div>)
            }
        </div>
    );
};

export default Users;