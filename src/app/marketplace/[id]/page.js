export default function Detail({params}) {
    const { id } = params;

    const products = [
        {id: "1", name: "Oversize T-shirt", price: "Rp50.000", image: "/t-Shirt.jpg", description: "Oversize T-shirt, perfect shoulder cut."},
        {id: "2", name: "Premium Polo Shirt", price: "Rp125.000", image: "/polo.jpg", description: "Premium Polo Shirt, water resist."},
    ];

    const product =products.find((item) => item.id === id);
    
    if(!product) return <p className="text-center mt-4">Produk tidak ditemukan.</p>;

    return (
        <div>
            <img src="product.image" alt="{product.name}" className="w-full h-64 object-cover rounded-md" />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
}