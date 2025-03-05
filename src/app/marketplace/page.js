"use client";
import Image from "next/image";
import { useState  } from "react";
import Link from "next/link";

const products = [
    {id: "1", name: "Oversize T-shirt", price: "Rp50.000", image: "/models/models1.jpg", category: "Oversize" },
    {id: "2", name: "Premium Polo Shirt", price: "Rp125.000", image: "/models/models2.jpg", category: "Polo" },
    {id: "3", name: "Denim pants", price: "Rp115.000", image: "/models/models3.jpg", category: "Denim" },
    {id: "4", name: "Oversize T-shirt", price: "Rp50.000", image: "/models/models1.jpg", category: "Oversize" },
    {id: "5", name: "Premium Polo Shirt", price: "Rp125.000", image: "/models/models2.jpg", category: "Polo" },
    {id: "6", name: "Denim pants", price: "Rp115.000", image: "/models/models3.jpg", category: "Denim" },
]

const filterOptions = {
    category: ["Oversize", "Polo", "Denim"],
    size: ["S", "M", "L", "XL"],
    material: ["Katun", "Denim", "Poliester"],
    color: ["Hitam", "Putih", "Biru"],
    fit: ["Slim", "Regular", "Loose"]
};

export default function Marketplace() {
    // const [category, setCategory] = useState("All");
    // const filteredProducts = category === "All" ? products : products.filter((p) => p.category === category);
    const [filters, setFilters] = useState({
        category: [],
        size: [],
        material: [],
        color: [],
        fit: []
    });

    const handleFilterChange = (filterType, value) => {
        setFilters((prev) => {
            const updatedFilter = prev[filterType].includes(value)
                ? prev[filterType].filter((item) => item !== value)
                : [...prev[filterType], value];
            return { ...prev, [filterType]: updatedFilter };
        });
    };

    const clearFilters = () => {
        setFilters({
            category: [],
            size: [],
            material: [],
            color: [],
            fit: []
        });
    };

    const filteredProducts = products.filter((p) =>
        (filters.category.length === 0 || filters.category.includes(p.category)) &&
        (filters.size.length === 0 || filters.size.includes(p.size)) &&
        (filters.material.length === 0 || filters.material.includes(p.material)) &&
        (filters.color.length === 0 || filters.color.includes(p.color)) &&
        (filters.fit.length === 0 || filters.fit.includes(p.fit))
    );

    return (
            <div className="w-full mx-auto px-8 py-6 min-h-dvh">
                <h1 className="text-3xl font-bold mb-4 uppercase text-center py-2">Buy or trade? its your choice!</h1>

                <div className="flex pb-4">
                    <div className="mx-2 px-4 py-1 bg-graphite font-semibold border shadow rounded cursor-pointer select-none text-white">
                       All
                    </div>
                    <div className="mx-2 px-4 py-1 bg-gray-100 font-medium border shadow rounded cursor-pointer select-none text-graphite
                     active:bg-graphite active:text-white active:font-semibold">
                       Menswear
                    </div>
                    <div className="mx-2 px-4 py-1 bg-gray-100 font-medium border shadow rounded cursor-pointer select-none text-graphite
                     active:bg-graphite active:text-white active:font-semibold">
                       Womenswear
                    </div>
                    <div className="mx-2 px-4 py-1 bg-gray-100 font-medium border shadow rounded cursor-pointer select-none text-graphite
                     active:bg-graphite active:text-white active:font-semibold">
                       Accessories
                    </div>
                </div>

                <div className="grid grid-cols-5 mt-4">
                    {/* <div className="h-max m-2 shadow-md rounded-md px-4 py-2  bg-white">
                        <h1 className="text-lg font-semibold ">Filter Products</h1>
                        <select onChange={(e) => setCategory(e.target.value)} className="px-4 py-2 border rounded my-4 ">
                            <option value="All">Semua Kategori</option>
                            <option value="Oversize">Oversize</option>
                            <option value="Polo">Polo</option>
                            <option value="Denim">Denim</option>
                        </select>
                    </div> */}
                    <div>
                        <div className="h-max m-2 shadow-md rounded-md px-4 py-2 bg-white static">
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
                                className="w-full mt-4 bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700 transition"
                            >
                                Clear Filters
                            </button>
                        </div>
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

                    <div className="col-span-4 ml-4">
                        <div className="grid grid-cols-4 gap-4">
                            {filteredProducts.map((product) => (
                                <Link key={product.id} href={`/marketplace/${product.id}`} className="border p-4 rounded-md shadow">
                                    <img src={product.image} alt={product.name} className="w-max object-cover rounded-md" />
                                    <p className="text-xl font-semibold mt-2">{product.name}</p>
                                    <p className="text-gray-700 text-right">{product.price}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>
    )
}