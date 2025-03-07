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
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
                    <h1 className="text-2xl font-bold text-black mb-4">Validate Your Trade</h1>
                    <p className="text-gray-600 mb-6">Confirm the item you want to trade in our clothing exchange program.</p>
                    
                    <form>
                        <div className="mb-4 text-left">
                            <label className="block text-sm font-medium text-gray-700">Item Name</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-gray-300" placeholder="Enter item name" />
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <select className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-gray-300">
                                <option value="">Select category</option>
                                <option value="tops">Tops</option>
                                <option value="bottoms">Bottoms</option>
                                <option value="dresses">Dresses</option>
                                <option value="outerwear">Outerwear</option>
                                <option value="accessories">Accessories</option>
                            </select>
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-sm font-medium text-gray-700">Condition</label>
                            <select className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-gray-300">
                                <option value="">Select condition</option>
                                <option value="new">New with Tags</option>
                                <option value="like-new">Like New</option>
                                <option value="gently-used">Gently Used</option>
                                <option value="worn">Worn but Usable</option>
                            </select>
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-sm font-medium text-gray-700">Upload Image</label>
                            <input type="file" className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-gray-300" />
                        </div>
                        <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg w-full hover:bg-gray-800 transition">Submit Trade</button>
                    </form>
                </div>
            </div>
        </main>
    );
}
