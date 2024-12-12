import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log("Error caught:", error);
        console.log("Error info:", errorInfo);

        // You can also update the state here to display a fallback UI
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo,
        });
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    resetErrorBoundary = () => {
        this.setState({ error: null, hasError: false, errorInfo: null });
    };

    render() {
        const { error } = this.state;
        if (error) return <this.props.FallbackComponent resetErrorBoundary={this.resetErrorBoundary} />
        return this.props.children
    }
}

export default ErrorBoundary