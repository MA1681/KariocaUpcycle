// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import UpcycleWorkshops from './pages/UpcycleWorkshops';
import Contact from "./pages/Contact";


import 'animate.css';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/upcycle-workshops" element={<UpcycleWorkshops />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
