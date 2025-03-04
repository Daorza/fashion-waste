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
export default function Marketplace() {
    const [category, setCategory] = useState("All");
    const filteredProducts = category === "All" ? products : products.filter((p) => p.category === category);

    return (
            <div className="w-full mx-auto px-8 py-6 min-h-dvh">
                <h1 className="text-3xl font-bold mb-4 uppercase text-center py-4">Buy or trade? its your choice!</h1>
                <div className="grid grid-cols-5 mt-4">
                    <div className="h-max m-2 shadow-md rounded-md px-4 py-2  bg-white">
                        <h1 className="text-lg font-semibold ">Filter Products</h1>
                        <select onChange={(e) => setCategory(e.target.value)} className="px-4 py-2 border rounded my-4 ">
                            <option value="All">Semua Kategori</option>
                            <option value="Oversize">Oversize</option>
                            <option value="Polo">Polo</option>
                            <option value="Denim">Denim</option>
                        </select>
                    </div>

                    <div className="col-span-4">
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