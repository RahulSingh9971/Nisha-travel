import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Install karne ke liye: npm install react-icons

interface WhatsAppProps {
  phoneNumber?: string;
  message?: string;
}
  const FaWhatsappIcon = FaWhatsapp as React.ElementType;
const WhatsAppIcon: React.FC<WhatsAppProps> = ({ 
  
  phoneNumber = "91XXXXXXXXXX",
  message = "Hello! I have a query." 
}) => {
  
  const whatsappUrl: string = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-primary-white p-3 rounded-full shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip: Hover karne par text dikhega */}
      <span className="absolute right-16 bg-gray-800 text-primary-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
      
      <FaWhatsappIcon size={32} />
    </a>
  );
};

export default WhatsAppIcon;