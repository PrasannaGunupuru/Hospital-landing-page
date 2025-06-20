import React from 'react';
import { testimonials } from '../utils/data';

const Testimonials = () => {
  return (
    <section id="testimonials" className="text-center py-16 bg-white">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">What Our Patients Say</h2>
      <p className="text-blue-800 mb-10 max-w-xl mx-auto">
        Real stories from real patients about their experience at our hospital.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-xl shadow relative text-left">
            <div className="text-blue-600 text-4xl absolute top-4 right-4">“</div>
            <p className="text-blue-800 italic mb-4">{t.quote}</p>
            <div className="flex items-center gap-4">
              <img
                src={`/assets/${t.image}`}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-blue-900">{t.name}</h4>
                <p className="text-sm text-blue-700">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
