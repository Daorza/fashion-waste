export async function generateParams() {
    const products = [
        {id: "1"},
        {id: "2"},
    ]

    return products.map((product) => ({
        id: product.id,
    }))
}
export default  function ProductDetail({params}) {
    const { id } = params;

    const products = [
        {id: "1", name: "Oversize T-shirt", price: "Rp50.000", image: "/t-shirt.jpg", description: "Oversize T-shirt, perfect shoulder cut."},
        {id: "2", name: "Premium Polo Shirt", price: "Rp125.000", image: "/polo.jpg", description: "Premium Polo Shirt, water resist."},
    ];

    const product = products.find((item) => item.id === id);
    
    if(!product) return <p className="text-center mt-4">Produk tidak ditemukan.</p>;

    return (
        <div>
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
            <p className="text-lg text-gray-700 mt-2">{product.description}</p>
            <p className="text-xl font-semibold mt-2">{product.price}</p>
        </div>
    );
}