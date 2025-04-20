import React from 'react';
import Slider from 'react-slick';
import Ticker from '../components/Ticker';
import Layout from "../components/Layout";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const fallbackImg = "https://via.placeholder.com/1024x600.png?text=Image+Unavailable";

const Home = () => {
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
      <div className="overflow-x-hidden">
        <Ticker />

        {/* Hero Section */}
        <section className="px-6 py-16 bg-white max-w-[1400px] mx-auto rounded-lg shadow-lg mt-16">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-blue-900">
              Revive, Reuse, Reimagine
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-900">
              Join us in transforming waste into beautiful, functional items. Sustainability starts with a choice — choose upcycling!
            </p>
          </div>

          {/* Two Wide Images with Spacing */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 mt-12">
            {[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSMpIr4FYHsKGc-S2bgqhq0qQCUCel0kOtg&s",
              "https://fashinnovation.nyc/wp-content/uploads/2023/11/Upcycled-Denim-961x1024.png"
            ].map((img, i) => (
              <div key={i} className="w-full lg:w-1/2 h-[50vh] rounded-2xl overflow-hidden shadow-xl group relative">
                <img
                  src={img}
                  onError={handleImgError}
                  alt={`Upcycle ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section className="bg-white px-6 md:px-12 py-20 max-w-[1400px] mx-auto rounded-lg shadow-lg mt-16">
          <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-center text-blue-900 mb-12">
            Our Beautiful Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              "https://www.camelactive.com/media/88/11/12/1689074387/camelactive-blog-denim-box-upcycling-04.webp",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8T6vk5ilQJfXYSTSwooETp7bLeFGTsWZ7A&s",
              "https://www.heatherhandmade.com/wp-content/uploads/2020/04/upcycle-jeans-tote-bag-22.jpg"
            ].map((img, i) => (
              <div key={i} className="bg-white h-[50vh] rounded-xl shadow-xl border border-gray-300 overflow-hidden group">
                <img
                  src={img}
                  onError={handleImgError}
                  alt={`Product ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Carousel Section */}
        <section className="bg-white px-6 md:px-12 py-20 max-w-[1400px] mx-auto rounded-lg shadow-lg mt-16">
          <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-center text-blue-900 mb-12">
            Upcycle Projects
          </h2>
          <div>
            <Slider {...settings}>
              {carouselImages.map((image, index) => (
                <div key={index} className="w-full h-[50vh] lg:h-[70vh] overflow-hidden rounded-xl">
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
