import React from "react";
import Layout from "../components/Layout";

const courses = [
  {
    title: "Upcycle Jeans Tutorial",
    link: "https://www.youtube.com/watch?v=KS_OIQA8-ro",
    preview: "https://img.youtube.com/vi/KS_OIQA8-ro/hqdefault.jpg",
    video: "https://your-website.com/preview-video/upcycle-jeans-tutorial.mp4" // Replace with actual .mp4 video URL
  },
  {
    title: "Create a Denim Bag",
    link: "https://www.youtube.com/watch?v=X60Z6tRT5Co",
    preview: "https://img.youtube.com/vi/X60Z6tRT5Co/hqdefault.jpg",
    video: "https://your-website.com/preview-video/denim-bag.mp4" // Replace with actual .mp4 video URL
  },
  {
    title: "Old Shirt to Trendy Top",
    link: "https://www.youtube.com/watch?v=kPv5A1U3aqA",
    preview: "https://www.youtube.com/watch?v=kPv5A1U3aqA",
    video: "https://your-website.com/preview-video/old-shirt-to-trendy-top.mp4" // Replace with actual .mp4 video URL
  },
  {
    title: "Upcycled Fashion Tips",
    link: "https://www.youtube.com/watch?v=ivxl_-LWyss&t=9s",
    preview: "https://www.youtube.com/watch?v=ivxl_-LWyss&t=9s",
    video: "https://your-website.com/preview-video/upcycled-fashion-tips.mp4" // Replace with actual .mp4 video URL
  },
  {
    title: "DIY Denim Accessories",
    link: "https://www.youtube.com/watch?v=sATDMeVtZsI",
    preview: "https://www.youtube.com/watch?v=sATDMeVtZsI",
    video: "https://your-website.com/preview-video/diy-denim-accessories.mp4" // Replace with actual .mp4 video URL
  },
  {
    title: "From Trash to Trend",
    link: "https://www.youtube.com/watch?v=Wwji8EpKO8s",
    preview: "https://www.youtube.com/watch?v=Wwji8EpKO8s",
    video: "https://your-website.com/preview-video/from-trash-to-trend.mp4" // Replace with actual .mp4 video URL
  }
];

const MyCourses = () => {
  return (
    <Layout>
      <div className="py-12 px-6 md:px-12 bg-green-50 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-12">
          My Upcycling Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <a
              key={idx}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 bg-white"
            >
              {/* Thumbnail */}
              <img
                src={course.preview}
                alt={course.title}
                className="w-full h-60 object-cover group-hover:opacity-0 transition-all duration-500 ease-in-out"
              />
              {/* Video Preview on Hover */}
              <video
                src={course.video}
                muted
                loop
                playsInline
                className="w-full h-60 object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
              />
              {/* Title Overlay */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-green-800/80 to-transparent p-4 text-white text-lg font-semibold group-hover:bg-green-900/90 transition-colors duration-300 z-10">
                <h2 className="text-lg font-semibold">{course.title}</h2>
              </div>
              {/* Hover Shadow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MyCourses;
