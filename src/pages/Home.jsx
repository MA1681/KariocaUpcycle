import React from 'react';
import Slider from 'react-slick';
import Ticker from '../components/Ticker';
import Layout from "../components/Layout";
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const fallbackImg = "https://via.placeholder.com/1024x600.png?text=Image+Unavailable";

const Home = () => {
  const backgroundMusic = "https://www.bensound.com/bensound-music/bensound-sunny.mp3";

  const carouselImages = [
    "https://shoprestatement.com/wp-content/uploads/2022/06/mending-clothes-how-mend-old-clothes-sustainable-fashion-denim-upcycling-ideas-using-old-jeans_72482-3665.jpeg",
    "https://greensuggest.com/wp-content/uploads/2024/03/upcycling-jeans.webp",
    "https://tulipcolor.com/cdn/shop/articles/0017330_painted-denim-clothing-upcycle-idea_850_1ab36cef-c7f8-4799-8613-da02b7ef5680.webp?v=1737216788",
    "https://images.squarespace-cdn.com/content/v1/60f73950948ccc6cfa1dc5a4/1654802212655-HB12IZCH5PPKKM4YMK6O/shortsphoto-3.jpg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true
  };

  const handleImgError = (e) => {
    e.target.src = fallbackImg;
  };

  return (
    <Layout>
      <div className="relative z-10 overflow-x-hidden">

        {/* 🎵 Music Player */}
        <audio controls loop autoPlay className="fixed bottom-4 right-4 z-50 opacity-80 shadow-lg rounded-lg">
          <source src={backgroundMusic} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        <Ticker />

        {/* Hero Section */}
        <section className="w-full py-24 bg-white bg-opacity-50 rounded-none shadow-md mt-20">
          <div className="text-center max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
            <h2 className="text-5xl font-playfair text-blue-900 font-semibold">Revive, Reuse, Reimagine</h2>
            <p className="text-xl font-poppins text-blue-800 max-w-3xl mx-auto">
              Join us in transforming waste into beautiful, functional items. Sustainability starts with a choice — choose upcycling!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
              {[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSMpIr4FYHsKGc-S2bgqhq0qQCUCel0kOtg&s", 
                "https://fashinnovation.nyc/wp-content/uploads/2023/11/Upcycled-Denim-961x1024.png",
                "https://i.etsystatic.com/6399006/r/il/1af316/1242694717/il_570xN.1242694717_tutv.jpg"
              ].map((img, i) => (
                <div key={i} className="h-[40vh] lg:h-[50vh] rounded-xl overflow-hidden shadow-xl group">
                  <img
                    src={img}
                    onError={handleImgError}
                    alt={`Upcycle ${i}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <motion.section
          className="w-full py-24 bg-white bg-opacity-80 shadow-md mt-24"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="text-5xl font-playfair text-center text-blue-900 mb-20">Our Beautiful Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
              {[
                "https://www.camelactive.com/media/88/11/12/1689074387/camelactive-blog-denim-box-upcycling-04.webp",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8T6vk5ilQJfXYSTSwooETp7bLeFGTsWZ7A&s",
                "https://www.heatherhandmade.com/wp-content/uploads/2020/04/upcycle-jeans-tote-bag-22.jpg"
              ].map((img, i) => (
                <motion.div
                  key={i}
                  className="h-[40vh] lg:h-[50vh] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.9, rotate: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.3,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: false }}
                >
                  <img
                    src={img}
                    onError={handleImgError}
                    alt={`Product ${i}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Carousel Section */}
        <section className="w-full py-24 bg-white bg-opacity-60 shadow-md mt-40">
          <h2 className="text-5xl font-playfair text-center text-blue-900 mb-16">Upcycle Projects</h2>
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <Slider {...settings}>
              {carouselImages.map((image, index) => (
                <div key={index} className="w-full h-[40vh] lg:h-[50vh] overflow-hidden rounded-xl">
                  <img
                    src={image}
                    onError={handleImgError}
                    alt={`Carousel ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
