"use client";
import { useState } from "react";
import Link
 from "next/link";
export default function TradeForm({ selectedProduct }) {
    const [formData, setFormData] = useState({
        name: "",
        size: "",
        material: "",
        color: "",
        fit: "",
        condition: "",
        image: null,
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleCheckboxChange = (e) => {
        setFormData({ ...formData, agreeToTerms: e.target.checked });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.agreeToTerms) {
            alert("You must agree to the terms and conditions to proceed.");
            return;
        }
        console.log("Trade Request Submitted:", formData);
        alert("Trade request submitted successfully!");
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 bg-gray-50 p-6 rounded-md shadow-md">
            <div className="col-span-2">
                <h2 className="text-lg font-semibold text-center">Trade Your Item</h2>
                <p className="text-sm text-gray-600 text-center">
                    You are trading with: <strong>{selectedProduct.name}</strong>
                </p>
                <hr className="h-px my-3" />
            </div>

            <div>
                <label className="block font-semibold">Your Product Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" required />
            </div>
            <div>
                <label className="block font-semibold">Size</label>
                <input type="text" name="size" value={formData.size} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" required />
            </div>
            <div>
                <label className="block font-semibold">Material</label>
                <input type="text" name="material" value={formData.material} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" required />
            </div>
            <div>
                <label className="block font-semibold">Color</label>
                <input type="text" name="color" value={formData.color} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" required />
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
                <label className="block font-semibold">Condition</label>
                <select name="condition" value={formData.condition} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1">
                    <option value="">Select Condition</option>
                    <option value="New">New</option>
                    <option value="Like New">Like New</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                </select>
            </div>
            <div className="col-span-2">
                <label className="block font-semibold">Upload Image</label>
                <input type="file" onChange={handleFileChange} className="w-full border rounded px-3 py-2 mt-1" required />
            </div>
            <div className="col-span-2 flex justify-center mt-4">
                <label className="inline-flex items-center">
                    <input type="checkbox" checked={formData.agreeToTerms} onChange={handleCheckboxChange} className="mr-2" />
                    <span className="text-sm text-gray-600">I agree to the <Link href="/terms" className="text-blue-500 underline">terms and conditions</Link></span>
                </label>
            </div>
            <div className="col-span-2 text-center">
                <button type="submit" className="bg-black text-white px-12 py-3 rounded-md font-semibold tracking-wider hover:bg-gray-800">Submit Trade Request</button>
            </div>
        </form>
    );
}
