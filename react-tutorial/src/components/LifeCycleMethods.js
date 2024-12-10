import React, { Component } from 'react';

class LifeCycleMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            evenNum: 0,
        }

    }

    increment() {
        this.setState((prevProps) => {
            this.setState({
                count: prevProps.count + 1,
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            this.setState((prev) => {
                this.setState({
                    evenNum: prev.evenNum + 2,
                })
            })
        }
    }

    render() {
        return (
            <>
                <p>This is a class based Component</p>
                <button onClick={() => this.increment()}>increment</button>
                <p>Count:{this.state.count}</p>
                <p>Even Numbers:{this.state.evenNum}</p>
            </>
        )
    }
}

export default LifeCycleMethod