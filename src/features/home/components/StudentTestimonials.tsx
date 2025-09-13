import { ITestimonial } from '@/features/home/types';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const StudentTestimonials = () => {
  const testimonials: ITestimonial[] = [
    {
      text: 'Lorem Ipsum Lorem Ipsum',
      name: 'John Doe',
      age: '22',
      course: 'Fashion Design',
      image: '/img/p-1.jpg',
    },
    {
      text: 'Dolor Sit Amet Dolor Sit Amet',
      name: 'Jane Smith',
      age: '21',
      course: 'Media Arts',
      image: '/img/p-2.jpg',
    },
    {
      text: 'Consectetur Adipiscing Elit',
      name: 'Michael Lee',
      age: '23',
      course: 'Fine Arts',
      image: '/img/p-3.jpg',
    },
    {
      text: 'Sed Do Eiusmod Tempor',
      name: 'Sarah Khan',
      age: '20',
      course: 'Graphic Design',
      image: '/img/p-4.jpg',
    },
  ];

  return (
    <div className="mt-10 md:mt-50">
      <div className="mx-auto p-4 lg:w-9/10 lg:p-0">
        <div className="relative z-0 mt-7.5 flex md:w-1/5">
          <p className="md: relative z-10 inline-block text-3xl font-extrabold text-white uppercase before:absolute before:bottom-1.5 before:left-0 before:z-[-1] before:h-[20px] before:w-full before:bg-[#e018e0] md:text-4xl lg:text-[64px] lg:before:bottom-6">
            Student Testimonials
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div className="infinite-slide flex gap-20">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div
              key={i}
              className="mt-50 mb-18 flex h-100 w-1/2 flex-shrink-0 rotate-15 items-center justify-center md:h-200 md:w-1/3"
              style={{
                backgroundImage: `url(${testimonial.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="absolute inset-0 bg-black/70" />
              <div className="-rotate-15 pl-4">
                <h3 className="text-2xl font-extrabold text-white md:text-4xl lg:text-[48px]">
                  {`“ ${testimonial.text} “`}
                </h3>
                <p className="uppercase">
                  {`${testimonial.name} | ${testimonial.age} | ${testimonial.course}`}
                </p>
                <div className="mt-3 flex gap-3 text-xl text-white">
                  <FaFacebook className="cursor-pointer transition hover:text-blue-500" />
                  <FaInstagram className="cursor-pointer transition hover:text-pink-500" />
                  <FaLinkedin className="cursor-pointer transition hover:text-blue-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentTestimonials;
