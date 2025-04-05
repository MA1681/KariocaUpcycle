import React from 'react';
import Slider from 'react-slick';
import Layout from "../components/Layout";

// Add the slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const carouselImages = [
    "https://media.istockphoto.com/id/1215739645/pt/foto/mother-in-law-teaching-daughter-in-law-how-to-use-sewing-machine.jpg?s=1024x1024&w=is&k=20&c=fHwC6lTRXMpKKTet0u8HRkhPh4JJyxt7Tf-1ZfPhDFo=",
    "https://media.istockphoto.com/id/1353427281/pt/foto/denim-upcycling-ideas-using-old-jeans-repurposing-jeans-reusing-old-jeans-upcycle-stuff.jpg?s=1024x1024&w=is&k=20&c=9mIoy8uQwUXaIUUzX6tMJ30fMX05kl5E8x3AB-lx3ro=",
    "https://media.istockphoto.com/id/486751924/pt/foto/jeans-saco-de.jpg?s=1024x1024&w=is&k=20&c=fG5Rc0yt16mFPFpGSyiSt20hg45XL1Clmo0X6DQP9ME=",
    "https://media.istockphoto.com/id/1284347843/pt/foto/young-woman-making-tie-dye-at-living-room.jpg?s=1024x1024&w=is&k=20&c=Hxpd0g_QF-1q8Zy1hAEmyOT9pBZ3BhkKETmjYC1PLB4="
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Layout>
      {/* Existing Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-6 py-16 space-y-6">
  <h2 className="text-4xl font-bold text-green-800">Revive, Reuse, Reimagine</h2>
  <p className="text-xl text-gray-700 leading-relaxed">
    Join us in transforming waste into beautiful, functional items. Sustainability starts with a choice — choose upcycling!
  </p>
  
  {/* New Section with Two Stylish Images in a Row */}
  <div className="flex justify-between gap-6 mt-6">
    <div className="flex-1 rounded-2xl shadow-lg overflow-hidden relative group">
      <img
        src="https://media.istockphoto.com/id/2205895433/pt/foto/smiling-woman-holding-recyclable-items-in-a-cardboard-box-for-eco-reuse.jpg?s=612x612&w=0&k=20&c=LOZ7aphbhMAfEDT-5oc9ETyXfY59PwyNmXbpN9Z7KTg="
        alt="Upcycling"
        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-in-out transform group-hover:scale-110"
      />
    </div>
    
    <div className="flex-1 rounded-2xl shadow-lg overflow-hidden relative group">
      <img
        src="https://media.istockphoto.com/id/1316029561/pt/foto/old-jeans-upcycling-idea-crafting-with-denim-recycling-old-clothers-hobby-diy-activity.jpg?s=2048x2048&w=is&k=20&c=AXOd-T6UfzrZE_9TmFT7vunhPGkdBFVxBizUN91eVRE="
        alt="Upcycled Craft Projects"
        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-in-out transform group-hover:scale-110"
      />
    </div>
  </div>
</section>


{/* Space for Future Photos */}
<section className="photo-placeholder py-20 px-6 md:px-12 bg-gray-100">
  <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Our Beautiful Products</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* Updated Images with Smooth Zoom Effect */}
    <div className="image-container bg-white h-64 flex justify-center items-center rounded-xl shadow-lg border border-gray-300 relative overflow-hidden group">
      <img
        src="https://media.istockphoto.com/id/1316029561/pt/foto/old-jeans-upcycling-idea-crafting-with-denim-recycling-old-clothers-hobby-diy-activity.jpg?s=2048x2048&w=is&k=20&c=AXOd-T6UfzrZE_9TmFT7vunhPGkdBFVxBizUN91eVRE="
        alt="Upcycled Craft Projects"
        className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
      />
    </div>
    <div className="image-container bg-white h-64 flex justify-center items-center rounded-xl shadow-lg border border-gray-300 relative overflow-hidden group">
      <img
        src="https://media.istockphoto.com/id/2184926415/pt/foto/circular-fashion-movement.jpg?s=2048x2048&w=is&k=20&c=FBBcXl5uBhWYcgXz0E59kNfb_7YE1YpOK_LFvMwO9ms="
        alt="Upcycled Clothing"
        className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
      />
    </div>
    <div className="image-container bg-white h-64 flex justify-center items-center rounded-xl shadow-lg border border-gray-300 relative overflow-hidden group">
      <img
        src="https://media.istockphoto.com/id/1284347843/pt/foto/young-woman-making-tie-dye-at-living-room.jpg?s=2048x2048&w=is&k=20&c=m5nRDzD4qK0ZZJ1EuhX7HQkiYEocQPab1CjQOgn1f24="
        alt="Upcycled Glass Bottles"
        className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
      />
    </div>
  </div>
</section>





      {/* Active Carousel Section with Upcycling Photos */}
      <section className="carousel-placeholder py-20 px-6 md:px-12 bg-white">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Upcycle Projects</h2>
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index} className="carousel-item">
              <img
                src={image}
                alt={`Upcycling Project ${index + 1}`}
                className="w-full object-cover rounded-xl"
                style={{
                  objectFit: "cover",
                  maxHeight: "500px", // Limit height for large screens
                  minHeight: "300px", // Min height for smaller screens
                  height: "auto", // Allow the image to scale naturally on all screens
                }}
              />
            </div>
          ))}
        </Slider>
      </section>
    </Layout>
  );
};

export default Home;
