export default function About() {
    return (
        <div className="bg-gray-100 flex flex-col min-h-screen">
            <main className="flex-grow max-w-4xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-xl">
                <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
                <p className="mt-6 text-gray-700 leading-relaxed">
                    Welcome to <span className="text-green-600 font-semibold">Fastainable</span>! Our mission is to reduce the negative impact of fast fashion by promoting sustainable clothing practices.
                    We provide a platform where you can buy high-quality second-hand clothes and exchange your old outfits for something new to you.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                    Fast fashion contributes to excessive waste and environmental harm. By choosing to shop second-hand and participate in clothing exchanges, you help extend the life cycle of garments,
                    reduce textile waste, and support a more eco-friendly fashion industry.
                </p>
                <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800">Why Choose Fastainable?</h3>
                    <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                        <li>Reduce textile waste and environmental pollution</li>
                        <li>Affordable, high-quality pre-loved clothing</li>
                        <li>Exchange system to refresh your wardrobe sustainably</li>
                        <li>Support ethical and responsible fashion</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}