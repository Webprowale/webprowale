import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
     
      await emailjs.send(
        'YOUR_SERVICE_ID',           // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',          // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'            // Replace with your EmailJS Public Key
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="rounded shadow p-4 mt-3 con1 bg-white">
      <h4 className="fw-bold mb-3 primaryColor">
        <i className="fas fa-envelope me-2"></i>
        Get In Touch
      </h4>
      <p className="small text-muted mb-4">
        Have a project in mind? Let's discuss how I can help bring your ideas to life.
      </p>
      
      {status === 'success' && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <i className="fas fa-check-circle me-2"></i>
          Message sent successfully! I'll get back to you soon.
          <button type="button" className="btn-close" onClick={() => setStatus('')}></button>
        </div>
      )}
      
      {status === 'error' && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <i className="fas fa-exclamation-circle me-2"></i>
          Failed to send message. Please try again or email me directly.
          <button type="button" className="btn-close" onClick={() => setStatus('')}></button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label small fw-bold">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label small fw-bold">Your Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="message" className="form-label small fw-bold">Your Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
            required
            disabled={loading}
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="btn btn1 primaryBg text-white w-100"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Sending...
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane me-2"></i>
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
