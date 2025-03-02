"use client";
import Image from "next/image";
import { useState  } from "react";
import Link from "next/link";

const products = [
    {id: "1", name: "Oversize T-shirt", price: "Rp50.000", image: "/t-shirt.jpg", category: "Oversize" },
    {id: "2", name: "Premium Polo Shirt", price: "Rp125.000", image: "/polo.jpg", category: "Polo" },
    {id: "3", name: "Denim pants", price: "Rp115.000", image: "/denim.jpg", category: "Denim" },
]
export default function Marketplace() {
    const [category, setCategory] = useState("All");
    const filteredProducts = category === "All" ? products : products.filter((p) => p.category === category);

    return (
        <div className="max-w-3xl mx-auto px-8 py-6">
            <h1 className="text-xl font-bold mb-4">Temukan Keinginanmu dalam marketplace</h1>

            <select onChange={(e) => setCategory(e.target.value)} className="px-4 py-2 border rounded mb-4">
                <option value="All">Semua Kategori</option>
                <option value="Oversize">Oversize</option>
                <option value="Polo">Polo</option>
                <option value="Denim">Denim</option>
            </select>

            <div className="grid grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                    <Link key={product.id} href={'/marketplace/${product.id}'} className="border px-6 py-4 rounded-md">
                        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                        <p className="text-xl font-semibold mt-2">{product.name}</p>
                        <p className="text-gray-700">{product.price}</p>
                    </Link>
                ))}
            </div>


        </div>
    )
}