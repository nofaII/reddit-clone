import {
    IS_FETCHING,
    SET_POSTS,
    SET_SUBREDDIT
} from './../actions/action-types';

const initialState = {
    posts: [],
    isFetching: false,
    subreddit: 'frontend'
}

const posts = (state=initialState, action) => {
    switch(action.type) {
        case IS_FETCHING: 
            return {
                ...state,
                isFetching: action.payload.status
            }
        case SET_SUBREDDIT: 
            return {
                ...state,
                subreddit: action.payload.subreddit
            }
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload.posts
            }
        default:
            return state
    }
}

export default posts;