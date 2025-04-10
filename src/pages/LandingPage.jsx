// pages/LandingPage.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const LandingPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/home";
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-container relative overflow-hidden h-screen">
      {/* Background Gradient Layer */}
      <div className="bg-gradient-to-br from-green-400 to-green-800 h-full w-full absolute top-0 left-0 z-0" />

      {/* Background Image */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 opacity-60">
        <img
          src="https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413_1280.jpg"
          alt="Sustainable Upcycling"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content with Animation */}
      <div className="flex items-center justify-center h-screen text-center relative z-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl text-white font-extrabold leading-tight">
            <Typewriter
              words={[
                "Welcome to Karioca Upcycling World",
                "Sustainable. Creative. Unique.",
                "Transforming the Old into Gold 💚"
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
