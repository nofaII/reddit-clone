import {connect} from 'react-redux';
import {fetchAsNecessary, setFilter} from '../../actions/actions';
import Feed from './Feed';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state
    const {isFetching, items: posts} = postsBySubreddit[selectedSubreddit] || {isFetching: true, items: []}
    
    return {
        selectedSubreddit,
        posts,
        isFetching,
    }
}
export default compose(connect(mapStateToProps, {fetchAsNecessary, setFilter}), withRouter)(Feed)