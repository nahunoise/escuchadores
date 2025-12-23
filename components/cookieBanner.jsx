// components/CookieBanner.jsx
"use client";
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookies-consent');
    if (!consent) setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#333',
      color: '#fff',
      padding: '1rem',
      textAlign: 'center',
      zIndex: 1000,
    }}>
      <span>Usamos cookies para mejorar la experiencia del usuario. </span>
      <button 
        onClick={acceptCookies} 
        style={{
          marginLeft: '1rem',
          padding: '0.5rem 1rem',
          background: '#fff',
          color: '#333',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Aceptar
      </button>
    </div>
  );
}