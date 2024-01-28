import React, { Component } from 'react';

class ClassGreeting extends React.Component {
    render() {
        const { name } = this.props;
        return (
            <div>
                Hello, {name} !
            </div>
        );
    }
}

export default ClassGreeting;