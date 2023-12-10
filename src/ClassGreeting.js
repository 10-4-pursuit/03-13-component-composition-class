import React from "react";

class ClassGreeting extends React.Component {
    render() {
        return <div>
            <h2>Greetings from the React Team!</h2>
            <p>Welcome to Class Components {this.props.name}.</p>
        </div>
    };
};

export default ClassGreeting;