"use client";

import Link from "next/link";

const DesktopNavLink = ({ text, href, isActive, setDefault }) => {
  return (
    <Link href={href} onClick={() => setDefault()} className={`pb-1 ${isActive?"border-b-2 border-primary":"border-none"}`}>
        {text}
    </Link>
  );
};

export default DesktopNavLink;