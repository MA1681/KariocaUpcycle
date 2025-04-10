// src/components/Ticker.js
import React from 'react';
import './Ticker.css';

const Ticker = () => {
  return (
    <div className="ticker-container bg-green-600 text-white py-2">
      <div className="ticker-move">
        <span className="ticker-text">
          Breaking News: Upcycling is changing the world! | Join the movement! | New products available now! | Check out our latest projects!
        </span>
      </div>
    </div>
  );
};

export default Ticker;
