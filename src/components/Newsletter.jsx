import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); 
  const [error, setError] = useState('');

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setStatus(null);

    if (!email.trim()) {
      setError('Email is required.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="w-full bg-[#F8FDFF] py-[110px] px-6 md:px-[121px]">
      <div className="max-w-[1198px] mx-auto bg-[#007FF4] rounded-[20px] py-10 px-6 md:px-16 text-white text-center">
        {/* Heading */}
        <h2 className="text-[32px] md:text-[48px] font-semibold leading-[78px] font-sans">
          Subscribe to Newsletter
        </h2>

        {/* Subheading */}
        <p className="text-white mt-2 text-[16px] md:text-[20px] leading-[39px] max-w-xl mx-auto">
          We have a wide experience in experience design and strategy,
        </p>

        {}
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex justify-center w-full"
        >
          <div className="flex w-full md:w-[846px] h-[80px] bg-white rounded-[10px] overflow-hidden px-4 items-center shadow-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm md:text-base"
            />
            <button
              type="submit"
              className="bg-[#007FF4] text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-blue-600 transition"
            >
              Send Now
            </button>
          </div>
        </form>

        {}
        {error && (
          <p className="mt-4 text-red-100 text-sm">{error}</p>
        )}
        {status === 'success' && (
          <p className="mt-4 text-green-100 text-sm">
            🎉 Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
