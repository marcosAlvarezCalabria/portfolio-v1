import { useState, useEffect } from 'react';

function useScrollTracking() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    // Definir las secciones a observar
    const sections = ['about', 'projects', 'skills', 'contact'];
    const sectionElements = sections.map(id => document.getElementById(id));

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Activa la sección cuando entra en la zona superior-media
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionElements.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => {
      sectionElements.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, []); // Se ejecuta una vez al montar

  return activeSection;
}

export default useScrollTracking;