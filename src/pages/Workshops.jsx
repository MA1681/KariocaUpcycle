import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout"; // Adjust path if necessary

const Workshops = () => {
  const navigate = useNavigate();

  const handleWorkshopClick = (workshopType) => {
    navigate("/contact1", { state: { workshop: workshopType } });
  };

  return (
    <Layout>
      <div className="workshops-container py-16 px-6 md:px-12 bg-gradient-to-r from-blue-200 via-blue-100 to-white">
        <h2 className="text-5xl font-semibold text-center text-blue-900 mb-12">
          Upcycle Workshops
        </h2>

        <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto">
          Join us for hands-on upcycling workshops where you can learn how to transform used materials into something new and beautiful.
        </p>

        {/* Workshops Grid */}
        <div className="workshops-details grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {/* Workshop Card Component */}
          {[
            {
              title: "Beginner Workshop",
              description:
                "This workshop is for beginners who are new to upcycling. Learn the basics of transforming old clothes into new, stylish pieces.",
              duration: "2 Hours",
              badge: "New",
              image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              type: "Beginner",
            },
            {
              title: "Advanced Workshop",
              description:
                "If you have experience with upcycling, this workshop will take your skills to the next level.",
              duration: "3 Hours",
              badge: "Advanced",
              image:
                "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              type: "Advanced",
            },
            {
              title: "Custom Workshop",
              description:
                "Have specific projects in mind? Book a custom workshop tailored to your needs. Create unique pieces with the help of our experts.",
              duration: "Flexible",
              badge: "Custom",
              image:
                "https://media.istockphoto.com/id/467905319/pt/foto/os-alunos.jpg?s=1024x1024&w=is&k=20&c=8DeV0Yp-4oSEznINpCWrUxZdGnc1UOqOHES22Gp1_sU=",
              type: "Custom",
            },
            
          ].map((workshop, idx) => (
            <div
              key={idx}
              className="workshop-item bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-blue-50 transform hover:scale-105 flex flex-col justify-between h-full"
            >
              <div className="relative">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-40 object-cover rounded-2xl mb-6"
                />
                <div className="absolute top-4 left-4 bg-blue-900 text-white px-6 py-2 text-xs font-bold uppercase rounded-full shadow-lg">
                  {workshop.badge}
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  {workshop.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1">{workshop.description}</p>
                <p className="text-gray-600 mb-4">Duration: {workshop.duration}</p>
              </div>

              <button
                className="mt-4 w-full py-3 px-6 bg-blue-900 hover:bg-blue-600 text-white font-bold rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleWorkshopClick(workshop.type)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Workshops;
