import React, { useRef, useEffect, useState } from 'react';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');

    // Simulate sending (replace with EmailJS or Formspree in production)
    try {
      await new Promise(res => setTimeout(res, 1800));
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="contact section" ref={sectionRef}>
      <div className="section-label reveal">
        <span>04</span> CONTACT
      </div>

      <div className="contact-header reveal">
        <h2>Let's <span className="gradient-text">Connect</span></h2>
        <p>Looking for an internship opportunity or just want to say hi? My inbox is always open.</p>
      </div>

      <div className="contact-grid">
        {/* Info side */}
        <div className="contact-info reveal">
          <div className="contact-blurb">
            <p>
              I'm actively looking for internship and entry-level opportunities in software development 
              and web technologies. Whether you have a project in mind or just want to chat about tech, 
              feel free to reach out!
            </p>
          </div>

          <div className="contact-details">
            <a href="mailto:priyanka.pilla999@gmail.com" className="contact-detail-card">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className="detail-label">EMAIL</div>
                <div className="detail-value">priyanka.pilla999@gmail.com</div>
              </div>
            </a>

            <a href="tel:9949224675" className="contact-detail-card">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <div className="detail-label">PHONE</div>
                <div className="detail-value">+91 9949224675</div>
              </div>
            </a>

            <div className="contact-detail-card">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div className="detail-label">LOCATION</div>
                <div className="detail-value">Ramachandrapuram, Andhra Pradesh</div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/pilla-priyanka-63ab2a313"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail-card"
            >
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <div className="detail-label">LINKEDIN</div>
                <div className="detail-value">pilla-priyanka-63ab2a313</div>
              </div>
            </a>
          </div>
        </div>

        {/* Form side */}
        <div className="contact-form-wrap reveal">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">NAME <span>*</span></label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">EMAIL <span>*</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">SUBJECT</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Internship opportunity / Project collaboration / Other"
                value={form.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">MESSAGE <span>*</span></label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about the opportunity or project..."
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'idle' && (
                <>
                  <span>SEND MESSAGE</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </>
              )}
              {status === 'sending' && <span className="sending-dots">SENDING<span>.</span><span>.</span><span>.</span></span>}
              {status === 'sent' && <span>✓ MESSAGE SENT!</span>}
              {status === 'error' && <span>✗ TRY AGAIN</span>}
              <div className="submit-glow"></div>
            </button>

            {status === 'sent' && (
              <p className="form-success">Thanks for reaching out! I'll get back to you within 24 hours.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
