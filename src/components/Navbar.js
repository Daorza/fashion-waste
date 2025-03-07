"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Routes from "../routes/routes";
export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrollPosition(scrollTop);
    };
    document.body.style.overflow = isDrawerOpen ? "hidden" : "auto";
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDrawerOpen]);


  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Drawer */}
      <div
        className={`${
          isDrawerOpen ? "fixed" : "hidden"
        } md:hidden inset-0 z-40 bg-black bg-opacity-50 transition-opacity`}
        onClick={closeDrawer}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } fixed z-50 top-0 left-0 h-screen w-64 bg-white transition-transform duration-300 ease-in-out md:hidden`}
      >
        <nav className="pt-16 pb-4 px-4 flex flex-col justify-between h-screen">
          <div>
            <Link
              href="/marketplace"
              className="block py-4 text-lg font-medium text-gray-700 hover:bg-gray-100"
              onClick={closeDrawer}
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className="block py-4 text-lg font-medium text-gray-700 hover:bg-gray-100"
              onClick={closeDrawer}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block py-4 text-lg font-medium text-gray-700 hover:bg-gray-100"
              onClick={closeDrawer}
            >
              About
            </Link>
          </div>
          <Link className="flex justify-start items-center gap-4 border-black shadow-md rounded-md " href={"/buyer_profile"} onClick={closeDrawer}>
                    <Image src="/images/cat.jpg" alt="Profile Photo"  width={80}  height={80} className="w-12 h-12 rounded-full border-4 border-gray-300 object-cover" />
                    <p className="font-bold text-lg">
                      Arixa
                    </p>
          </Link>
        </nav>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full z-50 transition-shadow duration-500 ${
          scrollPosition > 10
            ? "shadow-md"
            : pathname == Routes.Home
            ? "shadow-none"
            : "shadow-md"
        } ${pathname == "/auth/login" || pathname == "/auth/register" ? "hidden":"block"}`}
      >
        <div
          className={`flex justify-between items-center h-16 px-4 transition-all duration-500 ease-in-out ${
            scrollPosition > 10
              ? "bg-white text-black"
              : pathname == "/"
              ? "bg-transparent text-white"
              : "bg-white text-black"
          } hover:bg-white hover:text-black`}
        >
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              onClick={toggleDrawer}
              className="text-current mt-2 duration-500 transition-all"
            >
              {
                isDrawerOpen
                ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                :
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              }
              
            </button>
          </div>

          {/* Logo and Desktop Nav */}
          <div className="flex justify-center gap-12 items-center">
            <Link
              href="/"
              className="font-bold text-2xl font-sans tracking-widest"
            >
              FASTAINABLE
            </Link>
            <div className="md:flex hidden justify-start items-center gap-8 mt-1 font-extralight md:text-lg text-sm uppercase">
              <Link href="/marketplace">Shop</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
            </div>
          </div>

          {/* Icons */}
          <div className="flex justify-end md:gap-6 gap-4">
            <Link href="/seller_profile" className="md:block hidden cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </Link>

            <Link href={"#"} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </Link>

            <Link href={"#"} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
      {pathname != "/" && <div className="h-16" />}
    </>
  );
}