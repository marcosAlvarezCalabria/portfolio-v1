import { useEffect, useContext } from 'react';
import ModeContext from '../contexts/mode.context';

const useSpotlight = () => {
  const { mode } = useContext(ModeContext);

  useEffect(() => {
    let isMoving = false;
    let timeout;

    const handleMouseMove = (e) => {
      // Update CSS variables for cursor position
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
      
      // Add spotlight active class
      if (!isMoving) {
        document.body.classList.add('spotlight-active');
        isMoving = true;
      }

      // Clear existing timeout
      clearTimeout(timeout);
      
      // Set timeout to hide spotlight after mouse stops
      timeout = setTimeout(() => {
        document.body.classList.remove('spotlight-active');
        isMoving = false;
      }, 2000);
    };

    const handleMouseLeave = () => {
      document.body.classList.remove('spotlight-active');
      isMoving = false;
      clearTimeout(timeout);
    };

    // Add theme class to body
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(mode === 'dark' ? 'dark-mode' : 'light-mode');

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('spotlight-active', 'dark-mode', 'light-mode');
      clearTimeout(timeout);
    };
  }, [mode]);
};

export default useSpotlight;