import React from 'react';
import './whatsappLink.css'; // Asegúrate de que esta ruta es correcta

function WhatsappLink() {
  const phoneNumber = '687414574'; // Reemplaza esto con el número de teléfono en formato internacional sin el símbolo '+'
  const message = encodeURIComponent('Hola, me gustaría obtener más información.'); // Mensaje predeterminado (opcional)

  return (
    <div>
      <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
        <img className="img-link me-2 mt-2" src="/images/whatsapp.png" alt="WhatsApp" />
      
      </a>
      <a className="invisible-link" href={`https://wa.me/${phoneNumber}?text=${message}`}>+34 687 41 45 74</a>
    </div>
  );
}

export default WhatsappLink;
