// @ts-nocheck
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    handleReload() {
        window.location.reload(false);
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error,
            errorInfo
        });
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <>
                    <div className="fullscreen anonymous-layout">
                        <div className="fullscreen__section fullscreen__section--center">
                            <div className="mb-4 error-cant-found">
                                <div className="mb-4 text-center">
                                    <div className="mb-4 text-center">
                                        <i className="fa fa-close fa-3x text-danger" />
                                    </div>
                                    <h5 className="text-center mb-4">500</h5>
                                    <div className="text-center">
                                        <button className="btn btn-secondary btn-sm" onClick={this.handleReload}>
                                            <i className="fa fa-fw fa-refresh" aria-hidden="true" />
                                            <span> Reload Page</span>
                                        </button>
                                    </div>
                                    <details style={{ whiteSpace: 'pre-wrap' }}>
                                        {this.state.error && this.state.error.toString()}
                                        <br />
                                        {this.state.errorInfo.componentStack}
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

export default ErrorBoundary;
