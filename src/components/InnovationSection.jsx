import React from 'react';
import doctorImg from '../assets/doctorImg.jpg';
import emergencyImg from '../assets/emergencyImg.jpg';
import ambulance from '../assets/ambulance.jpg';

const InnovationSection = () => {
  return (
    <section className="w-full bg-[#F8FDFF] py-[100px] px-6 md:px-[120px]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-[36px] md:text-[40px] font-bold text-[#1A3A61] mb-4">
            Clinic With Innovative
          </h2>
          <p className="text-[#1A3A61] mb-6 text-[16px] leading-relaxed">
            We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.
          </p>
          <button className="bg-[#007FF4] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>

        {}
        <div className="grid grid-cols-2 gap-6">
          {}
          <div className="col-span-2 md:col-span-1 bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <img src={doctorImg} alt="Qualified Doctors" className="w-[80px] mb-4" />
            <h4 className="text-[#1A3A61] font-semibold">Qualified Doctors</h4>
          </div>

          {}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <img src={emergencyImg} alt="Emergency Care" className="w-[80px] mb-4" />
            <h4 className="text-[#1A3A61] font-semibold">Emergency Care</h4>
          </div>

          {}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <img src={ambulance} alt="24 Hours Service" className="w-[80px] mb-4" />
            <h4 className="text-[#1A3A61] font-semibold">24 Hours Service</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
