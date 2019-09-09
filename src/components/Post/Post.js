import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {
    const {time, image, score, link, comments, author, title, sub, post_hint} = props.post
    const url = 'https://www.reddit.com' + link;

    return (
        <div className="post section-body">
            <div className="post__upvote">
                <div className="post__upvote-score">
                    <p>Score:</p>
                    <p >{score}</p>
                </div>
            </div>
            <div className="post__content">
                <div className="post__content-info">
                    <div className="post__content-info-item">
                        <span>{sub}</span>
                    </div>
                    <div className="post__content-info-item">
                        <span>{author}</span>
                    </div>
                    <div className="post__content-info-item">
                        <span>{time}</span>
                    </div>
                </div>
                <div className="post__content-title">
                    <h3>
                        <a href={url}>{title}</a>
                    </h3>
                </div>
                <div className="post__content-image">
                    {post_hint === 'image' 
                    ? <img src={image} alt="Something"/> 
                    : null}  
                </div>
                <div className="post__content-comments">
                    <a href={url}>
                        <span>{comments} Comments</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

Post.propTypes = {
    post_hint: PropTypes.string,
    link: PropTypes.string,
    comments: PropTypes.number,
    sub: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.string,
    image: PropTypes.string,
    score: PropTypes.string,
    author: PropTypes.string
}

export default Post;

