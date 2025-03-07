import Link from "next/link";

export default function GiftCards() {
    return (
        <main>
            <nav className="border-b py-3 bg-white">
                <div className="container mx-auto px-4 flex justify-center space-x-4 text-sm flex-wrap">
                    <Link href="/seller_profile/" className="text-black hover:text-gray-600 transition">Profile</Link>
                    <Link href="/seller_profile/validate/" className="text-black">Validate</Link>
                    <Link href="/seller_profile/orders_and_returns/" className="text-black hover:text-gray-600 transition">Orders & Returns</Link>
                    <Link href="/seller_profile/gift_cards/" className="text-black font-bold hover:text-gray-600 transition">Gift Cards</Link>
                </div>
            </nav>

            <div className="flex items-center justify-center py-12 bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
                    <h1 className="text-2xl font-bold text-black mb-4">Gift Cards</h1>
                    <p className="text-gray-600 mb-6">Purchase or redeem gift cards for exclusive discounts and rewards.</p>
                    
                    <div className="mb-4 text-left">
                        <label className="block text-sm font-medium text-gray-700">Enter Gift Card Code</label>
                        <input type="text" className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-gray-300" placeholder="Enter code here" />
                    </div>
                    <button className="bg-black text-white px-4 py-2 rounded-lg w-full hover:bg-gray-800 transition">Redeem</button>

                    <div className="mt-6 border-t pt-6">
                        <h2 className="text-lg font-bold text-black mb-3">Purchase a Gift Card</h2>
                        <p className="text-gray-600 mb-4">Select an amount and send a gift card to a friend or yourself.</p>
                        <select className="p-2 w-full border rounded-lg focus:ring focus:ring-gray-300">
                            <option value="$10">$10</option>
                            <option value="$25">$25</option>
                            <option value="$50">$50</option>
                            <option value="$100">$100</option>
                        </select>
                        <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg w-full hover:bg-gray-800 transition">Buy Now</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
