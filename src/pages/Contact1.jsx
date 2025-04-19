import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import Layout from "../components/Layout";
import "animate.css";

const Contact = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate function
  const workshopType = location.state?.workshop || "Workshop";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    workshop: workshopType,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);  // New state for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formspree.io/f/xblgzvdl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);  // Trigger success message
          setTimeout(() => {
            setIsSubmitted(false);  // Reset after 5 seconds
          }, 5000);
        } else {
          response.text().then((text) => {
            console.error("Error response:", text);
          });
          alert("There was an issue. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("Something went wrong.");
      });
  };

  return (
    <Layout>
      <div className="py-10 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Register for {workshopType} Workshop
        </h2>

        {isSubmitted && (
          <div className="text-center mb-4 p-4 bg-blue-100 text-blue-700 border border-blue-300 rounded-lg animate__animated animate__fadeIn">
            <h3 className="text-xl font-semibold">Thank you for your registration!</h3>
            <p>We will contact you soon.</p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-blue-900">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-blue-900 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-blue-900">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-blue-900 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-blue-900">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-blue-900 rounded"
              required
            />
          </div>

          <input type="hidden" name="workshop" value={workshopType} />

          <button
            type="submit"
            className="text-white bg-blue-900 hover:bg-blue-500 py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>

        {/* Back Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate(-1)} // Go back to the previous page
            className="text-blue-900 hover:text-blue-600 py-2 px-4 border border-blue-900 rounded"
          >
            Back
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
