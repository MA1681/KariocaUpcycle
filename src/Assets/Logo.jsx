import React from 'react';
import { GiSewingNeedle } from 'react-icons/gi';  // Ícone de agulha
import './App.css';  // Vamos adicionar a estilização aqui

const Logo = () => {
  return (
    <div className="logo-container">
      {/* Logo com efeito de bordado */}
      <div className="logo-text">
        Karioca Upcycle
        {/* Ícone de agulha */}
        <GiSewingNeedle className="sewing-needle" />
      </div>
    </div>
  );
};

export default Logo;
