"use client";

import { useState } from "react";
import Link from "next/link";

export default function Checkout() {
    const [form, setForm] = useState({
        name: "",
        address: "",
        city: "",
        postalCode: "",
        paymentMethod: "creditCard",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order confirmed!");
    };

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-6 bg-white px-4 py-2 rounded-md shadow-md">Checkout</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {/* Order Summary */}
                <div className="bg-white p-6 rounded-xl shadow-md border">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Product 1</span>
                        <span>$50</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Product 2</span>
                        <span>$30</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>$80</span>
                    </div>
                </div>

                {/* Shipping Form */}
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border">
                    <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                    <input type="text" name="name" placeholder="Full Name" className="w-full p-2 border rounded mb-3" onChange={handleChange} required />
                    <input type="text" name="address" placeholder="Address" className="w-full p-2 border rounded mb-3" onChange={handleChange} required />
                    <input type="text" name="city" placeholder="City" className="w-full p-2 border rounded mb-3" onChange={handleChange} required />
                    <input type="text" name="postalCode" placeholder="Postal Code" className="w-full p-2 border rounded mb-3" onChange={handleChange} required />

                    {/* Payment Method */}
                    <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
                    <select name="paymentMethod" className="w-full p-2 border rounded mb-4" onChange={handleChange}>
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bankTransfer">Bank Transfer</option>
                    </select>

                    <Link href="/" type="submit" className="w-full flex justify-center py-2 bg-primary text-white rounded-lg border border-primary hover:bg-white hover:text-primary transition">
                        Confirm Order
                    </Link>
                </form>
            </div>
        </main>
    );
}
