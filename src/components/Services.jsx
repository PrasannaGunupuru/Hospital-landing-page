import React from 'react';
import { services } from '../utils/data';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#F8FDFF] text-center">
      <h2 className="text-4xl font-bold text-[#1A3A61] mb-4">Our Services</h2>
      <p className="text-[#1A3A61] max-w-xl mx-auto mb-12">
        We provide complete healthcare solutions with advanced technology and compassionate staff.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white hover:bg-[#007FF4] transition-all duration-300 shadow-md rounded-[16px] p-6 flex flex-col items-center text-[#007FF4] hover:text-white"
          >
            {}
            <div className="text-[48px] mb-4">{service.icon}</div>

            {}
            <h3 className="text-lg font-bold mb-1">{service.title}</h3>

            {}
            <p className="text-sm group-hover:hidden text-center">{service.desc}</p>

            {}
            <div className="opacity-0 group-hover:opacity-100 mt-4 transition-opacity text-sm flex items-center gap-1">
              <span className="underline">LEARN MORE</span>
              <span>➜</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
