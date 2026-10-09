'use client'

import { useState } from "react";

function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const isValidEmail = () => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!email) {
      setError('Enter your email address.');
      return;
    } else if(!isValidEmail(email)) {
      setError('Email address is invalid.');
      return;
    }

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formData: { email }, formType: 'newsletter' }),
    });

    setEmail('');
    setError(false);
    if (response.ok) {
      setIsFormSubmitted('Form submitted successfully!, \n we will get back to you shortly');
      setTimeout(() => setIsFormSubmitted(false), 3000);
    } else {
      setIsFormSubmitted(false);
      setError('Form submission failed. Please try again later.');
    }
  };

  return (
    <form className="mil-subscribe-form" onSubmit={handleSubmit}>
      <input
        autoComplete="email"
        type="email"
        id="email"
        name="email"
        placeholder="Your email address"
        className={`mil-input ${error ? 'error' : ''}`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      { error && (
        <div className="col-lg-12">
          <div className="mil-message mil-mt-15 error max-width--content">
            <p>{error}</p>
          </div>
        </div>
      )}
      { isFormSubmitted && (
        <div className="col-lg-12">
          <div className="mil-message mil-mt-15 success max-width--content">
            <p>{isFormSubmitted}</p>
          </div>
        </div>
      )}
      <button type="submit" className="mil-button mil-accent-bg">
        Subscribe Now
      </button>
    </form>
  )
}

export default SubscribeForm