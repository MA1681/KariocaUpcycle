import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout"; // Adjust path if necessary

const Workshops = () => {
  const navigate = useNavigate();

  // Redirect to Contact1 page with workshop type
  const handleWorkshopClick = (workshopType) => {
    navigate("/contact1", { state: { workshop: workshopType } });
  };

  return (
    <Layout>
      <div className="workshops-container py-16 px-6 md:px-12 bg-gradient-to-r from-green-200 via-green-100 to-white">
        <h2 className="text-5xl font-semibold text-center text-green-700 mb-12">Upcycle Workshops</h2>

        <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto">
          Join us for hands-on upcycling workshops where you can learn how to transform used materials into something new and beautiful. Our workshops are designed for all skill levels and are perfect for anyone interested in sustainable fashion and DIY projects.
        </p>

        {/* Workshop Details */}
        <div className="workshops-details grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Beginner Workshop */}
          <div className="workshop-item bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-green-50 transform hover:scale-105 flex flex-col">
            <div className="relative flex-1">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Beginner Workshop"
                className="w-full h-40 object-cover rounded-2xl mb-6"
              />
              <div className="absolute top-4 left-4 bg-green-700 text-white px-6 py-2 text-xs font-bold uppercase rounded-full shadow-lg">
                New
              </div>
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Beginner Workshop</h3>
            <p className="text-gray-600 mb-4">
              This workshop is for beginners who are new to upcycling. Learn the basics of transforming old clothes into new, stylish pieces.
            </p>
            <p className="text-gray-600">Duration: 2 Hours</p>
            <button
              className="mt-6 w-full py-3 px-6 bg-green-700 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => handleWorkshopClick("Beginner")}
            >
              Book Now
            </button>
          </div>

          {/* Advanced Workshop */}
          <div className="workshop-item bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-green-50 transform hover:scale-105 flex flex-col">
            <div className="relative flex-1">
              <img
                src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Advanced Workshop"
                className="w-full h-40 object-cover rounded-2xl mb-6"
              />
              <div className="absolute top-4 left-4 bg-green-700 text-white px-6 py-2 text-xs font-bold uppercase rounded-full shadow-lg">
                Advanced
              </div>
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Advanced Workshop</h3>
            <p className="text-gray-600 mb-4">
              If you have experience with upcycling, this workshop will take your skills to the next level.
            </p>
            <p className="text-gray-600">Duration: 3 Hours</p>
            <button
              className="mt-6 w-full py-3 px-6 bg-green-700 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => handleWorkshopClick("Advanced")}
            >
              Book Now
            </button>
          </div>

          {/* Custom Workshop (New) */}
          <div className="workshop-item bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-green-50 transform hover:scale-105 flex flex-col">
            <div className="relative flex-1">
              <img
                src="https://media.istockphoto.com/id/467905319/pt/foto/os-alunos.jpg?s=1024x1024&w=is&k=20&c=8DeV0Yp-4oSEznINpCWrUxZdGnc1UOqOHES22Gp1_sU="
                alt="Custom Workshop"
                className="w-full h-40 object-cover rounded-2xl mb-6"
              />
              <div className="absolute top-4 left-4 bg-green-700 text-white px-6 py-2 text-xs font-bold uppercase rounded-full shadow-lg">
                Custom
              </div>
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Custom Workshop</h3>
            <p className="text-gray-600 mb-4">
              Have specific projects in mind? Book a custom workshop tailored to your needs. Create unique pieces with the help of our experts.
            </p>
            <p className="text-gray-600">Duration: Flexible</p>
            <button
              className="mt-6 w-full py-3 px-6 bg-green-700 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => handleWorkshopClick("Custom")}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Workshops;
