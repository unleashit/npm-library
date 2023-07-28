import React from 'react';

type State = {
  error: null | Error;
  errorInfo: null | Record<string, any>;
};

export default class ErrorBoundary extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    // eslint-disable-next-line react/state-in-constructor
    this.state = { error: null, errorInfo: null };
  }

  // This method is called if any error is encountered
  componentDidCatch(error: Error, errorInfo: any) {
    // Catch errors in any components below and
    // re-render with error message
    this.setState({
      error,
      errorInfo,
    });

    // You can also log error messages to an error
    // reporting service here
  }

  // This will render this component wherever called
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>An Error Has Occurred</h2>
          <pre>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </pre>
        </div>
      );
    }
    // Normally, just render children, i.e. in
    // case no error is Found
    return this.props.children;
  }
}
