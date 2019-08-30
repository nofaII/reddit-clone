import React from 'react';
import Post from './Post/Post';

class Feed extends React.Component {
    componentDidMount() {
        this.props.receivePosts('gaming', this.props.location.pathname, 20)
    }

    componentDidUpdate() {
        this.props.receivePosts('gaming', this.props.location.pathname, 20)
    }

    shouldComponentUpdate(prevProps) {
        if(this.props.location.pathname === prevProps.location.pathname)  {
            if(this.props.posts.length === 0) {return true}
            return false
        }
        return true;
    }

    render() {
        console.log(this.props.location.pathname)
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
