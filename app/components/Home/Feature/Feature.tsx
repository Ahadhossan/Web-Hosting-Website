import React from 'react'
import SectionHeading from '../../Helper/SectionHeading';
import SwiperSlider from './SwiperSlider';

const Feature = () => {
  return (
    <div className="pt-16 pb-12">
      {/* section heading */}
      <SectionHeading heading="OUR HOSTING SOLUTION" />
      {/* define grid system */}
      <div className="w-[90%] mx-auto mt-12 md:mt-20 items-center grid grid-cols-1 xl:grid-cols-2 gap-12">
        {/* text content */}
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-blue-950 font-bold tracking-wider">
            We Provide Hosting Solution
          </h1>
          <p className="mt-8 mb-4 text-black text-sm md:text-base font-normal opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            incidunt maiores dolor sint! Rerum quos dicta fuga a soluta quaerat.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
            delectus. Aliquam in
          </p>
          <p className="mt-8 mb-4 text-black text-sm md:text-base font-normal opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            incidunt maiores dolor sint! Rerum quos dicta fuga a soluta quaerat.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
            delectus. Aliquam in
          </p>
        </div>
        {/* slider */}
        <div>
            <SwiperSlider/>
        </div>
      </div>
    </div>
  );
}

export default Feature
