"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import TradeForm from "@/components/TradeForm";

export default function TradePage() {
    const searchParams = useSearchParams();
    const productId = searchParams.get("id");
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get("/data/product.json");
                const foundProduct = res.data.find(item => item.id === productId);
                setProduct(foundProduct || null);
            } catch (error) {
                console.error("Failed to fetch product data:", error);
            }
        };

        if (productId) fetchProduct();
    }, [productId]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
            <h1 className="text-xl font-bold text-center mb-6">Trade Your Clothes</h1>
            <TradeForm selectedProduct={product} />
        </div>
    );
}
