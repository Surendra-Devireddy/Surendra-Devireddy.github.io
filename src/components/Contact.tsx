import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-white dark:bg-slate-900">
      <div className="container mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Contact Information</h3>
              
              <div className="skill-card p-5 flex items-start">
                <Mail className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-slate-800 dark:text-white mb-1">Email</h4>
                  <a href="devireddysurendra99@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    devireddysurendra99@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="skill-card p-5 flex items-start">
                <Phone className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-slate-800 dark:text-white mb-1">Phone</h4>
                  <a href="tel:+15135492656" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +1 (513)-549-2656
                  </a>
                </div>
              </div>
              
              <div className="skill-card p-5 flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-slate-800 dark:text-white mb-1">Location</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                   Cincinnati, OH, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">Send a Message</h3>
              
              {submitted ? (
                <div className="bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p>Thank you! Your message has been sent successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-700 text-slate-800 dark:text-white resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;