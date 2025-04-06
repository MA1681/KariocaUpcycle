// pages/Workshops.jsx
import React from "react";
import Layout from "../components/Layout"; // Assuming you have a Layout component for common structure

const Workshops = () => {
  return (
    <Layout>
      <div className="workshops-container py-10 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Upcycle Workshops</h2>
        
        <p className="text-xl text-gray-700 mb-6">
          Join us for hands-on upcycling workshops where you can learn how to transform used materials into something new and beautiful. Our workshops are designed for all skill levels and are perfect for anyone interested in sustainable fashion and DIY projects.
        </p>
        
        <div className="workshops-details grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="workshop-item p-6 bg-white rounded-lg shadow-lg hover:bg-green-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Beginner Workshop</h3>
            <p className="text-gray-600 mb-4">
              This workshop is for beginners who are new to upcycling. Learn the basics of transforming old clothes into new, stylish pieces.
            </p>
            <p className="text-gray-600">Duration: 2 Hours</p>
            <button className="mt-4 text-white bg-green-700 hover:bg-green-600 py-2 px-4 rounded">
              Book Now
            </button>
          </div>

          <div className="workshop-item p-6 bg-white rounded-lg shadow-lg hover:bg-green-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Advanced Workshop</h3>
            <p className="text-gray-600 mb-4">
              If you have experience with upcycling, this workshop will take your skills to the next level. Explore advanced techniques for transforming materials.
            </p>
            <p className="text-gray-600">Duration: 3 Hours</p>
            <button className="mt-4 text-white bg-green-700 hover:bg-green-600 py-2 px-4 rounded">
              Book Now
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl text-gray-700 mb-6">
            If you're interested in creating unique upcycled fashion or just want to try something new, our workshops are the perfect place for you!
          </p>
          <button className="text-white bg-green-700 hover:bg-green-600 py-2 px-4 rounded">
            View All Workshops
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Workshops;
