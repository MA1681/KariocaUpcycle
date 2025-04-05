import { useState } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'; // Import the WhatsApp and Instagram icons from react-icons
import Layout from "../components/Layout"; // Make sure Layout is imported from the correct path

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace YOUR_FORM_ID with your Formspree form ID
    fetch('https://formspree.io/f/xblgzvdl', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          setStatus('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } else {
          setStatus('Failed to send the message. Please try again later.');
        }
      })
      .catch((error) => {
        setStatus('Error: ' + error.message);
      });
  };

  return (
    <Layout>
      <section className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-4 text-center">Contact Us</h2>
        
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/YOUR_FORM_ID" // Formspree action URL
          method="POST"
          className="space-y-4 bg-white p-6 shadow-xl rounded-xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </form>

        {/* Status message */}
        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}

        {/* Contact via other methods */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us Via</h3>

          {/* Phone contact */}
          <div className="mb-4">
            <p className="text-lg">
              📞 Call us: <a href="tel:+351912202005" className="text-green-700 hover:text-green-800">+351912202005</a>
            </p>
          </div>

          {/* WhatsApp contact */}
          <div className="mb-4">
            <p className="text-lg flex items-center justify-center">
              <FaWhatsapp className="mr-2 text-2xl text-green-700" />
              <a href="https://wa.me/+351912202005" className="text-green-700 hover:text-green-800" target="_blank" rel="noopener noreferrer">
                Chat with us on WhatsApp
              </a>
            </p>
          </div>

          {/* Instagram contact */}
          <div className="mb-4">
            <p className="text-lg flex items-center justify-center">
              <FaInstagram className="mr-2 text-2xl text-purple-600" />
              <a href="https://instagram.com/michelamiri" className="text-green-700 hover:text-green-800" target="_blank" rel="noopener noreferrer">
                Follow us on Instagram
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
