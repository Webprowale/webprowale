import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Eng from '../Images/omo-imole-electrical-engineer.png';

const Assest = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (id !== 'omo-imole') {
      navigate('/');
      return;
    }
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Choose OMo Imole Electrical Service for reliable and professional electrical services. We offer electrical installation, house wiring, lighting design, solar & camera installation, and more.';
    document.head.appendChild(metaDescription);
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, [id, navigate]);

  const shareOnWhatsApp = () => {
    const message = `
      *Choose OMo Imole Electrical Service for All Your Electrical Needs!* 
      
      Looking for reliable and professional electrical services? OMo Imole Electrical Service is here to meet all your electrical needs with expertise and precision.

      *Services Offered:*
      - Electrical Installation and Repair: From new installations to repairs, OMo Imole Electrical Service ensures your electrical systems are safe and efficient.
      - House Wiring and Rewiring: They provide top-quality wiring and rewiring services to keep your home secure and up-to-date.
      - Lighting Design and Installation: Enhance your space with expertly designed lighting solutions that combine functionality with style.
      - Solar & Camera Installation: OMo Imole Electrical Service also offers solar panel installation and advanced camera systems to power and protect your property.

      *Why Clients Trust OMo Imole:*
      - Expertise: With a team of highly skilled electricians, they bring years of experience to every project.
      - Quality Assurance: OMo Imole Electrical Service is committed to delivering superior workmanship on every job.
      - Customer Satisfaction: They prioritize client satisfaction, ensuring that every service is tailored to meet specific needs.

      *Get in Touch:*
      📧 Email: adefioyeabiola36@gmail.com
      📞 Phone: 08163989688

      Don’t compromise on your electrical needs. Trust OMo Imole Electrical Service to deliver excellence every time. They’re ready to power your home and business with reliability and quality!
    `;

    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = Eng;
    link.download = 'omo-imole-electrical-engineer.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='d-flex justify-content-center align-items-center flex-column mt-4'>
      <img src={Eng} alt="Omo Imole Electrical Work" className='img-fluid' />
      <div className="d-flex justify-content-center align-items-center mt-4 gap-3">
        <button className='btn'
          onClick={shareOnWhatsApp} 
          style={{
            backgroundColor: '#25D366', 
            color: 'white',
          }}
        >
          Share on WhatsApp
        </button>
        <button className='btn fw-semibold primaryBg text-white' onClick={downloadImage}>
          Download Asset
        </button>
      </div>
    </div>
  );
};

export default Assest;
