import React from 'react';
import Post from '../Post/Post';
import loader from '../../assets/loader.gif';

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
                    ? <div className='loader'>
                        <img src={loader} alt=""/>
                      </div>
                    : this.props.posts.map(post => {
                        return <Post key={post.id} post={post}/>
                    })}
                
            </div>
        )
    }
}

export default Feed;
