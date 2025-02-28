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
        <div className="w-fit mx-auto px-8 py-6">
            <h1 className="text-xl font-bold mb-4">Jual atau Tukar Pakaian</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Nama Produk" required className="w-full px-4 py-2 border rounded" onChange={handleChange} />
                <input type="text" name="price" placeholder="Harga Produk" className="w-full px-4 py-2 border rounded" onChange={handleChange} />

                <textarea name="description" placeholder="Deskripsi Produk" required className="w-full px-4 py-2 border rounded" onChange={handleChange}></textarea>

                <select name="category" className="w-full px-4 py-2 border rounded" onChange={handleChange}>
                    <option value="Jual">Jual</option>
                    <option value="Tukar">Tukar</option>
                </select>
                <button type="submit" className="w-full bg-brick px-8 py-4 text-white font-semibold text-md">Submit</button>
            </form>
        </div>
    );
}
