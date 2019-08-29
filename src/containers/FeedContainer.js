import {connect} from 'react-redux';
import {receivePosts} from './../actions/actions';
import Feed from './../components/Feed';

const mapStateToProps = state => ({
    posts: state.posts,
    isFetching: state.isFetching
})

export default connect(mapStateToProps, {receivePosts})(Feed);