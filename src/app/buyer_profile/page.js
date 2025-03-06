import Link from "next/link";
import Image from "next/image";
export default function Profile() {
    return (
        <main>
            <div className="bg-black text-white text-center p-2 text-sm font-medium">
                <span className="font-bold">30%</span> OFF-FULL PRICE AND SALE
            </div>

            <nav className="border-b py-3 bg-white">
                <div className="container mx-auto px-4 flex justify-center space-x-10 text-sm">
                    <Link href="/profile/validate" className="text-black hover:text-gray-600 transition">Validate</Link>
                    <a href="#" className="text-black hover:text-gray-600 transition">Orders & Returns</a>
                    <a href="#" className="text-black hover:text-gray-600 transition">Gift Cards</a>
                </div>
            </nav>

            <div className="container mx-auto px-4 py-8">
                {/* Profile Header with Photo */}
                <div className="flex items-center mb-6">
                    <div className="mr-4">
                        <Image 
                            src="/images/cat.jpg" 
                            alt="Profile Photo" 
                            width={80} 
                            height={80} 
                            className="w-20 h-20 rounded-full border-4 border-gray-300 object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-black">arixa</h1>
                        <div className="flex items-center mt-1">
                            <span className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm font-medium">
                                $20 points to spend
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-6 mb-8 border border-gray-200">
                    <h2 className="font-bold text-lg mb-4 text-black">YOUR VOUCHERS</h2>
                    <div className="space-y-4">
                        <p className="text-gray-600">🎁 You don't have any vouchers currently.</p>
                        <p className="text-gray-600">🔒 You need 100 more points to unlock discount vouchers</p>
                        <a href="#" className="inline-flex items-center text-black font-semibold hover:text-gray-600 transition">
                            HOW TO EARN MORE POINTS
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Purchase History */}
                <div className="bg-gray-100 rounded-xl p-6 border border-gray-200">
                    <h2 className="font-bold text-lg mb-4 text-black">PURCHASE HISTORY</h2>
                    <div className="space-y-4">
                        <div className="p-4 bg-white rounded-lg shadow">
                            <h3 className="text-black font-semibold">Product Name</h3>
                            <p className="text-gray-600">Order Date: 2024-03-06</p>
                            <p className="text-gray-600">Status: Delivered</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow">
                            <h3 className="text-black font-semibold">Product Name</h3>
                            <p className="text-gray-600">Order Date: 2024-02-15</p>
                            <p className="text-gray-600">Status: Shipped</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}