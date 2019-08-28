import React from 'react';
import Upvote from './Upvote';
import Info from './Info';
import Content from './Сontent';
import Interaction from './Interaction';

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <Upvote/>
                <Info/>
                <Content/>
                <Interaction/>
            </div>
        )
    }
}

export default NotFound;
