"use client";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function ProductDetail() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get("/data/product.json");
                const products = res.data;

                const foundProduct = products.find((item) => item.id === params.id);
                setProduct(foundProduct || null);

                if (foundProduct) {
                    // Filter produk yang memiliki kategori yang sama, tetapi bukan produk yang sedang dilihat
                    const recommendations = products.filter(
                        (item) => item.category === foundProduct.category && item.id !== foundProduct.id
                    );
                    setRelatedProducts(recommendations.slice(0, 4)); // Ambil maksimal 4 rekomendasi
                }
            } catch (error) {
                console.error("Failed to fetch product data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (params?.id) {
            fetchProduct();
        }
    }, [params]);

    if (loading) return <p>Loading...</p>;
    if (!product) return notFound();

    return (
        <div className="grid place-items-center w-full py-8">
            <div className="max-w-4xl">
                {/* Produk Utama */}
                <div className="grid grid-cols-4 p-4 bg-gray-50 rounded-sm shadow-md">
                    <div className="md:col-span-1 col-span-4">
                        <Image 
                            src={product.image} 
                            alt={product.name} 
                            width={1000} 
                            height={1000} 
                            className="w-max object-cover rounded-md" 
                        />
                    </div>

                    <div className="md:col-span-3 col-span-4">
                        <h1 className="text-2xl font-bold mt-4 text-center">{product.name}</h1>
                        <hr className="h-px my-2 mx-4" />
                        <div className="grid grid-cols-4">
                            <div className="md:col-span-2 col-span-4 md:px-4 md:mx-4">
                                <p className="text-sm text-gray-700 py-4 text-justify">{product.description}</p>
                                <p className="text-xs text-gray-500">
                                    Posted by - <span className="italic">{product.seller}</span>
                                </p>
                            </div>
                            <div className="md:col-span-2 col-span-4 md:border-l-2 md:pl-8 text-sm mt-4">
                                <p>Category: {product.category}</p>
                                <p>Size: {product.size}</p>
                                <p>Material: {product.material}</p>
                                <p>Color: {product.color}</p>
                                <p>Fit: {product.fit}</p>
                            </div>
                        </div>
                        <div className="place-content-end mt-4">
                            <div className="flex items-end justify-end space-x-8">
                                <p className="text-xl font-semibold mt-2 align-middle">{product.price}</p>
                                <Link href={"/marketplace/checkout"} className="px-4 py-2 text-sm font-medium bg-graphite text-white rounded shadow uppercase tracking-wider align-middle">Buy now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Trade */}
                <div className="mt-6 p-4 rounded-sm shadow-md bg-gray-50">
                    <h1 className="font-semibold mb-4">Want to trade your own clothes with this one?</h1>
                    <p>You can trade your own clothes with this one. Fill the form on the link below to start the trade.</p>
                    <p>After filling the form, you can wait for verification and monitor it on your profile.</p>
                    <hr className="h-px my-2" />
                    <Link href={`/marketplace/trade?id=${product.id}`}  className="pt-4 font-medium text-graphite underline tracking-wider text-sm capitalize hover:font-semibold">
                        Fill the form
                    </Link>
                </div>

                {/* Rekomendasi Produk */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">You might also like</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {relatedProducts.length > 0 ? (
                            relatedProducts.map((item) => (
                                <Link key={item.id} href={`/marketplace/${item.id}`}>
                                    <div className="bg-white p-4 rounded-md shadow hover:shadow-lg transition">
                                        <Image 
                                            src={item.image} 
                                            alt={item.name} 
                                            width={500} 
                                            height={500} 
                                            className="w-full h-64 object-cover rounded-md"
                                        />
                                        <p className="text-base font-semibold mt-2">{item.name}</p>
                                        <p className="text-sm text-gray-600">{item.price}</p>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="text-sm text-gray-500">No related products found.</p>
                        )}
                    </div>
                </div>
            </div> 
        </div>
    );
}
