import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <div className="pt-12 pb-12">
      {/* Define grid system */}
      <div className="w-[90%] mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
        {/* 1st footer part */}
        <div className="lg:mx-auto mx-0">
          {/* logo */}
          <div className="font-bold text-black text-2xl">
            <span className="text-3xl md:text-4xl font-bold text-red-600">
              W
            </span>
            Host
          </div>
          <p className="text-gray-700 text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ab.
          </p>
          <p className="mt-4 text-lg text-black text-opacity-65 mb-4 font-bold">
            Payment Method
          </p>
          <Image src="/images/pay.png" alt="pay" width={300} height={300} />
        </div>
        {/* 2nd  footer part */}
        <div className="md:mx-auto mx-0">
          <h1 className="footer-title">Company</h1>
          <p className="footer-link">About Us</p>
          <p className="footer-link">News Feed</p>
          <p className="footer-link">Contact</p>
          <p className="footer-link">Affiliate</p>
          <p className="footer-link">Our Technology</p>
        </div>
        {/* 3rd  footer part */}
        <div className="lg:mx-auto mx-0">
          <h1 className="footer-title">Feature</h1>
          <p className="footer-link">Domain Checker</p>
          <p className="footer-link">Domain Transfer</p>
          <p className="footer-link">Domain Registration</p>
          <p className="footer-link">Data Centers</p>
          <p className="footer-link">Support</p>
        </div>
        {/* 4th  footer part */}
        <div className="md:mx-auto mx-0">
          <h1 className="footer-title">Hosting</h1>
          <p className="footer-link">Shared Hosting</p>
          <p className="footer-link">Wordpress Hosting</p>
          <p className="footer-link">VPS Hosting</p>
          <p className="footer-link">Reseller Hosting</p>
          <p className="footer-link">Cloud Hosting</p>
        </div>
      </div>
      {/* copyright */}
      <div className='text-center mt-4 text-sm text-black opacity-75'>Copyright © 2024 by Ahad Hossain</div>
    </div>
  );
}

export default Footer
