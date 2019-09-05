import React from 'react';
import Post from '../Post/Post';

class Feed extends React.Component {
    componentDidMount() {
        const {selectedSubreddit, location: {pathname}} = this.props
        this.props.fetchAsNecessary(selectedSubreddit, pathname)
        this.props.setFilter(selectedSubreddit , pathname)
    }

    componentDidUpdate(prevProps) {
        const {selectedSubreddit, location: {pathname},  fetchAsNecessary, setFilter} = this.props
        if (selectedSubreddit !== prevProps.selectedSubreddit || pathname !== prevProps.location.pathname) {
            fetchAsNecessary(selectedSubreddit, pathname)
            setFilter(selectedSubreddit, pathname)
        }
    }


    render() {
        return (
            <div>
                {this.props.isFetching 
                    ? <h2>Wait please...</h2> 
                    : this.props.posts.map(post => {
                        return <Post key={post.id} post={post}/>
                    })}
                
            </div>
        )
    }
}

export default Feed;
