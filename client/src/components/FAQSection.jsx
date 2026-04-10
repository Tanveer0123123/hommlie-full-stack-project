import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What are the best pest control services in Bangalore?",
      answer: "Hommlie offers top-rated services including cockroach control, termite treatment, and general pest management using eco-friendly products."
    },
    {
      id: 2,
      question: "How can I permanently remove cockroaches from my home?",
      answer: "Our 6D Prime treatment targets nesting areas and uses long-lasting gels and sprays to ensure complete eradication."
    },
    {
      id: 3,
      question: "What is the best treatment for bed bugs?",
      answer: "Heat treatment and specialized chemical sprays applied by experts are the most effective ways to kill bed bugs and their eggs."
    },
    {
      id: 4,
      question: "Why is termite treatment necessary?",
      answer: "Termites can cause structural damage to your property. Pre and post-construction treatments create a protective barrier around your home."
    },
    {
      id: 5,
      question: "How often should I book a deep home cleaning service?",
      answer: "We recommend a professional deep clean every 3 to 6 months to maintain high hygiene standards and air quality."
    },
    {
      id: 6,
      question: "How does a mosquito mesh help in pest control?",
      answer: "Mosquito meshes provide a physical barrier that prevents flying insects from entering while allowing fresh air circulation."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-7xl mx-auto py-20 px-6 font-sans">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#004d8c] mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-sm font-medium">
          Find answers to common questions about our services and booking process.
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {faqs.map((faq) => (
          <div 
            key={faq.id}
            className="bg-white border border-gray-100 rounded-[24px] overflow-hidden hover:shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex items-center justify-between p-6 text-left group"
            >
              <span className="text-[15px] font-bold text-[#334e68] group-hover:text-[#0071bc] transition-colors">
                {faq.question}
              </span>
              
              <div className="shrink-0 ml-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openId === faq.id ? 'bg-[#0071bc] text-white' : 'bg-blue-50 text-[#0071bc]'
                }`}>
                  {openId === faq.id ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </div>
            </button>

            
            <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              openId === faq.id ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <p className="text-sm text-gray-500 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;