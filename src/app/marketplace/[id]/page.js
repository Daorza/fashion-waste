import { notFound } from "next/navigation";
import Image from "next/image";

const products = [
    {id: "1", name: "Oversize T-shirt", price: "Rp50.000", image: "/t-shirt.jpg", description: "Oversize T-shirt, perfect shoulder cut."},
    {id: "2", name: "Premium Polo Shirt", price: "Rp125.000", image: "/polo.jpg", description: "Premium Polo Shirt, water resist."},
];

export default async function ProductDetail({params}) {
    if (!params || !params.id) {
        console.error("Error: params undefined atau params.id tidak tersedia", params);
        return notFound();
    }

    const id = decodeURIComponent(params.id);
    const product = products.find((item) => item.id === params.id);

    if (!product) {
        return notFound();
    }
    
    // if(!product) return <p className="text-center mt-4">Produk tidak ditemukan.</p>;

    return (
        <div>
            <Image src={product.image} alt={product.name} width={1000} height={1000} className="w-full h-64 object-cover rounded-md" />
            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
            <p className="text-lg text-gray-700 mt-2">{product.description}</p>
            <p className="text-xl font-semibold mt-2">{product.price}</p>
        </div>
    );
}