import React from 'react'; 

class ClassFarewell extends React.Component {
    render() {
        return <h1>Goodbye, {this.props.name}!</h1>;
    }
}

export default ClassFarewell;