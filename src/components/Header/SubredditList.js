import React from 'react';
import PropTypes from 'prop-types';

const SuredditList = ({setSubreddit, subreddit}) => {
    const handleChange = e => {
        setSubreddit(e.target.value);
        console.log(subreddit)
    }
    
    return (
        <select value={subreddit} onChange={handleChange}>
            <option value="frontend">Frontend</option>
            <option value="sports">Sports</option>
            <option value="funny">Funny</option>
            <option value="gaming">Gaming</option>
            <option value="movies">Movies</option>
            <option value="politics">Politics</option>
            <option value="lifehacks">Lifehacks</option>
            <option value="android">Android</option>
            <option value="pics">Pics</option>
            <option value="creepy">Creepy</option>
            <option value="xboxone">Xboxone</option>
        </select>
    )
}

export default SuredditList;

SuredditList.propTypes = {
    setSubreddit: PropTypes.func.isRequired,
    subreddit: PropTypes.string.isRequired
}