// pages/LandingPage.jsx
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/home";
    }, 5000); // Redirects after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-container relative overflow-hidden">
      <div className="bg-gradient-to-br from-green-400 to-green-800 h-full w-full absolute top-0 left-0 z-0" />
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
        <img
          src="https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413_1280.jpg"
          alt="Sustainable Upcycling"
          className="parallax-image w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center h-screen text-center relative z-20">
        <h1 className="text-6xl text-white font-extrabold leading-tight animate-tilt">
          Welcome to Karioca Upcycling World
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
