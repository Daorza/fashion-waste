"use client"; 

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function TradePage() {
    return (
        <Suspense fallback={<p>Loading trade form...</p>}>
            <TradeForm />
        </Suspense>
    );
}

function TradeForm() {
    const searchParams = useSearchParams();
    const productId = searchParams.get("product");

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Trade Your Clothes</h1>
            <p>You are trading for product ID: <strong>{productId || "Unknown"}</strong></p>
        </div>
    );
}
