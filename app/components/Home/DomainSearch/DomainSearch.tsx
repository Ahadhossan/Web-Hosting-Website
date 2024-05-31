import React from 'react'

const DomainSearch = () => {
  return (
    <div className="pt-12 md:pt-16 pb-16">
      <div className="w-[90%] p-6 rounded-2xl bg-blue-700 mx-auto">
        {/* Heading */}
        <h1 className="text-center mt-8 text-white font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-wider">
          A Domain That Stands Tall on a Billboard.
        </h1>
        {/* search box */}
        <div className="relative flex items-center w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-12 rounded-full h-12 md:h-16 bg-white">
          {/* search input */}
          <input
            type="text"
            placeholder="Register a Domain name"
            className="w-4/5 h-full bg-transparent px-8 outline-none"
          />
          {/* button */}
          <button className="absolute hidden sm:block right-4 h-4/5 font-semibold hover:bg-rose-700 transition-all duration-300 w-[40%] lg-[20%] bg-blue-900 text-white text-xs sm:text-sm md:text-base rounded-full">
            Search Domain
          </button>
        </div>
        {/* compare list */}
        <div className="w-11/12 md:w-9/12 mt-8 mb-4 grid mx-auto items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-12">
          <p className="text-white font-semibold text-sm md:text-lg">Compare</p>
          <div className="text-white">
            <span className="text-yellow-400 text-base md:text-xl font-bold underline">
              .COM
            </span>
            <span className="font-bold text-base">$6.19</span>
          </div>
          <div className="text-white">
            <span className="text-yellow-400 text-base md:text-xl font-bold underline">
              .NET
            </span>
            <span className="font-bold text-base">$4.19</span>
          </div>
          <div className="text-white">
            <span className="text-yellow-400 text-base md:text-xl font-bold underline">
              .INFO
            </span>
            <span className="font-bold text-base">$2.19</span>
          </div>
          <div className="text-white">
            <span className="text-yellow-400 text-base md:text-xl font-bold underline">
              .ORG
            </span>
            <span className="font-bold text-base">$3.19</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DomainSearch
