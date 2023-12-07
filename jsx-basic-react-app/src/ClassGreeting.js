import React from 'react';

class ClassGreeting extends React.Component {
    render() {
        return <div>
            <h1>Hello {this.props.name}</h1>
            <h1>Age {this.props.age}</h1>
        </div>;
    }
}

export default ClassGreeting