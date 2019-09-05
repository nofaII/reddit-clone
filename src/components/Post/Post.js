import React from 'react';
import Upvote from './Upvote';
import Info from './Info';
import Content from './Сontent';
import Interaction from './Interaction';

class Post extends React.Component {
    render() {
        const {time, image, score, link, comments, author, title, sub} = this.props.post
        return (
            <div>
                <span>/////////////////</span> <br/>
                <span>/////////////////</span> <br/>
                <span>/////////////////</span> <br/>
                {time} <br/>
                {image ? <img src={image} alt="" height='300' /> : console.log('kek')} <br/>
                {score} <br/>
                <a href={link}>comments</a> <br/>
                {comments} <br/>
                {author} <br/>
                {title} <br/>
                {sub} <br/>
                <span>/////////////////</span> <br/>
                <span>/////////////////</span> <br/>
                <span>/////////////////</span> <br/>
                <Upvote/>
                <Info/>
                <Content/>
                <Interaction/>
            </div>
        )
    }
}

export default Post;
