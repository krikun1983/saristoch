import {createStore, combineReducers} from 'redux';
import questionsReducer from './questions-reducer';
import personsReducer from './persons-reducer';
import sidebarReducer from './sidebar-reducer';
import newsReducer from './news-reducer';
import UsersReducer from './users-reducer';

let reducers = combineReducers({
    questionsPage: questionsReducer,
    personsPage: personsReducer,
    sidebar: sidebarReducer,
    newsPage: newsReducer,
    usersPage: UsersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;