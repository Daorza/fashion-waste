import Link from "next/link";

export default function OrdersReturns() {
    return (
        <main>
            <nav className="border-b py-3 bg-white">
                <div className="container mx-auto px-4 flex justify-center space-x-4 text-sm flex-wrap">
                    <Link href="/seller_profile/" className="text-black hover:text-gray-600 transition">Profile</Link>
                    <Link href="/seller_profile/validate/" className="text-black">Validate</Link>
                    <Link href="/seller_profile/orders_and_returns/" className="text-black font-bold hover:text-gray-600 transition">Orders & Returns</Link>
                    <Link href="/seller_profile/gift_cards/" className="text-black hover:text-gray-600 transition">Gift Cards</Link>
                </div>
            </nav>

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-black mb-6">Your Orders</h1>

                <div className="bg-gray-100 rounded-xl p-6 mb-8 border border-gray-200">
                    <h2 className="font-bold text-lg mb-4 text-black">Recent Orders</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-gray-600">Order #12345</p>
                                    <p className="font-bold text-black">Status: <span className="text-green-500">Shipped</span></p>
                                </div>
                                <Link href="#" className="text-blue-600 font-semibold hover:underline">View Details</Link>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-gray-600">Order #12346</p>
                                    <p className="font-bold text-black">Status: <span className="text-yellow-500">Processing</span></p>
                                </div>
                                <Link href="#" className="text-blue-600 font-semibold hover:underline">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h2 className="font-bold text-lg text-black mb-4">Returns & Refunds</h2>
                    <p className="text-gray-600 mb-4">Need to return an item? Select the order and follow the instructions.</p>
                    <Link href="#" className="inline-block bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">Start a Return</Link>
                </div>
            </div>
        </main>
    );
}
