import React from 'react'
import SectionHeading from '../../Helper/SectionHeading';
import BlogCard from './BlogCard';

const Blog = () => {
  return (
    <div className="pt-20 pb-16">
      {/* section heading */}
      <SectionHeading heading="OUR BLOG" />
      {/* define grid system */}
      <div className="w-[90%] mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mx-auto">
        {/* blog card 1 */}
        <div>
          <BlogCard
            image="/images/b1.png"
            title="10 Reason To Use Good Web Hosting"
            date="28 May, 2024"
            username="Sajal"
            userRole="Web Developer"
            userImage="/images/c1.png"
          />
        </div>
        {/* blog card 2 */}
        <div>
          <BlogCard
            image="/images/b2.png"
            title="102 Reason To Use Good Web Hosting"
            date="29 May, 2024"
            username="John"
            userRole="Next JS Developer"
            userImage="/images/c2.png"
          />
        </div>
        {/* blog card 13 */}
        <div>
          <BlogCard
            image="/images/b3.png"
            title="7 Reason To Use Good Web Hosting"
            date="30 May, 2024"
            username="Jack"
            userRole="Ract Developer"
            userImage="/images/c3.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog
