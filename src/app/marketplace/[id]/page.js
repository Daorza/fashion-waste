"use client";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

const products = [
    // Data yang sudah ada
    { id: "1", name: "Oversize T-shirt", price: "Rp50.000", image: "/models/models1.jpg", description: "Premium-quality fabric, soft and breathable for all-day comfort. Designed with precision stitching for durability and a stylish look. Wrinkle-resistant, fade-resistant, and easy to mix and match for any occasion." },
    { id: "2", name: "Premium Polo Shirt", price: "Rp125.000", image: "/models/models2.jpg", description: "Premium-quality fabric, soft and breathable for all-day comfort. Designed with precision stitching for durability and a stylish look. Wrinkle-resistant, fade-resistant, and easy to mix and match for any occasion." },
  
    // 4 Dummy data baru
    { 
      id: "3", 
      name: "Classic Denim Jacket", 
      price: "Rp185.000", 
      image: "/models/models3.jpg",
      description: "Durable denim material with reinforced stitching. Features adjustable cuffs and a timeless design that pairs well with both casual and semi-formal outfits. Fade-resistant and pre-shrunk for long-lasting wear."
    },
    { 
      id: "4", 
      name: "Slim Fit Chinos", 
      price: "Rp150.000", 
      image: "/models/models4.jpg",
      description: "Lightweight cotton-blend fabric with stretch for comfort. Tailored slim fit design with reinforced belt loops and functional pockets. Perfect for smart-casual looks and everyday wear."
    },
    { 
      id: "5", 
      name: "Oversize Flannel Shirt", 
      price: "Rp95.000", 
      image: "/models/models5.jpg",
      description: "Soft brushed flannel material in classic plaid patterns. Features a relaxed oversize fit with roll-up sleeves and double chest pockets. Ideal for layering or standalone wear in cooler weather."
    },
    { 
      id: "6", 
      name: "Denim Bucket Hat", 
      price: "Rp75.000", 
      image: "/models/models6.jpg",
      description: "Sturdy denim construction with a curved brim for sun protection. Adjustable chin strap and breathable lining for all-day comfort. A trendy accessory that complements any casual outfit."
    },
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
        <div className="grid place-items-center w-full py-8">
            <div className="max-w-4xl">
            <div className="grid grid-cols-4 p-4 bg-gray-50 rounded-sm shadow-md">
                <div className="md:col-span-1 col-span-4">
                    <Image src={product.image} alt={product.name} width={1000} height={1000} className="w-max object-cover rounded-md" />
                </div>

                <div className="md:col-span-3 col-span-4">
                    <h1 className="text-2xl font-bold mt-4 text-center">{product.name}</h1>
                    <hr className="h-px my-2 mx-4" />
                    <div className="">
                        <div className="grid grid-cols-4">
                            <div className="md:col-span-2 col-span-4 md:px-4 md:mx-4 md:grid md:grid-rows-2">
                                <div>
                                    <p className="text-sm text-gray-700 py-4 mr-2 text-justify">{product.description}</p>
                                </div>
                            </div>
                            <div className="md:col-span-2 col-span-4">
                                <div className="mt-4 text-sm text-justify md:border-l-2 md:pl-8">
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
        </div>
    );
}
