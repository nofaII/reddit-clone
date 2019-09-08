import React from 'react';

class Post extends React.Component {
    render() {
        
        
        const {time, image, score, link, comments, author, title, sub, post_hint} = this.props.post
        
        return (
            <div className="post section-body">
                <div className="post__upvote">
                    <div className="post__upvote-score">
                        <button className="post__upvote-score_up"></button>
                        <p >{score}</p>
                        <button className="post__upvote-score_down"></button>
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
                        <a href={link}>
                            <h3>
                                {title}
                            </h3>
                        </a>
                    </div>
                    <div className="post__content-image">
                        {post_hint === 'image' 
                        ? <img src={image} alt="Some image"/> 
                        : null}  
                    </div>
                    <div className="post__content-comments">
                        <a href={link}>
                            <span>{comments} Comments</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;
