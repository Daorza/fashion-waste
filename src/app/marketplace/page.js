"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const filterOptions = {
  category: ["Men", "Women", "Accessories"],
  size: ["S", "M", "L", "XL", "2XL", "Standard"],
  material: ["Katun", "Denim", "Poliester", "Plastic"],
  color: ["Hitam", "Putih", "Biru"],
  fit: ["Slim", "Regular", "Loose"],
};


export default function Marketplace() {
  
  const [filters, setFilters] = useState({
    category: [],
    size: [],
    material: [],
    color: [],
    fit: [],
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchAPI =  async() => {
    const res = await axios.get('/data/product.json');
    setProducts(res.data)
  }
  
  useEffect(() => {
    fetchAPI();
  }, [])

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "auto";
  }, [isDrawerOpen]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value],
    }));
  };

  const clearFilters = () => {
    setIsDrawerOpen(false);
    setFilters({
      category: [],
      size: [],
      material: [],
      color: [],
      fit: [],
    });
  };

  const filteredProducts = products.filter((p) => {
    return (
      (filters.category.length === 0 || filters.category.includes(p.category)) &&
      (filters.size.length === 0 || filters.size.includes(p.size)) &&
      (filters.material.length === 0 || filters.material.includes(p.material)) &&
      (filters.color.length === 0 || filters.color.includes(p.color)) &&
      (filters.fit.length === 0 || filters.fit.includes(p.fit))
    );
  });

  return (
    <div className="relative">
\      <button
        onClick={() => setIsDrawerOpen(true)}
        className="md:hidden fixed z-30 bottom-4 right-4 bg-gray-50 text-graphite px-4 py-2 rounded-md shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
        </svg>

      </button>

      <div
        className={`${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } fixed z-20 top-0 left-0 h-screen w-64 bg-white transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h3 className="text-lg font-semibold">Filter</h3>
          <button onClick={() => setIsDrawerOpen(false)}>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[85vh]">
          {Object.keys(filterOptions).map((filterType) => (
            <div key={filterType}>
              <h4 className="text-sm font-medium mb-2 capitalize">
                {filterType}
              </h4>
              <div className="space-y-2">
                {filterOptions[filterType].map((value) => (
                  <label
                    key={value}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      checked={filters[filterType].includes(value)}
                      onChange={() => handleFilterChange(filterType, value)}
                      className="form-checkbox h-4 w-4 text-black"
                    />
                    <span className="text-sm">{value}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button
            onClick={clearFilters}
            className="w-full bg-red-500 text-white py-2 rounded mt-4"
          >
            Clear Filters
          </button>
          <div className="px-4 py-2 mt-8 rounded-md shadow-md ">
              <p className="text-lg font-semibold capitalize">take a step</p>
              <div className="text-sm mt-2">
                  Start to sell your second-hand clothing at <span className="font-semibold">Fastainable!</span>
              </div>
              <hr className="h-px my-2" />
              <div >
                  <Link href={'/marketplace/sell'} className="mt-2 py-2 font-medium text-sm underline underline-offset-2 hover:font-semibold">Sell your products</Link>
              </div>
            </div>
        </div>

      </div>
          
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      <div className="block md:flex  p-4 md:p-8">
        <div className="h-screen overflow-y-scroll w-1/5 hidden md:block ">
          <div className="m-2 shadow-md rounded-md px-4 py-2 bg-white">
          <h1 className="text-lg font-semibold"> Filter Products</h1>
          <hr className="h-px my-2" />
          {Object.keys(filterOptions).map((filterType) => (
              <div key={filterType} className="my-2">
                  <h2 className="text-base font-semibold capitalize py-2">{filterType}</h2>
                      {filterOptions[filterType].map((value) => (
                          <label key={value} className="block">
                              <input
                                  type="checkbox"
                                  checked={filters[filterType].includes(value)}
                                  onChange={() => handleFilterChange(filterType, value)}
                                  className="mr-2"
                              />
                              {value}
                          </label>
                          ))}
                  <hr className="h-px my-2" />
              </div>
                  ))}
                  <button
                      onClick={clearFilters}
                      className="w-full mt-4 bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-700 transition"
                  >
                      Clear Filters
                  </button>
            </div>
              <div className="px-4 py-2 mt-8 mx-2 rounded-md shadow-md bg-white">
                  <p className="text-lg font-semibold capitalize">take a step</p>
                  <div className="text-sm mt-2">
                      Start to sell your second-hand clothing at <span className="font-semibold">Fastainable!</span>
                  </div>
                  <hr className="h-px my-2" />
                  <div >
                      <Link href={'/marketplace/sell'} className="mt-2 py-2 font-medium text-sm underline underline-offset-2 hover:font-semibold">Sell your products</Link>
                  </div>
              </div>
        </div>
            
        <div className="p-4 md:w-4/5 md:h-screen md:overflow-y-scroll w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <Link key={product.id} href={`/marketplace/${product.id}`} className="border rounded-lg overflow-hidden bg-white">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={300} 
                        height={400}
                        className="w-full h-[28rem] md:h-max object-cover object-top p-4"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold capitalize h-12 overflow-clip">{product.name}</h3>
                        <p className="text-gray-600 h-8">{product.price}</p>
                    </div>
                    </Link>
                ))}
              </div>
          </div>
      </div>
    </div>
  );
}