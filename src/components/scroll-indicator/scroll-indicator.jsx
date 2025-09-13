import React, { useState, useEffect } from 'react';
import './scroll-indicator.css';

function ScrollIndicator() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Ocultar cuando el usuario empiece a hacer scroll (más de 50px)
            setIsVisible(scrollY < 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="scroll-indicator">
            <div className="scroll-hand">
                👇
            </div>
            <span className="scroll-text">Desliza para ver más</span>
        </div>
    );
}

export default ScrollIndicator;