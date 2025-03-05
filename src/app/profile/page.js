import Image from "next/image";

export default function Profile() {
    return (
        <main>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center p-2 text-sm font-medium">
                30% OFF-FULL PRICE AND SALE
            </div>

            <nav className="border-b py-3 bg-gray-50">
                <div className="container mx-auto px-4 flex justify-between text-sm">
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition">Help</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition">Validate</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition">Orders & Returns</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition">Gift Cards</a>
                    </div>
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
                            className="w-20 h-20 rounded-full border-4 border-gray-100 object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">arixa</h1>
                        <div className="flex items-center mt-1">
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                                $0 points to spend
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
                    <h2 className="font-bold text-lg mb-4 text-blue-800">YOUR VOUCHERS</h2>
                    <div className="space-y-4">
                        <p className="text-gray-600">🎁 You don't have any vouchers currently.</p>
                        <p className="text-gray-600">🔒 You need 100 more points to unlock discount vouchers</p>
                        <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition">
                            HOW TO EARN MORE POINTS
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-bold text-lg text-blue-800 mb-2">REWARDS</h2>
                            <p className="text-gray-600 max-w-md">
                                This is your personal space. Track your membership status and manage all 
                                your earned points and rewards.
                            </p>
                        </div>
                        <Image 
                            src="/images/medal.png" 
                            alt="Reward Badge" 
                            width={96} 
                            height={96} 
                            className="w-24 h-24 object-contain"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
