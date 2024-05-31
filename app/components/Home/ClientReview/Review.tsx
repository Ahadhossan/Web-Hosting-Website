import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import ReviewSlider from './ReviewSlider';

const Review = () => {
  return (
    <div className="pt-20 pb-16">
      {/* section heading */}
      <SectionHeading heading="OUR CLIENT REVIEW" />
      {/* define grid system */}
      <div className='w-[90%] mt-16 mx-auto'>
        <ReviewSlider/>
      </div>
    </div>
  );
}

export default Review
