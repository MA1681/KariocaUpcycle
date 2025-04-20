import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../components/Layout";

// Sample Product Data with images from the web
const productData = [
  { 
    name: "Upcycled T-shirt", 
    price: "$25", 
    image: "https://plus.unsplash.com/premium_photo-1683121263622-664434494177?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D", 
    label: "New"
  },
  { 
    name: "Recycled Jeans", 
    price: "$50", 
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    label: "Eco-Friendly"
  },
  { 
    name: "Eco-friendly Bag", 
    price: "$30", 
    image: "https://images.unsplash.com/photo-1661347365618-630c0c20e5f8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    label: "Best Seller"
  },
  { 
    name: "Sustainable Sneakers", 
    price: "$70", 
    image: "https://media.istockphoto.com/id/486751924/pt/foto/jeans-saco-de.jpg?s=1024x1024&w=is&k=20&c=fG5Rc0yt16mFPFpGSyiSt20hg45XL1Clmo0X6DQP9ME=", 
    label: "Hot"
  },
  { 
    name: "Upcycled Hoodie", 
    price: "$40", 
    image: "https://plus.unsplash.com/premium_photo-1690820317745-770eb6a3ee67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    label: "Limited Edition"
  },
  { 
    name: "Upcycled Hoodie", 
    price: "$40", 
    image: "https://images.unsplash.com/photo-1606844128209-80ba0f9afd34?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    label: "Limited Edition"
  },
  { 
    name: "Upcycled Hoodie", 
    price: "$40", 
    image: "https://plus.unsplash.com/premium_photo-1703369352413-4c5a3938aa56?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    label: "Limited Edition"
  },
  { 
    name: "Upcycled Hoodie", 
    price: "$40", 
    image: "https://plus.unsplash.com/premium_photo-1713586577946-e4febf002154?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    label: "Limited Edition"
  },
];

const Product = () => {
  return (
    <Layout>
      <div className="py-16 px-6 md:px-12 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center text-blue-900 mb-12">Our Products</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {productData.map((product, index) => (
            <div
              key={index}
              className="relative group overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Badge */}
              {product.label && (
                <div className="absolute top-4 left-4 bg-blue-900 text-white text-xs py-1 px-4 rounded-full uppercase shadow-lg">
                  {product.label}
                </div>
              )}

              {/* Image */}
              <div className="product-image relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-72 object-cover transform transition-all duration-300 group-hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">{product.name}</h3>
                <p className="text-lg text-blue-900 mb-4">{product.price}</p>

                {/* View Details Button */}
                <Link
                  to={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block text-white bg-blue-900 hover:bg-blue-400 text-lg font-medium py-2 px-8 rounded-lg transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Product;
