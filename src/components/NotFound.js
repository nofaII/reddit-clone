import React from 'react';

const NotFound = ({history:{goBack}}) => {
    return (
        <div>
            <h1>404</h1>
            <h2>Seems something went wrong</h2>
            <button onClick={() => goBack()}>Go back</button>
        </div>
    )
}

export default NotFound;