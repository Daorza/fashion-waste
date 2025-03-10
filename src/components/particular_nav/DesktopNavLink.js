"use client";

import Link from "next/link";

const DesktopNavLink = ({ text, href, isActive, setDefault }) => {
  return (
    <Link href={href} onClick={() => setDefault()}>
      <span
        className={`relative cursor-pointer px-4 py-2 transition-all duration-300 
          ${isActive ? "border-b-2 border-primary text-primary" : "text-gray-600 hover:text-black"}`}
      >
        {text}
        {isActive && (
          <span className="absolute left-0 bottom-0 w-full h-[1px] bg-primary transition-all duration-300 scale-x-100"></span>
        )}
      </span>
    </Link>
  );
};

export default DesktopNavLink;