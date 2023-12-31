import React,{Component} from 'react';

class BasicClassComponent extends React.Component {
    render() {
        return <div>Hello from Class Component!</div>
    }
}
        
class ClassGreeting extends React.Component {
    render() {
        return <div>
            <h1>Greetings, {this.props.name}</h1>
            </div>
    }
}

class ClassFarewell extends React.Component {
    render () {
        return <div>
            Goodbye from Class Component!
        </div>
    }
}

export {ClassFarewell, ClassGreeting, BasicClassComponent};