import React from "react";

class BasicClassComponent extends React.Component {
    render() {
        return <div>Hello from the Class Component!</div>
    }
}

class ClassGreeting extends React.Component {
    render() {
        const { name } = this.props;

        return <div> <p> Hello, { name } !</p> </div>
    }
}

class ClassFarewell extends React.Component {
    render() {
        return <div>
            <p> Goodbye from Class Component! </p>
        </div>
    }
}


export {BasicClassComponent, ClassGreeting, ClassFarewell,};