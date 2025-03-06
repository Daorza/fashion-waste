"use client";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

const products = [
    { id: "1", name: "Oversize T-shirt", price: "Rp50.000", image: "/models/models1.jpg", description: "Premium-quality fabric, soft and breathable for all-day comfort. Designed with precision stitching for durability and a stylish look. Wrinkle-resistant, fade-resistant, and easy to mix and match for any occasion." },
    { id: "2", name: "Premium Polo Shirt", price: "Rp125.000", image: "/models/models2.jpg", description: "Premium-quality fabric, soft and breathable for all-day comfort. Designed with precision stitching for durability and a stylish look. Wrinkle-resistant, fade-resistant, and easy to mix and match for any occasion." },
    { id: "3", name: "Oversize T-shirt", price: "Rp50.000", image: "/models/models3.jpg", description: "Premium-quality fabric, soft and breathable for all-day comfort. Designed with precision stitching for durability and a stylish look. Wrinkle-resistant, fade-resistant, and easy to mix and match for any occasion." },
    { id: "4", name: "Premium Polo Shirt", price: "Rp125.000", image: "/models/models1.jpg", description: "Premium-quality fabric, soft and breathable for all-day comfort. Designed with precision stitching for durability and a stylish look. Wrinkle-resistant, fade-resistant, and easy to mix and match for any occasion." },
    { id: "5", name: "Oversize T-shirt", price: "Rp50.000", image: "/models/models2.jpg", description: "Premium-quality fabric, soft and breathable for all-day comfort. Designed with precision stitching for durability and a stylish look. Wrinkle-resistant, fade-resistant, and easy to mix and match for any occasion." },
    { id: "6", name: "Premium Polo Shirt", price: "Rp125.000", image: "/models/models3.jpg", description: "Premium-quality fabric, soft and breathable for all-day comfort. Designed with precision stitching for durability and a stylish look. Wrinkle-resistant, fade-resistant, and easy to mix and match for any occasion." },
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

                <div className="col-span-4">
                    <h1 className="text-2xl font-bold mt-4 text-center">{product.name}</h1>
                    <hr className="h-px my-2 mx-4" />

                    <div className="">
                        <div className="grid grid-cols-4">
                            <div className="col-span-2 px-4 mx-4 grid grid-rows-2">
                                <div>
                                    <p className="text-sm text-gray-700 py-4 mr-2 text-justify">{product.description}</p>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="mt-4 text-sm text-justify border-l-2 pl-8">
                                    <p>Category: Oversize</p>
                                    <p>Size: XL</p>
                                    <p>Material: Poliester</p>
                                    <p>Color: Black</p>
                                    <p>Fit: Regular</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="place-content-end mt-4">
                                <div className="flex items-end justify-end space-x-8">
                                    <p className="text-xl font-semibold mt-2 align-middle">{product.price}</p>
                                    <p className="px-4 py-2 text-sm font-medium bg-graphite text-white rounded shadow uppercase tracking-wider align-middle">Buy now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 p-4 rounded-sm shadow-md bg-gray-50">
                <div>
                    <h1 className=" font-semibold mb-4">Want to trade your own clothes with this one?</h1>
                    <p>You can trade your own clothes with this one. Fill the form on the link below to start the trade.</p>
                    <p>After filling the form, you can wait the verification and monitor it on your profile.</p>
                    <hr className="h-px my-2" />
                    <a href="" className="pt-4 font-medium text-graphite underline tracking-wider text-sm capitalize hover:font-semibold">fill the form </a>
                </div>
            </div>
        </div>
    );
}
