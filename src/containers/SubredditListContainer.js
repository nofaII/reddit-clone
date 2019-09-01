import SubredditList from '../components/Header/SubredditList'
import {setSubreddit} from '../actions/actions';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    subreddit: state.subreddit
})

export default connect(mapStateToProps, {setSubreddit})(SubredditList);