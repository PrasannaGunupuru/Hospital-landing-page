import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-[#F8FDFF] pt-[120px] px-6 md:px-[120px] flex flex-col md:flex-row items-center justify-between gap-10">
      {}
      <div className="max-w-xl">
        <p className="text-sm font-semibold text-[#1A3A61] mb-2">Welcome to MediCare+ Clinic</p>
        <h1 className="text-[36px] md:text-[48px] font-bold text-[#1A3A61] leading-tight mb-4">
          Best Specialists
        </h1>
        <p className="text-[#1A3A61] text-base md:text-lg leading-relaxed mb-6">
          We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.
        </p>

        {}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#007FF4] text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition">
            Make an Appointment
          </button>
          <button className="bg-white text-[#007FF4] font-semibold px-6 py-3 rounded-full border border-blue-100 hover:bg-blue-50 transition">
            Departments
          </button>
        </div>
      </div>

      {}
      <div className="w-full md:w-[420px] h-[360px] bg-[#EEF1FF] rounded-[20px] mt-[40px] mb-[140px]"></div>
    </section>
  );
};

export default Hero;
