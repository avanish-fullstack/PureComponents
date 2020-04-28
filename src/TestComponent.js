import React, { Component, PureComponent } from "react";

class Test extends PureComponent {
    state = { counter: 1 };

    componentDidMount() {
        setInterval(() => {
            this.setState({ counter: 1 });
            console.log("State updated!");
        },
            1000);
    }

    render() {
        console.log("Render called!");
        return <div>{this.state.counter}</div>
    }
}

export default Test;