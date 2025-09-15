import { useState, useEffect } from 'react';

function useScrollTracking() {
  const [activeSection, setActiveSection] = useState('about'); // Empezar con "about" activo
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 1024);

  // Detectar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log("Scroll actual:", scrollY, "Móvil:", isMobile);
      
      let newSection = null; // Por defecto ninguna sección activa
      
      if (isMobile) {
  // Valores ajustados para móvil
  if (scrollY >= 200 && scrollY < 800) {
    newSection = 'about';
  } else if (scrollY >= 800 && scrollY < 1200) {
    newSection = 'projects';
  } else if (scrollY >= 1200 && scrollY < 1600) {
    newSection = 'skills';
  } else if (scrollY >= 1600) {
    newSection = 'contact';
  }
} else if (isTablet) {
  // Valores para tablet (similar a desktop pero ajustado)
  if (scrollY >= 0 && scrollY < 400) {
    newSection = 'about';
  } else if (scrollY >= 400 && scrollY < 900) {
    newSection = 'projects';
  } else if (scrollY >= 900 && scrollY < 1200) {
    newSection = 'skills';
  } else if (scrollY >= 1200) {
    newSection = 'contact';
  }
} else {
  // Valores para desktop
  if (scrollY >= 0 && scrollY < 350) {
    newSection = 'about';
  } else if (scrollY >= 350 && scrollY < 800) {
    newSection = 'projects';
  } else if (scrollY >= 800 && scrollY < 1000) {
    newSection = 'skills';
  } else if (scrollY >= 1000) {
    newSection = 'contact';
  }
}
      
      setActiveSection(newSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, isTablet]); // Importante: incluir isMobile e isTablet
  
  return activeSection;
}

export default useScrollTracking;