import React from 'react';
import Post from './Post/Post'

class Feed extends React.Component {
    render() {
        return (
            <div>
                {[].map(i => {
                    return <Post props={'propsFromArray'}/>
                })}
                Feed
            </div>
        )
    }
}

export default Feed;
