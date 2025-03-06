"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const products = [
    {
      id: "1",
      name: "Oversize T-shirt",
      price: "Rp50.000",
      image: "/models/models1.jpg",
      category: "Oversize",
      size: "L",
      material: "Katun",
      color: "Hitam",
      fit: "Regular",
    },
    {
      id: "2",
      name: "Premium Polo Shirt",
      price: "Rp125.000",
      image: "/models/models2.jpg",
      category: "Polo",
      size: "M",
      material: "Poliester",
      color: "Biru",
      fit: "Slim",
    },
    {
      id: "3",
      name: "Denim Pants",
      price: "Rp115.000",
      image: "/models/models3.jpg",
      category: "Denim",
      size: "XL",
      material: "Denim",
      color: "Biru",
      fit: "Loose",
    },
    {
      id: "4",
      name: "Oversize T-shirt",
      price: "Rp50.000",
      image: "/models/models1.jpg",
      category: "Oversize",
      size: "S",
      material: "Katun",
      color: "Putih",
      fit: "Regular",
    },
    {
      id: "5",
      name: "Premium Polo Shirt",
      price: "Rp125.000",
      image: "/models/models2.jpg",
      category: "Polo",
      size: "L",
      material: "Poliester",
      color: "Hitam",
      fit: "Slim",
    },
    {
      id: "6",
      name: "Denim Pants",
      price: "Rp115.000",
      image: "/models/models3.jpg",
      category: "Denim",
      size: "M",
      material: "Denim",
      color: "Biru",
      fit: "Regular",
    },
  ];
  

const filterOptions = {
  category: ["Oversize", "Polo", "Denim"],
  size: ["S", "M", "L", "XL"],
  material: ["Katun", "Denim", "Poliester"],
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
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="md:hidden fixed z-30 bottom-4 right-4 bg-gray-50 text-graphite px-4 py-2 rounded-md shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
        </svg>

      </button>

      {/* Filter Drawer Mobile */}
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
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Desktop Filter */}
      <div className="block md:flex p-4 md:p-8">
            <div className="hidden md:block h-max w-1/4 m-2 shadow-md rounded-md px-4 py-2 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100">
                    <h1 className="text-lg font-semibold">Filter Products</h1>
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
                            {/* Clear Filter Button */}
                            <button
                                onClick={clearFilters}
                                className="w-full mt-4 bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-700 transition"
                            >
                                Clear Filters
                            </button>
            </div>

            {/* Product Grid */}
            <div className="p-4 md:w-3/4 w-full">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredProducts.map((product) => (
                        <Link key={product.id} href={`/marketplace/${product.id}`} className="border rounded-lg overflow-hidden">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={300} 
                            height={400}
                            className="w-full h-48 object-cover object-top"
                        />
                        <div className="p-4">
                            <h3 className="font-medium h-12 overflow-clip">{product.name}</h3>
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