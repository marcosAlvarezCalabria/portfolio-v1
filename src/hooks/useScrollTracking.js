import { useState, useEffect } from 'react';

function useScrollTracking() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detectar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log("Scroll actual:", scrollY, "Móvil:", isMobile);
      
      let newSection = 'about';
      
      if (isMobile) {
  // Valores para móvil (del código original)
  if (scrollY >= 600 && scrollY < 800) {
    newSection = 'about';
  } else if (scrollY >= 800 && scrollY < 1600) {
    newSection = 'projects';
  } else if (scrollY >= 1600 && scrollY < 2100) {
    newSection = 'skills';
  } else if (scrollY >= 1750) {
    newSection = 'contact';
  }
} else {
  // Valores para desktop (los que ajustamos antes)
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
  }, [isMobile]); // Importante: incluir isMobile
  
  return activeSection;
}

export default useScrollTracking;