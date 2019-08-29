import React from 'react';
import Post from './Post/Post';

class Feed extends React.Component {
    componentDidMount() {
        this.props.receivePosts('gaming', 'hot', 20)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.posts.map(post => {
                    return <Post key={post.id} post={post}/>
                })}
                Feed
            </div>
        )
    }
}

export default Feed;
