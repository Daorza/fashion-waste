import Image from "next/image";

export default function Blog() {
    const posts = [
        { id: 1, title: "The Future of Fashion", excerpt: "Exploring sustainable and tech-driven trends.", image: "/images/blog1.jpg" },
        { id: 2, title: "Minimalist Wardrobe", excerpt: "How to build a stylish, clutter-free closet.", image: "/images/blog2.jpg" },
        { id: 3, title: "Streetwear Evolution", excerpt: "The rise of urban fashion and its impact.", image: "/images/blog3.jpg" },
    ];

    return (
        <main className="bg-gray-100 min-h-screen py-12 px-6 sm:px-12">
            <div className="max-w-4xl mx-auto text-center mb-8">
                <h1 className="text-3xl font-bold text-black mb-2">Latest Blog Posts</h1>
                <p className="text-gray-600">Stay updated with the latest trends and insights.</p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition hover:shadow-xl">
                        <Image src={post.image} width={400} height={250} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-black mb-2">{post.title}</h2>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <button className="text-black font-semibold hover:underline">Read More →</button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
