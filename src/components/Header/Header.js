import React from 'react';
import {NavLink} from 'react-router-dom';
import SubredditList from './SubredditList';

class Header extends React.Component {
    state = {
        subreddit: 'frontend',
        filter: 'top'
    }

    setSubreddit = subreddit => {
        this.setState({subreddit})
    }

    setFilter = filter => {
        this.setState({filter})
    }

    render() {
        return (
            <nav>
                <NavLink to='/hot'>Hot</NavLink>
                <NavLink to='/top'>Top</NavLink>
                <NavLink to='/new'>New</NavLink>
                <NavLink to='/controversial'>Controversial</NavLink>
                <NavLink to='/rising'>Rising</NavLink>
                <SubredditList 
                    setSubreddit={this.setSubreddit}  
                    subreddit={this.state.subreddit}/>
                <NavLink to='/Login'>Login</NavLink>
                <div>subreddit at the moment {this.state.subreddit}</div>
            </nav>
        )
    }
}

export default Header;
