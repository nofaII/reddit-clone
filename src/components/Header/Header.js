import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = ({fetchAsNecessary, setSubreddit, subreddit, filter, setFilter, options}) => {

    const onChanger = e => {
        fetchAsNecessary(e.target.value, filter)
        setSubreddit(e.target.value)
        setFilter(subreddit, filter)
    }

    return (
        <div>
            <nav>
                <NavLink to='/hot'>Hot</NavLink>
                <NavLink to='/top'>Top</NavLink>
                <NavLink to='/new'>New</NavLink>
                <NavLink to='/controversial'>Controversial</NavLink>
                <NavLink to='/rising'>Rising</NavLink>
            </nav>
            <select value={subreddit} onChange={onChanger}>
                {options.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
        </div>
        
    )
}

export default Header;
