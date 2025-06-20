import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#F8FDFF] fixed top-0 left-0 z-50">
      <div className="w-full h-[100px] flex items-center px-6 md:px-[120px]">
        {}
        <div className="text-[34px] font-bold font-sans leading-[1]">
          <span className="text-[#1A3A61]">Medi</span>
          <span className="text-[#FF6D3D]">Care+</span>
        </div>

        {}
        <ul className="hidden md:flex ml-[120px] space-x-12 font-sans font-normal text-[16px] leading-[1]">
          {['Home', 'About', 'Services', 'News'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[#0073FF]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {}
        <a
          href="#contact"
          className="ml-auto w-[170px] h-[50px] bg-[#007FF4] text-white text-[16px] font-bold rounded-[25px] flex items-center justify-center hover:bg-blue-600 transition duration-200"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
