import React from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

const QuickBooking = () => {
  const services = [
    {
      id: 1,
      title: "6D Prime Cockroach Control Service",
      warranty: "PREMIUM WARRANTY",
      expert: "VERIFIED EXPERT",
      price: 1199,
      originalPrice: 1599,
      type: "premium"
    },
    {
      id: 2,
      title: "Standard Cockroach Control",
      warranty: "STANDARD WARRANTY",
      expert: "VERIFIED EXPERT",
      price: 999,
      originalPrice: 1399,
      type: "standard"
    }
  ];

  return (
    <div className="flex flex-col p-4 md:p-6 lg:p-10 gap-6 font-sans bg-[#f8fafc]">
      
      <div className="px-1 text-center md:text-left">
        <p className="text-[10px] md:text-xs font-black text-[#0071bc] tracking-[0.2em] uppercase mb-1">
          Expert Solutions
        </p>
        <h2 className="text-2xl md:text-4xl font-black text-[#0a1f44] flex items-center justify-center md:justify-start gap-2">
          Quick Booking 
          <span className="flex items-center gap-1 text-[#0071bc]">
             - Pest Control
            <Zap className="text-orange-500 fill-orange-500" size={24} />
          </span>
        </h2>
      </div>

      <div className="bg-white rounded-[24px] border border-gray-100 p-4 md:p-5 shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1">
          
          {/* Dropdown 1 */}
          <div className="relative group">
            <select className="w-full appearance-none bg-[#f9fafb] group-hover:bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 outline-none transition-colors">
              <option>Cockroach Control</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>

          {/* Dropdown 2 */}
          <div className="relative group">
            <select className="w-full appearance-none bg-[#f9fafb] group-hover:bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 outline-none transition-colors">
              <option>1 BHK</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>

          {/* Dropdown 3 */}
          <div className="relative group">
            <select className="w-full appearance-none bg-[#f9fafb] group-hover:bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 outline-none transition-colors">
              <option>Single Service</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>

        <button className="text-[#0071bc] text-sm font-black flex items-center justify-center gap-1 hover:underline px-2 tracking-tight">
          VIEW ALL SERVICES <ChevronRight size={16} />
        </button>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col gap-4">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-white rounded-[32px] border border-gray-50 p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group"
          >
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-5 flex-1">
              <div className="w-16 h-16 bg-blue-50 rounded-[20px] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-[#0071bc]" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#0a1f44] mb-2 leading-tight">
                  {service.title}
                </h3>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <span className={`text-[9px] font-black px-3 py-1.5 rounded-lg tracking-wider ${
                    service.type === 'premium' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {service.warranty}
                  </span>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span> {service.expert}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto pt-6 md:pt-0 border-t md:border-t-0 border-gray-50">
              
              <div className="text-center md:text-right min-w-[120px]">
                <div className="flex items-center justify-center md:justify-end gap-2 mb-1">
                  <span className="text-3xl font-black text-[#0a1f44]">₹{service.price}</span>
                  <span className="text-sm text-gray-300 font-bold line-through italic">₹{service.originalPrice}</span>
                </div>
                <p className="text-[9px] font-black text-gray-400 tracking-widest uppercase">
                  + TAXES AND FEE
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button className="hidden sm:flex text-gray-400 hover:text-[#0071bc] text-xs font-black items-center gap-1 transition-colors uppercase tracking-widest">
                  Details <ChevronRight size={14} />
                </button>
                <button className="bg-[#0071bc] hover:bg-[#0a1f44] text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-200 active:scale-95">
                  Book Now <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickBooking;