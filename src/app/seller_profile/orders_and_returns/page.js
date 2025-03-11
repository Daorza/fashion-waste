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

                <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200">
                    <h2 className="font-bold text-lg mb-4 py-4 text-black">Recent Orders</h2>
                    <div className="space-y-4">

                        <div className="bg-slate-100 p-4 rounded-lg shadow-sm border border-gray-300">
                            <p className="text-gray-600">Order #12345</p>
                            <p className="font-bold text-black">Status: <span className="text-green-500">Shipped</span></p>

                            <div className="mt-2 text-sm text-gray-700">
                                <p><strong>Item:</strong> Blue Denim Jacket</p>
                                <p><strong>Quantity:</strong> 1</p>
                                <p><strong>Price:</strong> Rp45.00</p>
                                <p><strong>Estimated Delivery:</strong> March 12, 2025</p>
                            </div>
                        </div>

                        <div className="bg-slate-100 p-4 rounded-lg shadow-sm border border-gray-300">
                            <p className="text-gray-600">Order #12346</p>
                            <p className="font-bold text-black">Status: <span className="text-yellow-500">Processing</span></p>

                            <div className="mt-2 text-sm text-gray-700">
                                <p><strong>Item:</strong> Black Leather Boots</p>
                                <p><strong>Quantity:</strong> 2</p>
                                <p><strong>Price:</strong> Rp120.00</p>
                                <p><strong>Estimated Delivery:</strong> March 15, 2025</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h2 className="font-bold text-lg text-black mb-4">Returns & Refunds</h2>
                    <p className="text-gray-600 mb-4">Need to return an item? Try to contact our customer service and follow the instructions.</p>
                    <Link href="/about/#terms" className="inline-block text-base text-graphite underline px-2 rounded-lg font-medium hover:font-semibold transition tracking-wider">
                        Ask For Return
                    </Link>
                </div>
            </div>
        </main>
    );
}
