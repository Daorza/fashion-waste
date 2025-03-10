import Link from "next/link";
import Image from "next/image";

export default function Validate() {
    return (
        <main>
            <nav className="border-b py-3 bg-white">
                <div className="container mx-auto px-4 flex justify-center space-x-4 text-sm flex-wrap">
                    <Link href="/seller_profile/" className="text-black hover:text-gray-600 transition">Profile</Link>
                    <Link href="/seller_profile/validate/" className="text-black font-bold">Validate</Link>
                    <Link href="/seller_profile/orders_and_returns/" className="text-black hover:text-gray-600 transition">Orders & Returns</Link>
                    <Link href="/seller_profile/gift_cards/" className="text-black hover:text-gray-600 transition">Gift Cards</Link>
                </div>
            </nav>
            
            <div className="flex items-center justify-center py-12 bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
                    <h1 className="text-2xl font-bold text-black mb-4">Validate Your Trade</h1>
                    <p className="text-gray-600 mb-6">Review and confirm if you want to proceed with the trade.</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        {/* Your Item */}
                        <div className="border p-4 rounded-lg shadow-sm bg-gray-50">
                            <h2 className="text-lg font-semibold text-black">Your Item</h2>
                            <Image src="/models/models6.jpg" width={500} height={500} alt="Your Item" className="mx-auto mt-2 h-96 object-cover rounded-md" />
                            <p className="mt-2 text-gray-700">Item Name: Tom Hilfiger Set</p>
                            <p className="text-gray-700">Category: Set</p>
                            <p className="text-gray-700">Condition: Gently Used</p>
                        </div>
                        
                        {/* Requested Item */}
                        <div className="border p-4 rounded-lg shadow-sm bg-gray-50">
                            <h2 className="text-lg font-semibold text-black">Trade With</h2>
                            <Image src="/models/models3.jpg" width={500} height={500} alt="Requested Item" className="mx-auto mt-2 h-96 object-cover rounded-md" />
                            <p className="mt-2 text-gray-700">Item Name: Pink Prom Dress</p>
                            <p className="text-gray-700">Category: Dress</p>
                            <p className="text-gray-700">Condition: Like New</p>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center space-x-4">
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Accept Trade</button>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Decline</button>
                </div>
                </div>
            </div>
        </main>
    );
}
