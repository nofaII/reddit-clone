import React from 'react';
import {NavLink} from 'react-router-dom';
import SubredditList from '../../containers/SubredditListContainer';

class Header extends React.Component {

    render() {
        return (
            <nav>
                <NavLink to='/hot'>Hot</NavLink>
                <NavLink to='/top'>Top</NavLink>
                <NavLink to='/new'>New</NavLink>
                <NavLink to='/controversial'>Controversial</NavLink>
                <NavLink to='/rising'>Rising</NavLink>
                <SubredditList />
                <NavLink to='/Login'>Login</NavLink>
            </nav>
        )
    }
}

export default Header;
