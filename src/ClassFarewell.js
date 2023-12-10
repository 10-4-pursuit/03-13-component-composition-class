import React from "react";

class ClassFarewell extends React.Component {
    render () {
        return <div>
        <h3>Goodbye {this.props.name} from Class Component!</h3>
        <p>We hope that you are enjoying your react journey</p>
        </div>
    };
};

export default ClassFarewell;