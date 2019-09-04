import Header from '../components/Header/Header'
import {connect} from 'react-redux';
import {fetchAsNecessary, setSubreddit, setFilter} from '../actions/actions';

const mapStateToProps = state => {
    const {filter} = state.postsBySubreddit[state.selectedSubreddit] || 'funny'
    return {
        subreddit: state.subreddit,
        filter: filter
    }
    
}

export default connect(mapStateToProps, {fetchAsNecessary, setSubreddit, setFilter})(Header);