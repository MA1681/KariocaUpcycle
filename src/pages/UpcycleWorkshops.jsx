import React from 'react';
import Layout from "../components/Layout"; // Import your Layout component

// Workshops data array with details about the workshops
const workshopsData = [
  {
    title: "Recycled Fashion Workshop",
    description: "Learn how to create fashionable items from recycled materials.",
    icon: "♻️",
  },
  {
    title: "Furniture Restoration Workshop",
    description: "Give old furniture a new life with upcycling techniques.",
    icon: "🪑",
  },
  {
    title: "Eco-friendly Art Workshop",
    description: "Create beautiful art pieces from upcycled materials.",
    icon: "🎨",
  },
  // Add more workshops as necessary
];

const UpcycleWorkshops = () => {
  return (
    <Layout>
      <div className="workshops-container py-10 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Our Upcycle Workshops</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshopsData.map((workshop, index) => (
            <div
              key={index}
              className="workshop-card transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6 bg-white rounded-lg shadow-lg hover:bg-green-100"
            >
              <div className="icon text-4xl text-green-700 mb-4">
                {/* You can use a different icon if needed */}
                <span>{workshop.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">{workshop.title}</h3>
              <p className="text-gray-600 mt-2">{workshop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default UpcycleWorkshops;
