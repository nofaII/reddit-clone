import { 
    SET_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SET_FILTER
} from '../actions/action-types';

import { combineReducers } from 'redux';

const selectedSubreddit = (state = 'funny', action) => {
    switch (action.type) {
        case SET_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

const posts = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return { ...state, 
                isFetching: true,
            }
        case RECEIVE_POSTS:
            return { ...state, 
                isFetching: false,
                items: action.posts
            }
        case SET_FILTER:
            return { ...state,
                isFetching: true,
                filter: action.filter
            }
        default:
            return state

    }
}

const postsBySubreddit = (state = {}, action) => {
    switch(action.type) {
        case SET_FILTER:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return { ...state,
                [action.subreddit]: posts(state[action.subreddit], action)
            }
        default:
            return state
    }
}

const reducers = combineReducers({
    postsBySubreddit,
    selectedSubreddit
})

export default reducers