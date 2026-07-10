import React from 'react';
import './whatsappLink.css';

function WhatsappLink() {
  const phoneNumber = '687414574';
  const message = encodeURIComponent('Hola, me gustaria obtener mas informacion.');

  return (
    <div className="contact-card-link">
      <a className="contact-card-icon" href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
        <img className="img-link me-2 mt-2" src="/images/webp/whatsapp.webp" alt="WhatsApp" loading="lazy" />
      </a>
      <a className="invisible-link contact-card-text" href={`https://wa.me/${phoneNumber}?text=${message}`}>+34 687 41 45 74</a>
    </div>
  );
}

export default WhatsappLink;
