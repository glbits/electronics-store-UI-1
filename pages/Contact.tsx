import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') || '';
  const initialSku = searchParams.get('sku') || '';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialProduct ? `Enquiry: ${initialProduct} (${initialSku})` : '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! This is a demo form. In a real deployment, this would trigger a Netlify Form submission.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const faqs = [
    { q: "Do you offer bulk discounts?", a: "Yes, we offer competitive pricing for bulk orders from contractors and businesses. Please contact us for a quote." },
    { q: "What is your return policy?", a: "We accept returns for defective items within 7 days of purchase. Items must be in original packaging." },
    { q: "Do you provide installation services?", a: "We can recommend certified electricians, but we do not provide direct installation services." },
  ];

  return (
    <>
      <SEO title="Contact Us | ElectroMart" description="Get in touch for enquiries, bulk orders, or support." />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
              <p className="text-gray-600">Have questions about a product? Need a quote? Fill out the form below.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">
              <div className="p-8 md:p-12 w-full md:w-2/3">
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6" 
                  name="contact" 
                  method="post" 
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        className="w-full rounded-lg border-gray-300 focus:ring-brand-blue focus:border-brand-blue"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        className="w-full rounded-lg border-gray-300 focus:ring-brand-blue focus:border-brand-blue"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject"
                      required
                      className="w-full rounded-lg border-gray-300 focus:ring-brand-blue focus:border-brand-blue"
                      value={formData.subject}
                      onChange={e => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message"
                      rows={5}
                      required
                      className="w-full rounded-lg border-gray-300 focus:ring-brand-blue focus:border-brand-blue"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="bg-brand-blue text-white p-8 md:p-12 w-full md:w-1/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-6">Contact Info</h3>
                  <div className="space-y-4 text-blue-100">
                    <p>123 Market Street, Tech City</p>
                    <p>+91 98765 43210</p>
                    <p>info@electromart.com</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-bold mb-2">Business Hours</h4>
                  <p className="text-sm text-blue-100">Mon - Sat: 9am - 8pm<br/>Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-20 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

const FAQItem: React.FC<{question: string, answer: string}> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-900 hover:bg-gray-50"
      >
        {question}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-gray-600 text-sm border-t border-gray-100">
          {answer}
        </div>
      )}
    </div>
  );
};