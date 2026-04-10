import React from 'react';

// For the icons, I am using direct SVG components to avoid dependencies.
// These are simple reconstructions based on the design in the image.

// Icon 1: Happy Customers (reconstruction)
const IconCustomers = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-white rounded-full p-2">
    <circle cx="30" cy="30" r="28" stroke="#E5E7EB" strokeWidth="1"/>
    <rect x="23" y="23" width="14" height="14" rx="2" stroke="#6B7280" strokeWidth="1.5"/>
    <circle cx="30" cy="30" r="3" fill="#6B7280"/>
    <path d="M26 31V33" stroke="#6B7280" strokeWidth="1.5"/>
    <path d="M34 31V33" stroke="#6B7280" strokeWidth="1.5"/>
    <circle cx="30" cy="27" r="1.5" fill="#6B7280"/>
    <path d="M20 18H18" stroke="#6B7280" strokeWidth="1.5"/>
    <path d="M42 18H40" stroke="#6B7280" strokeWidth="1.5"/>
  </svg>
);

// Icon 2: Star Rating
const IconStar = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" stroke="#E5E7EB" strokeWidth="1" fill="white"/>
    <path d="M30 18L33.7 25.4L42 26.6L36 32.4L37.4 40.7L30 36.8L22.6 40.7L24 32.4L18 26.6L26.3 25.4L30 18Z" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5"/>
  </svg>
);

// Icon 3: PIN-Codes (Map Pin)
const IconPin = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" stroke="#E5E7EB" strokeWidth="1" fill="white"/>
    <path d="M30 18C25.6 18 22 21.6 22 26C22 32.7 30 42 30 42C30 42 38 32.7 38 26C38 21.6 34.4 18 30 18Z" fill="#3B82F6"/>
    <circle cx="30" cy="26" r="3" fill="white"/>
  </svg>
);

// Icon 4: Warranty Service (Boxes/Shield)
const IconWarranty = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" stroke="#E5E7EB" strokeWidth="1" fill="white"/>
    <path d="M24 22L36 22V30L30 36L24 30V22Z" fill="#FBBF24"/>
    <path d="M22 26L34 26V34L28 40L22 34V26Z" fill="#EA8319"/>
    <rect x="21" y="22" width="14" height="2" rx="1" fill="#34D399"/>
  </svg>
);

// Icon 5: ISO Certified (reconstruction based on image style)
const IconIso = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" stroke="#E5E7EB" strokeWidth="1" fill="white"/>
    <rect x="22" y="24" width="16" height="12" rx="2" stroke="#6B7280" strokeWidth="1.5"/>
    <circle cx="28" cy="28" r="3" stroke="#6B7280" strokeWidth="1.5"/>
    <rect x="30" y="30" width="8" height="8" rx="2" fill="#FCA5A5" stroke="#F87171" strokeWidth="1.5"/>
  </svg>
);

const impactStats = [
  {
    icon: <IconCustomers />,
    value: "15,000+",
    label: "HAPPY CUSTOMERS",
  },
  {
    icon: <IconStar />,
    value: "4.9/5",
    label: "CUSTOMER RATING",
  },
  {
    icon: <IconPin />,
    value: "290+",
    label: "PIN-CODES",
  },
  {
    icon: <IconWarranty />,
    value: "100%",
    label: "WARRANTY SERVICE",
  },
  {
    icon: <IconIso />,
    value: "ISO",
    label: "CERTIFIED COMPANY",
  },
];

const ImpactSection = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Group */}
        <div className="text-center mb-24">
          <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-4">
            OUR IMPACT
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1f44] tracking-tight">
            WHY TRUST <span className="text-[#3b82f6]">HOMMLIE</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
          {impactStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon with light gray border, same as image */}
              <div className="mb-6 relative w-20 h-20 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm">
                 {stat.icon}
              </div>
              
              {/* Main Stat Value - Strong and Large */}
              <p className="text-3xl font-extrabold text-[#0a1f44] mb-2 tracking-tight">
                {stat.value}
              </p>
              
              {/* Stat Description - Smaller, uppercase, spaced */}
              <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase">
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