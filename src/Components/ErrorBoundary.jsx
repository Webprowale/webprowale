import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container text-center mt-5">
          <div className="card shadow-lg border-0 mx-auto" style={{ maxWidth: '600px' }}>
            <div className="card-body p-5">
              <div className="mb-4">
                <i className="fas fa-exclamation-triangle primaryColor" style={{ fontSize: '4rem' }}></i>
              </div>
              <h2 className="primaryColor fw-bold mb-3">Oops! Something went wrong.</h2>
              <p className="text-muted mb-4">
                We're sorry for the inconvenience. An unexpected error has occurred.
              </p>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-start bg-light p-3 rounded mb-4">
                  <summary className="fw-bold text-danger mb-2 cursor-pointer">
                    Error Details (Development Mode)
                  </summary>
                  <pre className="small text-wrap">
                    {this.state.error.toString()}
                    <br />
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}
              
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button 
                  className="btn primaryBg text-white"
                  onClick={() => window.location.reload()}
                >
                  <i className="fas fa-redo me-2"></i>
                  Reload Page
                </button>
                <button 
                  className="btn btn-outline-secondary"
                  onClick={() => window.location.href = '/'}
                >
                  <i className="fas fa-home me-2"></i>
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
