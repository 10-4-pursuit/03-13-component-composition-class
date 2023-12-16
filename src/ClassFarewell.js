import React, { Component } from "react";

class ClassFarewell extends React.Component {
  render() {
    return (
   
    <h2>{this.props.name} and Goodbye {this.props.group} from Class Component!</h2>  
  )
  }
}

const element = <ClassFarewell group="10.4" name="Hello"/>;
function BasicClassComponent() {
    return <h2>{element}</h2>;
}

const greet = <ClassFarewell name="Hello" group="10.4"/>;
function ClassGreeting() {
    return <h2>{greet}</h2>
}
export { ClassFarewell, BasicClassComponent, ClassGreeting };