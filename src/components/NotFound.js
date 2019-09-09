import React from 'react';

const NotFound = ({history:{goBack}}) => {
    return (
        <div className='not-found'>
            <h1 className='not-found-title'>404</h1>
            <h2 className='not-found-subtitle'>Seems something went wrong</h2>
            <div className='not-found-btn' onClick={() => goBack()}>Go back</div>
        </div>
    )
}

export default NotFound;