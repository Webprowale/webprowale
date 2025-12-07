import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      // Integrate with your email service (Mailchimp, ConvertKit, etc.)
      // For now, we'll simulate the subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Newsletter subscription:', email);
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Newsletter error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div className="rounded shadow p-4 mt-3 primaryBg text-white">
      <h4 className="fw-bold">
        <i className="fas fa-bell me-2"></i>
        Stay Updated
      </h4>
      <p className="small mb-3">
        Get tech insights, project updates, and development tips delivered to your inbox.
      </p>
      
      {status === 'success' && (
        <div className="alert alert-light alert-dismissible fade show mb-3" role="alert">
          <small>
            <i className="fas fa-check-circle text-success me-2"></i>
            Successfully subscribed! Check your email.
          </small>
          <button type="button" className="btn-close" onClick={() => setStatus('')}></button>
        </div>
      )}
      
      {status === 'error' && (
        <div className="alert alert-light alert-dismissible fade show mb-3" role="alert">
          <small>
            <i className="fas fa-exclamation-circle text-danger me-2"></i>
            Something went wrong. Please try again.
          </small>
          <button type="button" className="btn-close" onClick={() => setStatus('')}></button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="d-flex flex-column flex-md-row gap-2">
        <input
          type="email"
          className="form-control"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <button 
          type="submit" 
          className="btn btn-light text-nowrap"
          disabled={loading}
        >
          {loading ? (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : (
            <>
              <i className="fas fa-envelope me-2"></i>
              Subscribe
            </>
          )}
        </button>
      </form>
      
      <small className="d-block mt-2 opacity-75">
        <i className="fas fa-lock me-1"></i>
        Your email is safe. No spam, unsubscribe anytime.
      </small>
    </div>
  );
}

export default Newsletter;
