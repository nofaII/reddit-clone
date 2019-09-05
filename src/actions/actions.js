import axios from 'axios';
import { 
    SET_SUBREDDIT,
    REQUEST_POSTS, 
    RECEIVE_POSTS,
    SET_FILTER
} from './action-types';
import timePassage from '../utils/timePassage';

axios.defaults.baseURL = 'https://www.reddit.com/r/';

const requestPosts = (subreddit) => ({
        type: REQUEST_POSTS,
        subreddit
})

const recievePosts = (subreddit, posts) => ({
        type: RECEIVE_POSTS,
        subreddit,
        posts: posts
})

const fetchPosts = (subreddit, filter) => {
    return (dispatch) => {
        dispatch(requestPosts(subreddit))
        return axios.get(`/${subreddit}${filter}.json`)
            .then(response => {
                return response.data.data.children.map(child => ({
                    time: timePassage(child.data.created_utc),
                    image: child.data.url  || false,
                    score: child.data.score,
                    link: child.data.permalink,
                    comments: child.data.num_comments,
                    author: child.data.author,
                    title: child.data.title,
                    sub: child.data.subreddit_name_prefixed,
                    id: child.data.id
                })
            )
            })
            .then(posts => {
                dispatch(recievePosts(subreddit, posts));
            })
    }
}

const shouldFetch = (state, subreddit, filter) => {
    const posts = state.postsBySubreddit[subreddit]

    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return true        
    } else if(posts.filter !== filter) {
        return true
    }
}

export const fetchAsNecessary = (subreddit, filter) => {
    return (dispatch, getState) => {
        if (shouldFetch(getState(), subreddit, filter)) {
            return dispatch(fetchPosts(subreddit, filter))
        }
    }
}

export const setSubreddit = (subreddit) => ({
        type: SET_SUBREDDIT,
        subreddit
})

export const setFilter = (subreddit, filter) => ({
        type: SET_FILTER,
        subreddit,
        filter
})