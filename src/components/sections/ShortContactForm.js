'use client'

import { useState } from "react";
import { TurnstileCaptcha } from './../TurnstileCaptcha';

function ShortContactForm() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
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
      body: JSON.stringify({ formType: 'home-page-form', formData, token }),
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
    <form onSubmit={handleSubmit} className="mil-contact-form">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6">
              <div className="mil-input-frame short-form-input mil-mb-20">
                <label htmlFor="user-name" className="mil-mb-10">
                  <span className="mil-light">Name</span>
                </label>
                <input
                  required
                  value={formData.fullName}
                  onChange={(e) => inputOnChange(e)}
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="mil-input"
                  placeholder="Enter Your Name Here"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-input-frame short-form-input mil-mb-20">
                <label htmlFor="email" className="mil-mb-10">
                  <span className="mil-light">Email Adress</span>
                </label>
                <input
                  required
                  value={formData.email}
                  onChange={(e) => inputOnChange(e)}
                  type="email"
                  id="email"
                  name="email"
                  className="mil-input"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-input-frame short-form-input mil-mb-20">
                <label htmlFor="phone" className="mil-mb-10">
                  <span className="mil-light">Phone</span>
                </label>
                <input
                  required
                  value={formData.phone}
                  onChange={(e) => inputOnChange(e)}
                  type="number"
                  id="phone"
                  name="phone"
                  className="mil-input"
                  placeholder="Your Phone"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-input-frame short-form-input mil-mb-20">
                <label htmlFor="subject" className="mil-mb-10">
                  <span className="mil-light">Subject</span>
                </label>
                <input
                  required
                  value={formData.subject}
                  onChange={(e) => inputOnChange(e)}
                  type="text"
                  id="subject"
                  name="subject"
                  className="mil-input"
                  placeholder="Your Subject"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="mil-input-frame short-form-input mil-mb-15">
            <label htmlFor="message" className="mil-mb-10">
              <span className="mil-light">Message</span>
            </label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => inputOnChange(e)}
              id="message"
              name="message"
              className="mil-textarea"
              placeholder="Your Message"
            />
          </div>
          <p className="mil-text-sm mil-light-soft mil-mb-15">
            We will process your personal information in accordance with
            our Privacy Policy.
          </p>
          <div className="mil-checbox-frame mil-mb-30">
            <input
              className="mil-checkbox"
              id="checkbox-1"
              type="checkbox"
              defaultValue="value"
            />
            <label
              htmlFor="checkbox-1"
              className="mil-text-sm mil-light"
            >
              I would like to be contacted with news and updates about
              your{" "}
              <a href="#." className="mil-accent">
                events and services
              </a>
            </label>
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
        <div className="col-12">
          <button type="submit" className="mil-button mil-button-light mil-border mil-fw">
            <span>Send Message Now</span>
          </button>
        </div>
      </div>
    </form>
  )
}

export default ShortContactForm