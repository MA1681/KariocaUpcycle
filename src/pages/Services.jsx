import React from 'react';
import { FaYoutube, FaNewspaper } from 'react-icons/fa';
import { GiSewingMachine, GiSewingString } from 'react-icons/gi';
import Layout from "../components/Layout"; // Make sure to import your Layout component
import { Link } from 'react-router-dom'; // Ensure you import Link

// Updated servicesData array with icons for YouTube and Newspaper
const servicesData = [
  {
    title: "Sustainable Fashion",
    description: "Learn how to create fashion pieces with sustainable materials.",
    icon: "♻️", // You can replace with any icon or image
    link: "/services/sustainable-fashion",
  },
  {
    title: "Upcycle Workshops",
    description: "Join our upcycling workshops and create unique items.",
    icon: <GiSewingString />, // You can replace with any icon or image
    link: "/services/workshops",
  },
  {
    title: "Eco Consulting",
    description: "Get advice on making your business more sustainable.",
    icon: "🌿",
    link: "/services/eco-consulting", // You can replace with any icon or image
  },
  // New cards for "My Courses", "News", "YouTube Channel"
  {
    title: "My Courses",
    description: "Explore our upcycling and sustainability courses to learn hands-on skills.",
    icon: "🎓",
    link: "/services/courses", // Icon for courses
  },
  {
    title: "News",
    description: "Stay updated with the latest news on upcycling and sustainability trends.",
    icon: <FaNewspaper className="text-4xl text-green-700" />,
    link: "/services/news", // Icon for news
  },
  {
    title: "YouTube Channel",
    description: "Watch our tutorials and videos on how to create upcycled fashion.",
    icon: <FaYoutube className="text-4xl text-red-600" />,
    link: "https://www.youtube.com/@linyaraujo8177", // Update with your YouTube channel URL
    isExternal: true // Added flag to identify external link
  },
  {
    title: "Products",
    description: "Exclusive collection of upcycled fashion and sustainable accessories.",
    icon: <GiSewingMachine />,
    link: "/services/Products",
  },
  {
    title: "New Service 2",
    description: "Placeholder description for the second new service.",
    icon: "💡",
    link: "/services/new-service-2", // Placeholder icon
  },
];

const Services = () => {
  return (
    <Layout> 
      <div className="services-container py-10 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            service.isExternal ? (
              <a
                key={index}
                href={service.link}
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security reason for opening in a new tab
                className="service-card transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6 bg-white rounded-lg shadow-lg hover:bg-green-100"
              >
                <div className="icon text-4xl text-green-700 mb-4">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </a>
            ) : (
              <Link
                key={index}
                to={service.link} // Internal link handling
                className="service-card transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6 bg-white rounded-lg shadow-lg hover:bg-green-100"
              >
                <div className="icon text-4xl text-green-700 mb-4">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </Link>
            )
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
