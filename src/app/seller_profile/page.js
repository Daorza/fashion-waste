import Link from "next/link";
import Image from "next/image";
export default function Profile() {
    return (
        <main>
            <nav className="border-b py-3 bg-white">
                <div className="container mx-auto px-4 flex justify-center space-x-4 text-sm flex-wrap">
                    <Link href="/seller_profile/" className="text-black font-bold hover:text-gray-600 transition">Profile</Link>
                    <Link href="/seller_profile/validate/" className="text-black">Validate</Link>
                    <Link href="/seller_profile/orders_and_returns/" className="text-black hover:text-gray-600 transition">Orders & Returns</Link>
                    <Link href="/seller_profile/gift_cards/" className="text-black hover:text-gray-600 transition">Gift Cards</Link>
                </div>
            </nav>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                    <div className="mr-0 sm:mr-4 mb-4 sm:mb-0">
                        <Image 
                            src="/images/cat.jpg" 
                            alt="Profile Photo" 
                            width={80} 
                            height={80} 
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-gray-300 object-cover"
                        />
                    </div>
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl font-bold text-black">arixa</h1>
                        <div className="flex justify-center sm:justify-start mt-1">
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
                
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
                        <div className="text-center sm:text-left">
                            <h2 className="font-bold text-lg text-black mb-2">REWARDS</h2>
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
                            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mt-4 sm:mt-0"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
