import React, { useState } from "react";
import Layout from "../components/Layout"; // Assuming you have a Layout component for common structure

const Workshops = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    workshop: "", // New field to differentiate workshops
  });

  // State for toggling form visibility
  const [showForm, setShowForm] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here we submit the form to Formspree
    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/{xblgzvdl}", { // Replace with your Formspree endpoint URL
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Thank you for registering. We will contact you soon!");
        setShowForm(false); // Hide the form after submission
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  // Handle button click to set workshop type
  const handleWorkshopClick = (workshopType) => {
    setFormData({ ...formData, workshop: workshopType }); // Set workshop type (Beginner or Advanced)
    setShowForm(true); // Show the form
  };

  return (
    <Layout>
      <div className="workshops-container py-10 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Upcycle Workshops</h2>

        <p className="text-xl text-gray-700 mb-6">
          Join us for hands-on upcycling workshops where you can learn how to transform used materials into something new and beautiful. Our workshops are designed for all skill levels and are perfect for anyone interested in sustainable fashion and DIY projects.
        </p>

        {/* Workshop Details */}
        <div className="workshops-details grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="workshop-item p-6 bg-white rounded-lg shadow-lg hover:bg-green-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Beginner Workshop</h3>
            <p className="text-gray-600 mb-4">
              This workshop is for beginners who are new to upcycling. Learn the basics of transforming old clothes into new, stylish pieces.
            </p>
            <p className="text-gray-600">Duration: 2 Hours</p>
            <button
              className="mt-4 text-white bg-green-700 hover:bg-green-600 py-2 px-4 rounded"
              onClick={() => handleWorkshopClick("Beginner")} // Set workshop to "Beginner"
            >
              Book Now
            </button>
          </div>

          <div className="workshop-item p-6 bg-white rounded-lg shadow-lg hover:bg-green-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Advanced Workshop</h3>
            <p className="text-gray-600 mb-4">
              If you have experience with upcycling, this workshop will take your skills to the next level. Explore advanced techniques for transforming materials.
            </p>
            <p className="text-gray-600">Duration: 3 Hours</p>
            <button
              className="mt-4 text-white bg-green-700 hover:bg-green-600 py-2 px-4 rounded"
              onClick={() => handleWorkshopClick("Advanced")} // Set workshop to "Advanced"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Conditional Rendering: Show the form only if showForm is true */}
        {showForm && (
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Register for a Workshop</h3>
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Hidden input to send workshop type to Formspree */}
              <input
                type="hidden"
                name="workshop"
                value={formData.workshop} // Send the workshop type (Beginner or Advanced)
              />

              <button
                type="submit"
                className="text-white bg-green-700 hover:bg-green-600 py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Workshops;
