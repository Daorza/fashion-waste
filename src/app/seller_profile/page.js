"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Profile() {
    const [points, setPoints] = useState(20);
    const pointsNeeded = 100;
    const progress = (points / pointsNeeded) * 100;

    return (
        <main className="bg-white text-black min-h-screen">
            <nav className="border-b border-gray-300 py-3 bg-gray-100 shadow-sm">
                <div className="max-w-3xl mx-auto px-4 flex justify-center space-x-4 text-sm flex-wrap">
                    <Link href="/seller_profile/" className="text-black font-bold hover:text-gray-600 transition">Profile</Link>
                    <Link href="/seller_profile/validate/" className="text-black hover:text-gray-600 transition">Validate</Link>
                    <Link href="/seller_profile/orders_and_returns/" className="text-black hover:text-gray-600 transition">Orders & Returns</Link>
                    <Link href="/seller_profile/gift_cards/" className="text-black hover:text-gray-600 transition">Gift Cards</Link>
                </div>
            </nav>

            <div className="max-w-3xl mx-auto px-4 py-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                    <div className="mr-0 sm:mr-4 mb-4 sm:mb-0">
                        <Image 
                            src="/images/cat.jpg" 
                            alt="Profile Photo" 
                            width={80} 
                            height={80} 
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-gray-400 object-cover"
                        />
                    </div>
                    <div className="ml-4 text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl font-bold text-black">arixa</h1>
                        <div className="flex justify-center sm:justify-start mt-2">
                            <span className="bg-gray-200 text-black px-4 py-2 rounded-full text-sm tracking-wide font-medium shadow-md flex items-center space-x-1 border border-gray-400">
                                <span>⭐</span>
                                <span>{points} points to spend</span>
                            </span>
                        </div>
                        <button className="mt-4 px-2 text-sm text-gray-600 hover:text-black underline transition">
                            Edit Profile
                        </button>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-6 mb-8 border border-gray-300">
                    <h2 className="font-bold text-lg mb-4 text-black">Points Progress</h2>
                    <div className="relative w-full bg-gray-300 rounded-full h-4">
                        <div className="bg-green-500 h-4 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">You need {pointsNeeded - points} more points to unlock your next voucher.</p>
                </div>

                <div className="bg-gray-100 rounded-xl p-6 border border-gray-300 mb-8 shadow-sm">
                    <h2 className="font-bold text-lg text-black mb-4">Recent Activities</h2>
                    <ul className="space-y-2 text-gray-600 ml-2">
                        <li>🪙 Purchased "Wireless Mouse" - Earned 10 points</li>
                        <li>✅ Referred a friend - Earned 15 points</li>
                        <li>🔍 Validated account - Earned 5 points</li>
                    </ul>
                </div>

                <div className="bg-gray-100 rounded-xl p-6 border border-gray-300 shadow-sm">
                    <h2 className="font-bold text-lg text-black mb-2">Security Settings</h2>
                    <p className="text-gray-600 max-w-md mb-4 ml-2">
                        Manage your account security and privacy settings.
                    </p>
                    <Link href="/about/#privacy" className="px-4 py-2 ml-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition">
                        Change Password
                    </Link>
                </div>
            </div>
        </main>
    );
}
