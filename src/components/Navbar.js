"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Routes from "../routes/routes";
import axios from "axios"
import MobileSidebar from "./particular_nav/MobileSidebar";
import DesktopNavLink from "./particular_nav/DesktopNavLink";
import SearchForm from "./search/SearchForm";
import CartContent from "./particular_nav/CartContent";


export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState("")
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [filteredProduct, setFilteredProduct] = useState([])
  const pathname = usePathname();

  // Scroll event handler
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "auto";
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDrawerOpen, isSearchOpen, isCartOpen]);
  // Fetch data saat komponen pertama kali di-mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/data/product.json')
        setProducts(res.data)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    fetchProducts()
  }, [])
  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("userEmail");
      if (data) {
        setUserEmail(data);
      }
    }
  }, []);


  // Filter produk setiap kali query berubah
  useEffect(() => {
    if (query.length > 0) {
      setFilteredProduct(
        products.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase())
        )
      )
    } else {
      setFilteredProduct([]) // Reset hasil pencarian saat query kosong
    }
  }, [query, products])
  const CloseSearch = () => {
    setQuery("")
    setFilteredProduct([])
    closeSearch()
  }
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setScrollPosition(scrollTop);
  };
  // Toggle drawer state
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    closeSearch();
  };
  // Close drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  //toggle search
  const toggleSearch = () =>{
    setIsSearchOpen(!isSearchOpen);
    closeDrawer();
  }
  //close search
  const closeSearch = () => {
    setIsSearchOpen(false);
  }
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    closeDrawer();
    closeSearch();
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  const setDefault = () => {
            closeDrawer();
            CloseSearch();
            closeCart();
  }
  return (
    <>
      {/* Drawer overlay */}
      {/* Overlay for Drawer & Search */}
      {(isDrawerOpen || isCartOpen) && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={() => setDefault()}
        />
      )}
      {( isSearchOpen ) && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => setDefault()}
        />
      )}

       {/* Search Drawer */}
       <div
        className={`fixed top-0 left-0 mt-16 w-full bg-transparent z-30 transition-transform duration-500 ease-in-out ${
          isSearchOpen ? "translate-y-0" : "-translate-y-96"
        }`}
      >
        <SearchForm CloseSearch={CloseSearch} filteredProduct={filteredProduct} setQuery={setQuery} query={query}/>
      </div>
      {/* Cart Drawer */}
      <div className={`${isCartOpen ? "translate-x-0" : "translate-x-full"} fixed z-50 top-0 right-0 h-screen w-80 md:w-96 bg-white shadow-lg transition-transform duration-300 ease-in-out`}> 
        <CartContent closeCart={closeCart}/>
      </div>
      {/* Mobile Menu Drawer */}
      <div
        className={`${isDrawerOpen ? "translate-x-0" : "-translate-x-full"} fixed z-50 top-0 left-0 h-screen w-64 bg-white transition-transform duration-300 ease-in-out md:hidden`}
      >
        <MobileSidebar setDefault={setDefault}/>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full z-30 transition-shadow duration-500 ${scrollPosition > 10 ? "shadow-md" : pathname == Routes.Home ? "shadow-none" : "shadow-md"} ${pathname == "/auth/login" || pathname == "/auth/register" ? "hidden" : "block"}`}
      >
        <div
          className={`flex justify-between items-center h-16 px-4 md:px-16 transition-all duration-500 ease-in-out ${scrollPosition > 10 || isDrawerOpen || isSearchOpen ? "bg-white text-black" : pathname == "/" ? "bg-transparent text-white" : "bg-white text-black"} hover:bg-white hover:text-black`}
        >
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              onClick={toggleDrawer}
              className="text-current mt-2 duration-500 transition-all"
            >
              {isDrawerOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo and Desktop Nav */}
          <div className="flex justify-center gap-12 items-center">
            <Link href="/" className="font-bold text-2xl font-sans tracking-widest">FASTAINABLE</Link>
            <div className="md:flex hidden justify-start items-center gap-8 mt-1 font-extralight tracking-widest text-sm uppercase">
            <DesktopNavLink text="shop" href="/marketplace" isActive={pathname === "/marketplace"} setDefault={() => setDefault()} />
            <DesktopNavLink text="blog" href="/blog" isActive={pathname === "/blog"} setDefault={() => setDefault()} />
            <DesktopNavLink text="about" href="/about" isActive={pathname === "/about"} setDefault={() => setDefault()} />
            </div>
          </div>

          {/* Icons */}
          <div className="flex justify-end md:gap-6 gap-4">
            <Link href={`${userEmail != null?"/seller_profile":"/auth/login"}`} className="md:block hidden cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </Link>
            {/* search button */}
            <button  className="cursor-pointer" onClick={toggleSearch}>
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
            </button>
              {/* cart button */}
            <button  className="cursor-pointer" onClick={()=>toggleCart()}>
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
            </button>
          </div>
        </div>
      </nav>
      
      {/* Placeholder for Navbar Height */}
      <div className={`h-16 ${pathname == "/auth/login" || pathname == "/auth/register" || pathname == "/" ? "hidden" : "block"}`} ></div>
    </>
  );
}
