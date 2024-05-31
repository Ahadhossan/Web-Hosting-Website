"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../../Helper/Button";
import { FaBars } from "react-icons/fa";

type Props ={
    openNav:()=>void
}

const Nav = ({openNav}:Props) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavSticky(true);
      if (window.scrollY <= 90) setNavSticky(false);
    };

    window.addEventListener("scroll", handler);

  }, []);

  return (
    <div
      className={`${
        navSticky ? "bg-blue-950" : "fixed"
      } fixed w-full transition-all duration-200 z-[1000]`}
    >
      <div className="flex items-center h-[10vh] lg:h-[12vh] justify-between w-[90%] mx-auto">
        {/* logo */}
        <div className="font-bold text-white text-2xl">
          <span className="text-3xl md:text-4xl font-bold text-yellow-300">
            W
          </span>
          Host
        </div>
        {/* nav links */}

        <ul className="lg:flex hidden items-center space-x-10 lg:space-x-12 xl:space-x-14">
          <li>
            <Link href="#" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link">
              Hosting
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link">
              Domain
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link">
              Help Center
            </Link>
          </li>
        </ul>

        {/* login button and burger menu */}
        <div className="flex items-center space-x-6">
          <Button bg="bg-orange-600">Login</Button>
          <FaBars onClick={openNav} className="w-8 h-8 md:w-[2.3rem] md:[2.3rem] lg:hidden text-white " />
        </div>
      </div>
    </div>
  );
};

export default Nav;
