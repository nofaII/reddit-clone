import React from 'react';
import Post from '../Post';
import loader from '../../assets/loader.gif';
import PropTypes from 'prop-types';

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

Feed.propTypes = {
    fetchAsNecessary: PropTypes.func,
    isFetching: PropTypes.bool,
    setFilter: PropTypes.func,
    posts: PropTypes.array,
    selectedSubreddit: PropTypes.string
}