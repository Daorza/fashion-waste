"use client";

export { useState } from "react";

export default function SellPage() {
    const [form, setForm] = useState({
        name: "",
        price: "",
        description: "",
        category: "Jual",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Produk ${form.name} berhasil ditambahkan!');
    };

    return (
        <div>
            <h1></h1>
            <form>
                <input type="" name="" value="" />
                <input type="" name="" value="" />

                <textarea rows="" cols=""></textarea>

                <select>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <button type=""></button>
            </form>
        </div>
    );
}
