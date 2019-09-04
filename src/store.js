import {createStore, applyMiddleware, compose} from 'redux';
import posts from './reducers/reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(posts, composeEnhancers(applyMiddleware(thunk)))

export default store;