import React, { Component } from "react";

class ClassGreeting extends React.Component {
  render() {
    return <h2 style={{fontStyle:"italic"}}>{this.props.name}, I need your help!</h2>;
  }
}

export default  ClassGreeting ;
