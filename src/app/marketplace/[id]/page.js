"use client";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

const products = [
    { id: "1", name: "Oversize T-shirt", price: "Rp50.000", image: "/models/models1.jpg", description: "Oversize T-shirt, perfect shoulder cut." },
    { id: "2", name: "Premium Polo Shirt", price: "Rp125.000", image: "/models/models2.jpg", description: "Premium Polo Shirt, water resist." },
    { id: "3", name: "Oversize T-shirt", price: "Rp50.000", image: "/models/models3.jpg", description: "Oversize T-shirt, perfect shoulder cut." },
    { id: "4", name: "Premium Polo Shirt", price: "Rp125.000", image: "/models/models1.jpg", description: "Premium Polo Shirt, water resist." },
    { id: "5", name: "Oversize T-shirt", price: "Rp50.000", image: "/models/models2.jpg", description: "Oversize T-shirt, perfect shoulder cut." },
    { id: "6", name: "Premium Polo Shirt", price: "Rp125.000", image: "/models/models3.jpg", description: "Premium Polo Shirt, water resist." },
];

export default function ProductDetail() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params?.id) {
            const id = String(params.id); // Pastikan ID dalam bentuk string
            const foundProduct = products.find((item) => item.id === id);
            setProduct(foundProduct || null);
        }
        setLoading(false);
    }, [params]);

    if (loading) return <p>Loading...</p>;
    if (!product) return notFound();

    return (
        <div className="mx-16 px-16 py-8">
            <div className="grid grid-cols-5 p-4 bg-gray-50 rounded-sm shadow-md">
                <div>
                    <Image src={product.image} alt={product.name} width={1000} height={1000} className="w-max object-cover rounded-md" />
                </div>
                <div className="col-span-2 px-4 mx-4 grid grid-rows-2">
                    <div>
                        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
                        <h2>Spesification</h2>
                    </div>
                    <div className="place-content-end">
                        <div className="flex flex-col items-end ">
                            <p className="text-xl font-semibold mt-2">{product.price}</p>
                            <p>Buy now</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <p className="text-lg text-gray-700 mt-2">{product.description}</p>
                </div>
            </div>
        </div>
    );
}
