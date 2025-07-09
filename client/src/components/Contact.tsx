import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'support@shortlink.com',
      link: 'mailto:support@shortlink.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 (555) 123-4567',
      link: 'tel:+91551234567'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Noida Sector 63 - 201301',
      link: 'https://g.co/kgs/dfPfywL'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Get in
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Touch
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have a question or need help? We'd love to hear from you. Send us a message 
          and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl shadow-blue-500/10 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
          
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feature">Feature Request</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl shadow-blue-500/10 p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <a 
                    href={info.link}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {info.details}
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* FAQ Section */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl shadow-blue-500/10 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How long do shortened URLs last?</h4>
                <p className="text-gray-600 text-sm">All shortened URLs are permanent unless you choose to delete them.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can I customize my short URLs?</h4>
                <p className="text-gray-600 text-sm">Yes! Pro users can create custom short URLs with their own domains.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Do you provide analytics?</h4>
                <p className="text-gray-600 text-sm">Absolutely! Get detailed analytics on clicks, locations, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;