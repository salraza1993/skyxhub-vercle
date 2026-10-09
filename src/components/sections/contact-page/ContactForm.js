'use client'

import { useState } from "react";
import { TurnstileCaptcha } from './../../TurnstileCaptcha';

function ContactForm() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    subject: '',
    projectDescription: ''
  });
  const [formErrors, setFormErrors] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== '');
  };

  const inputOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({...prevData, [name]: value}));
  }

  const resetForm = () => {
    setLoading(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      subject: '',
      projectDescription: ''
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!token) return alert('Captcha not verified');
    setLoading(true);
    if(!isFormValid()) {
      setFormErrors('Please fill in all fields.');
      return;
    }
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formData, token }),
    });

    resetForm();
    setFormErrors(false);
    if (response.ok) {
      setIsFormSubmitted('Form submitted successfully! We will get back to you shortly.');
      setTimeout(() => setIsFormSubmitted(false), 3000);
    } else {
      setIsFormSubmitted(false);
      setFormErrors('Form submission failed. Please try again later.');
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit} className="mil-contact-form">
        <h4 className="mil-mb-30">
          <span className="mil-accent">01.</span> Tell Us About Yourself
        </h4>
        <div className="row">
          <div className="col-lg-6">
            <div className="mil-input-frame mil-mb-30">
              <label htmlFor='firstName' className="mil-h6 mil-dark">
                <span>First Name</span>
              </label>
              <input 
                required
                value={formData.firstName}
                onChange={(e) => inputOnChange(e)}
                autoComplete='given-name' 
                id='firstName' 
                name='firstName' 
                type="text" 
                placeholder="Enter your first name" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mil-input-frame mil-mb-30">
              <label htmlFor='lastName' className="mil-h6">
                <span>Last Name</span>
              </label>
              <input 
                required
                value={formData.lastName}
                onChange={(e) => inputOnChange(e)}
                autoComplete='family-name' 
                id='lastName' 
                name='lastName' 
                type="text" 
                placeholder="Enter your last name" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mil-input-frame mil-mb-30">
              <label htmlFor='email' className="mil-h6">
                <span>Email Address</span>
              </label>
              <input 
                required
                value={formData.email}
                onChange={(e) => inputOnChange(e)}
                autoComplete='email' 
                id='email' 
                name='email' 
                type="email" 
                placeholder="e.g. your@mydomain.com" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mil-input-frame mil-mb-30">
              <label htmlFor='phone' className="mil-h6">
                <span>Phone</span>
              </label>
              <input 
                required
                value={formData.phone}
                onChange={(e) => inputOnChange(e)}
                autoComplete='tel' 
                id='phone' 
                name='phone' 
                type="number" 
                placeholder="Enter your phone number" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mil-input-frame mil-mb-30">
              <label htmlFor='company' className="mil-h6 mil-dark">
                <span>Company</span>
              </label>
              <input 
                required
                value={formData.company}
                onChange={(e) => inputOnChange(e)}
                autoComplete='organization' 
                id='company' 
                name='company' 
                type="text" 
                placeholder="Your company name" />
            </div>
          </div>
          <div className="col-lg-6 mil-mb-30">
            <div className="mil-input-frame mil-mb-30">
              <label htmlFor='role' className="mil-h6 mil-dark">
                <span>Role</span>
              </label>
              <input 
                required
                value={formData.role}
                onChange={(e) => inputOnChange(e)}
                autoComplete='title' 
                id='role' 
                name='role' 
                type="text" 
                placeholder="Your role" />
            </div>
          </div>
        </div>
        <h4 className="mil-mb-30">
          <span className="mil-accent">02.</span> What Can We Help You With?
        </h4>
        <div className="row">
          <div className="col-lg-6 mil-mb-30">
            <div className="mil-input-frame mil-mb-30">
              <label htmlFor='subject' className="mil-h6 mil-dark">
                <span>Subject</span>
              </label>
              <input 
                required
                value={formData.subject}
                onChange={(e) => inputOnChange(e)}
                autoComplete='subject' 
                id='subject' 
                name='subject' 
                type="text" 
                placeholder="Enter your subject" />
            </div>
          </div>
        </div>
        <h4 className="mil-mb-30">
          <span className="mil-accent">03.</span> Tell Us About Your Project
        </h4>
        <div className="row">
          <div className="col-lg-12">
            <div className="mil-input-frame mil-mb-30">
              <label htmlFor='projectDescription' className="mil-h6">
                <span>Project Description</span>
              </label>
              <textarea
                required
                value={formData.projectDescription}
                onChange={(e) => inputOnChange(e)}
                id='projectDescription'
                name='projectDescription'
                placeholder="Your Message"
                className="mil-shortened"
              />
            </div>
          </div>
          
          { formErrors && (
            <div className="col-lg-12">
              <div className="mil-message mil-mb-30 error">
                <p>{formErrors}</p>
              </div>
            </div>
          )}
          { isFormSubmitted && (
            <div className="col-lg-12">
              <div className="mil-message mil-mb-30 success">
                <p>{isFormSubmitted}</p>
              </div>
            </div>
          )}
          <TurnstileCaptcha onVerify={setToken} />
          <div className="col-lg-12">
            <button type="submit" className="mil-button mil-border mil-fw">
              <span>Submit Now</span>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactForm