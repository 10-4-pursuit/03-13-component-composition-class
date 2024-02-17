import React, {Component} from "react";

class ClassGreeting extends Component {
	render() {
		return (
			<div>
				<h2>Hello, {this.props.name}!</h2>
			</div>
		);
	}
}
export default ClassGreeting;