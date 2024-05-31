import Link from "next/link";
import React from "react";
import { FaXmark } from "react-icons/fa6";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${navOpenStyle} top-0 left-0 right-0 bottom-0 transform transition-all duration-500 z-[1000] bg-black opacity-70 h-screen`}
      ></div>
      {/* nav */}
      <ul className={`text-white ${navOpenStyle} fixed flex items-center justify-center flex-col h-[100%] transform transition-all duration-300 delay-300 w-[90%] md:w-[60%] bg-blue-900 space-y-14 z-[1006]`}>
        <li>
          <Link
            href="#"
            className="nav-link text-[25px] sm:text-[30px] text-white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="nav-link text-[25px] sm:text-[30px] text-white"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="nav-link text-[25px] sm:text-[30px] text-white"
          >
            Hosting
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="nav-link text-[25px] sm:text-[30px] text-white"
          >
            Domain
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="nav-link text-[25px] sm:text-[30px] text-white"
          >
            Help Center
          </Link>
        </li>
        {/* close button */}
        <FaXmark
          onClick={closeNav}
          className="text-white absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem]"
        />
      </ul>
    </div>
  );
};

export default MobileNav;
