import React from 'react'
import SectionHeading from '../../Helper/SectionHeading';
import PriceCard from './PriceCard';

const Price = () => {
  return (
    <div className="mt-20 pb-16">
      {/* section heading */}
      <SectionHeading heading="About Us" />
      {/* define grid system */}
      <div className="w-[90%] mx-auto items-center mt-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {/* PriceCard 1 */}
        <div>
          <PriceCard image="/images/p1.png" plan="Basic" price="9.99" />
        </div>
        {/* PriceCard 2 */}
        <div>
          <PriceCard image="/images/p2.png" plan="Standard" price="29.99" />
        </div>
        {/* PriceCard 3 */}
        <div>
          <PriceCard image="/images/p3.png" plan="Premium" price="59.99" />
        </div>
      </div>
    </div>
  );
}

export default Price
