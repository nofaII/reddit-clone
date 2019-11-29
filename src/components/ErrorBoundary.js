import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        error: null
    }

    componentDidCatch(error) {
        this.setState({
            error
        })
    }

    render() {
        if(this.state.error)
        {
            return (
                <div className='not-found'>
                    <h1 className='not-found-title'>Something went wrong</h1>
                    <h2 className='not-found-subtitle'>We apologize for any inconvenience caused</h2>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;