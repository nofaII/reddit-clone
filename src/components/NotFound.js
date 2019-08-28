import React from 'react';

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <h1>404</h1>
                <h2>Seems something went wrong</h2>
                <button onClick={this.toMainPage}>Go back</button>
            </div>
        )
    }
}

export default NotFound;
