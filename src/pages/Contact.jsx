import { useState, useEffect } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Layout from "../components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [showStatus, setShowStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://formspree.io/f/xblgzvdl', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          setStatus('✅ Message sent successfully! We will contact you soon.');
          setShowStatus(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('❌ Failed to send the message. Please try again later.');
          setShowStatus(true);
        }
      })
      .catch((error) => {
        setStatus('❌ Error: ' + error.message);
        setShowStatus(true);
      });
  };

  useEffect(() => {
    if (showStatus) {
      const timer = setTimeout(() => setShowStatus(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showStatus]);

  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">Contact Us</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 shadow-2xl rounded-2xl border border-blue-100"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Contact via other methods */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Contact Us Via</h3>

          <p className="text-lg mb-3">
            📞 Call us: <a href="tel:+351912202005" className="text-blue-900 hover:underline">+351 912 202 005</a>
          </p>

          <p className="text-lg flex items-center justify-center mb-3">
            <FaWhatsapp className="mr-2 text-2xl text-green-600" />
            <a
              href="https://wa.me/+351912202005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-green-700 transition"
            >
              Chat with us on WhatsApp
            </a>
          </p>

          <p className="text-lg flex items-center justify-center">
            <FaInstagram className="mr-2 text-2xl text-pink-500" />
            <a
              href="https://instagram.com/michelamiri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-pink-600 transition"
            >
              Follow us on Instagram
            </a>
          </p>
        </div>

        {/* Success/Error Message */}
        {showStatus && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className={`max-w-md w-full mx-4 px-6 py-4 text-center text-lg font-medium rounded-xl shadow-xl border animate-fade-in transition-all duration-500
                ${
                  status.includes('successfully')
                    ? 'bg-gradient-to-r from-blue-100 to-blue-50 text-blue-900 border-blue-300'
                    : 'bg-red-100 text-red-800 border-red-300'
                }`}
            >
              {status}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Contact;
