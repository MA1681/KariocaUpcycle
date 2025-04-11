import React from 'react';
import { FaYoutube, FaNewspaper } from 'react-icons/fa';
import { GiSewingMachine, GiSewingString } from 'react-icons/gi';
import Layout from "../components/Layout"; 
import { Link } from 'react-router-dom'; 

const servicesData = [
  {
    title: "Sustainable Fashion",
    description: "Learn how to create fashion pieces with sustainable materials.",
    icon: "♻️", 
    link: "/services/sustainable-fashion",
  },
  {
    title: "Upcycle Workshops",
    description: "Join our upcycling workshops and create unique items.",
    icon: <GiSewingString />,
    link: "/services/workshops",
  },
  {
    title: "Eco Consulting",
    description: "Get advice on making your business more sustainable.",
    icon: "🌿",
    link: "/services/eco-consulting",
  },
  {
    title: "My Courses",
    description: "Explore our upcycling and sustainability courses to learn hands-on skills.",
    icon: "🎓",
    link: "/services/courses", 
  },
  {
    title: "News",
    description: "Stay updated with the latest news on upcycling and sustainability trends.",
    icon: <FaNewspaper className="text-4xl text-green-700" />,
    link: "/services/news", 
  },
  {
    title: "YouTube Channel",
    description: "Watch our tutorials and videos on how to create upcycled fashion.",
    icon: <FaYoutube className="text-4xl text-red-600" />,
    link: "https://www.youtube.com/@linyaraujo8177", 
    isExternal: true 
  },
  {
    title: "Products",
    description: "Exclusive collection of upcycled fashion and sustainable accessories.",
    icon: <GiSewingMachine />,
    link: "/services/Products",
  },
];

const Services = () => {
  return (
    <Layout>
      <div className="services-container py-16 px-6 md:px-12">
        <h2 className="text-5xl font-bold text-center text-green-800 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            service.isExternal ? (
              <a
                key={index}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="service-card transform transition-all duration-300 hover:scale-105 hover:shadow-xl p-8 bg-white rounded-xl shadow-lg hover:bg-green-50 flex flex-col items-center text-center"
              >
                <div className="icon text-5xl mb-6 text-green-700">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-lg text-gray-600">{service.description}</p>
              </a>
            ) : (
              <Link
                key={index}
                to={service.link}
                className="service-card transform transition-all duration-300 hover:scale-105 hover:shadow-xl p-8 bg-white rounded-xl shadow-lg hover:bg-green-50 flex flex-col items-center text-center"
              >
                <div className="icon text-5xl mb-6 text-green-700">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-lg text-gray-600">{service.description}</p>
              </Link>
            )
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
