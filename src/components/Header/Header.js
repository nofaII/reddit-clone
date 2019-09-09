import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({fetchAsNecessary, setSubreddit, subreddit, filter, setFilter, options}) => {

    const onChanger = e => {
        fetchAsNecessary(e.target.value, filter)
        setSubreddit(e.target.value)
        setFilter(subreddit, filter)
    }

    return (
        <div className='section-top'>
            <div className="header section-body">
                <nav className="header___navigation">
                    <NavLink className="header__navigation-item" to='/hot'>Hot</NavLink>
                    <NavLink className="header__navigation-item" to='/top'>Top</NavLink>
                    <NavLink className="header__navigation-item" to='/new'>New</NavLink>
                    <NavLink className="header__navigation-item" to='/controversial'>Controversial</NavLink>
                    <NavLink className="header__navigation-item" to='/rising'>Rising</NavLink>
                </nav>
                <div>
                    <select className="header__options" value={subreddit} onChange={onChanger}>
                        {options.map(item => <option className="header__options-item" key={item} value={item}>{item}</option>)}
                    </select>
                </div>
            </div>
        </div>
        
    )
}

Header.propTypes = {
    fetchAsNecessary: PropTypes.func, 
    setSubreddit: PropTypes.func, 
    subreddit: PropTypes.string, 
    filter: PropTypes.string, 
    setFilter: PropTypes.func, 
    options: PropTypes.array
}

export default Header;

