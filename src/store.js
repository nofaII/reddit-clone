import {createStore, applyMiddleware} from 'redux';
import posts from './reducers/postsReducer';
import thunk from 'redux-thunk';


const store = createStore(posts, applyMiddleware(thunk))

export default store;