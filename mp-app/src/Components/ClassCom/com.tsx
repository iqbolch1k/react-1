import { Component, ReactNode } from "react";

interface CounterState {
    count: number;
}

class Counter extends Component<unknown, CounterState> {
    constructor(props?: unknown) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    decrement = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    };

    render(): ReactNode {
        return (
            <div>
                <h2>Hisoblagich: {this.state.count}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

export default Counter;
