import Image from 'next/image';
import React from 'react';

const TestimonialsSection = () => {
  return (
    <div className="grid grid-cols-12 pb-40">
      <div className="bg-navy-dark relative col-span-12 p-10 xl:col-span-3">
        <p className="quote-text text-4xl leading-snug font-extrabold text-white">
          A World where <span className="text-blue">EVERYONE has</span> the
          <span className="text-blue">opportunity</span> to fulfil their
          potential
        </p>
      </div>
      <div className="relative col-span-12 p-4 lg:p-0 xl:col-span-9">
        <Image
          src={`/img/img-6.png`}
          alt="testimonial iamge"
          className="h-80 w-full lg:size-9/10"
          width={1000}
          height={400}
        />
        <div className="bg-navy right-0 -bottom-28 mt-5 px-12.5 py-17.5 lg:absolute lg:mt-0 lg:w-7/10 xl:w-9/10 2xl:w-7/10">
          <div className="gap grid grid-cols-1 items-center justify-center gap-15 sm:grid-cols-3">
            <p className="text-blue col-span-2 pr-10 text-[40px] font-extrabold">{`There's Still Time
          to Apply for
            September 2025`}</p>{' '}
            <div className="">
              {' '}
              <button
                type="button"
                className="bg-blue text-navy hover:text-blue hover:border-blue w-max cursor-pointer border px-8 py-4 text-xl font-extrabold transition-colors duration-300 hover:bg-transparent"
              >
                View Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
