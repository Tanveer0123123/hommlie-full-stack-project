import React from 'react';

const IconCustomers = () => (
  <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="23" y="23" width="14" height="14" rx="2" stroke="#6B7280" strokeWidth="1.5"/>
    <circle cx="30" cy="30" r="3" fill="#6B7280"/>
    <path d="M26 31V33" stroke="#6B7280" strokeWidth="1.5"/>
    <path d="M34 31V33" stroke="#6B7280" strokeWidth="1.5"/>
    <circle cx="30" cy="27" r="1.5" fill="#6B7280"/>
  </svg>
);

const IconStar = () => (
  <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 18L33.7 25.4L42 26.6L36 32.4L37.4 40.7L30 36.8L22.6 40.7L24 32.4L18 26.6L26.3 25.4L30 18Z" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5"/>
  </svg>
);

const IconPin = () => (
  <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 18C25.6 18 22 21.6 22 26C22 32.7 30 42 30 42C30 42 38 32.7 38 26C38 21.6 34.4 18 30 18Z" fill="#3B82F6"/>
    <circle cx="30" cy="26" r="3" fill="white"/>
  </svg>
);

const IconWarranty = () => (
  <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 22L36 22V30L30 36L24 30V22Z" fill="#FBBF24"/>
    <path d="M22 26L34 26V34L28 40L22 34V26Z" fill="#EA8319"/>
  </svg>
);

const IconIso = () => (
  <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="24" width="16" height="12" rx="2" stroke="#6B7280" strokeWidth="1.5"/>
    <circle cx="28" cy="28" r="3" stroke="#6B7280" strokeWidth="1.5"/>
  </svg>
);

const impactStats = [
  { icon: <IconCustomers />, value: "15,000+", label: "HAPPY CUSTOMERS" },
  { icon: <IconStar />, value: "4.9/5", label: "CUSTOMER RATING" },
  { icon: <IconPin />, value: "290+", label: "PIN-CODES" },
  { icon: <IconWarranty />, value: "100%", label: "WARRANTY SERVICE" },
  { icon: <IconIso />, value: "ISO", label: "CERTIFIED COMPANY" },
];

const ImpactSection = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Group */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-[10px] md:text-xs font-black text-gray-400 tracking-[0.2em] uppercase mb-3">
            OUR IMPACT
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-[#0a1f44] tracking-tight">
            WHY TRUST <span className="text-[#0071bc]">HOMMLIE</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#0071bc] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4 md:gap-12">
          {impactStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center group">
              
              <div className="mb-4 md:mb-6 relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm group-hover:shadow-md group-hover:border-blue-50 transition-all duration-300">
                 {stat.icon}
              </div>
              
              {/* Value */}
              <p className="text-2xl md:text-3xl font-black text-[#0a1f44] mb-1 md:mb-2 tracking-tighter">
                {stat.value}
              </p>
              
              {/* Label */}
              <p className="text-[9px] md:text-[10px] font-bold text-gray-400 tracking-widest uppercase text-center px-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;