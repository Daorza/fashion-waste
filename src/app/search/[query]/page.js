"use client";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

export default function ProductDetail() {
    const params = useParams();
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params?.query) {
            const queryStr = String(params.query);
            setQuery(queryStr);
        }
    }, [params]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("/data/product.json");
                setProducts(res.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            setFilteredProducts(
                products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
            );
        }
    }, [products, query]);

    if (loading) return <p>Loading...</p>;
    if (!products.length) return notFound();

    return (
        <div className="flex flex-col items-center min-h-screen gap-8">
            <div className="w-full py-8 md:py-16 border-b flex flex-col gap-4 justify-center">
                    <h1 className="text-center text-primary font-bold md:text-2xl text-xl tracking-widest">
                        SEARCH RESULT FOR " {query} "
                    </h1>
                    <p className="text-center ">
                        Showing <span className="font-bold">{filteredProducts.length}</span> results for " {query} "
                    </p>
            </div>
            <div className="max-w-7xl w-full px-4">
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map(product => (
                            <Link key={product.id} href={`/marketplace/${product.id}`} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={400}
                                    className="w-full md:h-max h-48 object-top object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-medium h-12 overflow-hidden">{product.name}</h3>
                                    <p className="text-gray-600">{product.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No products found.</p>
                )}
            </div>
        </div>
    );
}