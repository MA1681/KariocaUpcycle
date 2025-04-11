// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Workshops from "./pages/Workshops";
import Contact from "./pages/Contact";
import Contact1 from "./pages/Contact1";
import MyCourses from './pages/MyCourses';


import 'animate.css';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/workshops" element={<Workshops />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact1" element={<Contact1 />} />
        <Route path="/services/courses" element={<MyCourses />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
