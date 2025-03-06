"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function SellProductForm() {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        size: "",
        material: "",
        color: "",
        fit: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    return (
        <main className="max-w-4xl mx-auto my-8 p-8 bg-white shadow-md rounded-md">
            <h1 className="text-xl font-bold text-center mb-6">Sell Your Product</h1>
            <hr className="h-px my-4" />
            <form className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block font-semibold">Product Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" required />
                </div>
                <div>
                    <label className="block font-semibold">Price</label>
                    <input type="text" name="price" value={formData.price} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" required />
                </div>
                <div>
                    <label className="block font-semibold">Category</label>
                    <select name="category" value={formData.category} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1">
                        <option value="">Select Category</option>
                        <option value="Oversize">Oversize</option>
                        <option value="Polo">Polo</option>
                        <option value="Denim">Denim</option>
                    </select>
                </div>
                <div>
                    <label className="block font-semibold">Size</label>
                    <input type="text" name="size" value={formData.size} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" />
                </div>
                <div>
                    <label className="block font-semibold">Material</label>
                    <input type="text" name="material" value={formData.material} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" />
                </div>
                <div>
                    <label className="block font-semibold">Color</label>
                    <input type="text" name="color" value={formData.color} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" />
                </div>
                <div>
                    <label className="block font-semibold">Fit</label>
                    <select name="fit" value={formData.fit} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1">
                        <option value="">Select Fit</option>
                        <option value="Slim">Slim</option>
                        <option value="Regular">Regular</option>
                        <option value="Loose">Loose</option>
                    </select>
                </div>
                <div>
                    <label className="block font-semibold">Upload Image</label>
                    <input type="file" onChange={handleFileChange} className="w-full border rounded px-3 py-2 mt-1" />
                </div>
                <div className="col-span-2 text-center mt-4">
                    <Link href="/seller_profile" className="bg-black text-white px-12 py-3 rounded-md font-semibold hover:bg-gray-800">Submit Form</Link>
                </div>
            </form>
        </main>
    );
}
