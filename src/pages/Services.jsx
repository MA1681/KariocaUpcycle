import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { GiSewingString } from 'react-icons/gi';
import Layout from "../components/Layout";
import { Link } from 'react-router-dom';

const servicesData = [
  {
    title: "Upcycle Workshops",
    description: "Join our upcycling workshops and create unique items.",
    icon: <GiSewingString />,
    link: "/services/workshops",
  },
  {
    title: "My Courses",
    description: "Explore our upcycling and sustainability courses to learn hands-on skills.",
    icon: "🎓",
    link: "/services/courses",
  },
  {
    title: "YouTube Channel",
    description: "Watch our tutorials and videos on how to create upcycled fashion.",
    icon: <FaYoutube className="text-4xl text-red-600" />,
    link: "https://www.youtube.com/@linyaraujo8177",
    isExternal: true
  },
];

const Services = () => {
  return (
    <Layout>
      <div className="services-container py-16 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 perspective-[1000px]">
          {servicesData.map((service, index) => {
            const CardContent = (
              <>
                <div className="icon text-5xl mb-6 text-blue-900 drop-shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-lg text-gray-600">{service.description}</p>
              </>
            );

            const cardClasses = `
              transform transition-transform duration-700 ease-in-out 
              hover:rotate-x-6 hover:-rotate-y-6 hover:scale-[1.07] 
              bg-gradient-to-br from-white to-blue-100 
              rounded-3xl shadow-2xl hover:shadow-blue-300/60 
              p-10 flex flex-col items-center text-center 
              border border-blue-100 hover:border-blue-300 
              hover:bg-blue-50
            `;

            return service.isExternal ? (
              <a
                key={index}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {CardContent}
              </a>
            ) : (
              <Link key={index} to={service.link} className={cardClasses}>
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
