import React from 'react';
import { MoveRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const customPaginationStyles = `
  .swiper-pagination-bullet {
    background-color: #d1d5db; /* gray-300 */
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #0071bc; /* brand-blue */
    width: 24px;
    border-radius: 10px;
  }
`;


const PestIcon = ({ type }) => {
  const iconMap = {
    cockroach: "🪳", 
    rodent: "🐭",    
    mosquito: "🦟",   
    flies: "🪰"       
  };
  return <span className="text-6xl">{iconMap[type]}</span>;
};

const pestServices = [
  {
    type: 'cockroach',
    title: 'Cockroach Control',
    description: 'Ensuring your space remains healthy and pest-free with our premium Cockroach Control treatment.'
  },
  {
    type: 'rodent',
    title: 'Rodent Control',
    description: 'Ensuring your space remains healthy and pest-free with our premium Rodent Control treatment.'
  },
  {
    type: 'mosquito',
    title: 'Mosquito Control',
    description: 'Ensuring your space remains healthy and pest-free with our premium Mosquito Control treatment.'
  },
  {
    type: 'flies',
    title: 'Flies Control',
    description: 'Ensuring your space remains healthy and pest-free with our premium Flies Control treatment.'
  },
  
  {
    type: 'cockroach',
    title: 'Ants Control',
    description: 'Ensuring your space remains healthy and pest-free with our premium Ants Control treatment.'
  },
  {
    type: 'rodent',
    title: 'Termite Control',
    description: 'Ensuring your space remains healthy and pest-free with our premium Termite Control treatment.'
  }
];

const PestSolutionsSection = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8 font-sans">
      <style>{customPaginationStyles}</style>

     
      <div className="max-w-7xl mx-auto">
        
      
        <div className="text-center mb-16 relative">
          <h2 className="text-2xl font-black text-[#0a1f44] tracking-tight uppercase inline-block pb-2">
            EXPERT SOLUTIONS FOR EVERY PEST PROBLEM
          </h2>
         
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-16 h-1 bg-[#0071bc] rounded-full"></div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ 
            clickable: true,
            dynamicBullets: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {pestServices.map((service, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              
              
              <div className="bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.07)] border border-gray-100 p-8 flex flex-col items-center text-center group h-full">
                
                
                <div className="relative w-32 h-32 flex items-center justify-center rounded-full bg-gray-50 mb-10 border border-gray-100 shadow-sm">
                   <PestIcon type={service.type} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-extrabold text-[#0a1f44] mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-[13px] leading-relaxed text-gray-500 mb-8 max-w-[240px] flex-grow">
                  {service.description}
                </p>
                
                <button className="bg-gradient-to-r from-[#0071bc] to-[#0a1f44] hover:from-[#0a1f44] hover:to-[#0a1f44] text-white px-8 py-3 rounded-xl font-bold flex items-center gap-3 transition-all tracking-wider text-xs uppercase shadow-lg group-hover:shadow-xl mt-auto">
                  BOOK SERVICE <MoveRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PestSolutionsSection;