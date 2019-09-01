import {connect} from 'react-redux';
import {compose} from 'redux';
import {receivePosts} from './../actions/actions';
import Feed from './../components/Feed';
import {withRouter} from 'react-router-dom'

const mapStateToProps = state => ({
    posts: state.posts,
    isFetching: state.isFetching,
    subreddit: state.subreddit
})

export default compose(connect(mapStateToProps, {receivePosts}), withRouter)(Feed);