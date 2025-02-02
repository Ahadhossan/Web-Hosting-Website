import Image from "next/image";
import React from "react";
import { BiCalendar } from "react-icons/bi";
type Props = {
  image: string;
  title: string;
  date: string;
  username: string;
  userImage: string;
  userRole: string;
};

const BlogCard = ({
  date,
  image,
  title,
  userImage,
  userRole,
  username,
}: Props) => {
  return (
    <div className="bg-gray-100 shadow-md shadow-gray-300 rounded-md overflow-hidden">
      {/* image */}
      <div className="w-full">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full"
        />
      </div>
      {/* content */}
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-sm font-semibold text-black text-opacity-70">
            Web Hosting
          </h1>
          <div className="flex items-center space-x-2">
            <BiCalendar className="text-blue-950" />
            <span className="text-sm font-semibold text-black text-opacity-70">
              {date}
            </span>
          </div>
        </div>
        {/* title */}
        <h1 className="mt-4 text-lg md:text-xl hover:text-blue-600 transition-all duration-200 cursor-pointer text-blue-950 font-bold tracking-wider">
          {title}
        </h1>
        {/* Divider */}
        <div className="mt-6 mb-6 h-[1.3px] w-full bg-gray-600 opacity-20" />
        {/* Blog writer profile */}
        <div className="flex items-center space-x-4">
          <Image src={userImage} alt={username} width={40} height={40} />
          <div>
            <h1 className="text-lg text-blue-950 font-bold">{username}</h1>
            <p className="text-base text-black font-medium text-opacity-80">{userRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
