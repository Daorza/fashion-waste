"use client";

import { useState } from "react";
import Link from "next/link";

export default function SellProductForm() {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        size: "",
        material: "",
        color: "",
        fit: "",
        condition: "",
        description: "",
        shipping: "",
        termsAccepted: false,
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.termsAccepted) {
            alert("You must accept the terms and conditions.");
            return;
        }
        console.log("Submitted Data:", formData);
    };

    return (
        <main className="max-w-4xl mx-auto my-8 p-8 bg-white shadow-md rounded-md">
            <h1 className="text-xl font-bold text-center mb-6">Sell Your Product</h1>
            <hr className="h-px my-4" />
            <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block font-semibold">Product Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" required />
                </div>
                <div>
                    <label className="block font-semibold">Price</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" required />
                </div>
                <div className="col-span-2">
                    <label className="block font-semibold">Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" rows="3"></textarea>
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
                    <label className="block font-semibold">Condition</label>
                    <select name="condition" value={formData.condition} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1">
                        <option value="">Select Condition</option>
                        <option value="New">New</option>
                        <option value="Used">Used</option>
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
                    <label className="block font-semibold">Shipping Method</label>
                    <select name="shipping" value={formData.shipping} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1">
                        <option value="">Select Shipping Method</option>
                        <option value="Standard">Standard</option>
                        <option value="Express">Express</option>
                        <option value="Pickup">Pickup</option>
                    </select>
                </div>
                <div>
                    <label className="block font-semibold">Upload Image</label>
                    <input type="file" onChange={handleFileChange} className="w-full border rounded px-3 py-2 mt-1" />
                </div>
                <div className="col-span-2 flex items-center justify-center mt-4">
                    <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="mr-2" required />
                    <span className="text-sm text-gray-600">I agree to the <Link href="/terms" className="text-blue-500 underline">terms and conditions</Link></span>
                </div>
                <div className="col-span-2 text-center ">
                    <Link href="/marketplace" type="submit" className="bg-black text-white px-12 py-3 rounded-md font-semibold tracking-wider hover:bg-gray-800">Submit</Link>
                </div>
            </form>
        </main>
    );
}