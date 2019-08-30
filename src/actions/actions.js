import axios from 'axios';
import {
    IS_FETCHING,
    SET_POSTS
} from './action-types';
axios.defaults.baseURL = 'https://www.reddit.com/r/';

export const isFetching = status => ({
    type: IS_FETCHING,
    payload: {status}
})

export const setPosts = posts => ({
    type: SET_POSTS,
    payload: {posts}
})

export const receivePosts = (subreddit, filter, count) => {
    return dispatch => {
        dispatch(isFetching(true));
        axios.get(`${subreddit}${filter}.json?limit=${count}`)
            .then(response => {
                return response.data.data.children.map(child => ({
                        time: child.data.created_utc,
                        image: child.data.url,
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
                dispatch(setPosts(posts));
                dispatch(isFetching(false));
            })
            .catch(error => console.log('something went wrong: ' + error))
    }
}

