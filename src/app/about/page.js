export default function About() {
    return (
        <main className="flex items-center justify-center py-12 bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
                <h1 className="text-3xl font-bold text-black mb-4 text-center">About Us</h1>
                <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
                    Welcome to our platform! We are committed to redefining the way people trade, purchase, and interact.  
                    Our mission is to foster a community-driven marketplace that promotes sustainability, seamless transactions,  
                    and an enjoyable shopping experience.
                </p>

                <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-white">
                        <h2 className="text-xl font-semibold text-black flex items-center gap-2">
                            🌍 Our Mission
                        </h2>
                        <p className="text-gray-600 mt-2">
                            To create a sustainable and user-friendly marketplace where individuals can exchange goods  
                            and services effortlessly while promoting responsible consumption.
                        </p>
                    </div>
                    
                    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-white">
                        <h2 className="text-xl font-semibold text-black flex items-center gap-2">
                            🚀 Our Vision
                        </h2>
                        <p className="text-gray-600 mt-2">
                            To be the leading global platform for secure, seamless, and rewarding exchanges,  
                            empowering users to make conscious and impactful choices in their transactions.
                        </p>
                    </div>

                    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-white">
                        <h2 className="text-xl font-semibold text-black flex items-center gap-2">
                            🔍 Transparency & Trust
                        </h2>
                        <p className="text-gray-600 mt-2">
                            We believe in building a trustworthy community by ensuring safe and verified transactions,  
                            giving our users the confidence to trade with ease.
                        </p>
                    </div>

                    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-white">
                        <h2 className="text-xl font-semibold text-black flex items-center gap-2">
                            ♻️ Sustainability
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Our platform is designed to extend the lifecycle of products by encouraging reuse, trade,  
                            and conscious consumerism, reducing waste and promoting eco-friendly habits.
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-black mb-3">Meet Our Team</h2>
                    <p className="text-gray-600 mb-6">
                        We are a team of passionate individuals dedicated to making your experience better every day.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border shadow-md hover:shadow-lg">
                                <img src="/images/dummy_photo.jpg" alt="Nugroho Nur Cahyo" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-md font-semibold text-black">Nugroho Nur Cahyo</h3>
                            <p className="text-gray-600">Role / Position</p>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border shadow-md hover:shadow-lg">
                                <img src="/images/dummy_photo.jpg" alt="Muhammad Reza Hafizzi" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-md font-semibold text-black">Muhammad Reza Hafizzi</h3>
                            <p className="text-gray-600">Role / Position</p>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border shadow-md hover:shadow-lg">
                                <img src="/images/dummy_photo.jpg" alt="Naufal Bintanga Pradana H" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-md font-semibold text-black">Naufal Bintanga Pradana H</h3>
                            <p className="text-gray-600">Role / Position</p>
                        </div>
                    </div>
                </div>

                <section className="mt-12 space-y-6">
                    <div id="faq" className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-white text-left">
                        <h2 className="text-2xl font-semibold text-black">Frequently Asked Questions</h2>
                        <ul className="mt-4 space-y-4">
                            <li><strong>How does the platform work?</strong> Our platform allows users to buy, sell, and exchange fashion items with ease.</li>
                            <li><strong>Is there a fee for selling items?</strong> Listing items is free, but a small service fee applies upon successful transactions.</li>
                            <li><strong>How do I ensure the quality of second-hand clothing?</strong> We encourage sellers to provide detailed descriptions and images, and buyers to check seller ratings.</li>
                        </ul>
                    </div>
                    <div id="terms" className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-white text-left">
                        <h2 className="text-2xl font-semibold text-black">Terms & Conditions</h2>
                        <ul className="mt-4 space-y-4">
                            <li>Users must provide accurate information when listing items.</li>
                            <li>Any fraudulent activity will result in account suspension.</li>
                            <li>Transactions made outside the platform are not protected by our policies.</li>
                        </ul>
                    </div>
                    <div id="privacy" className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-white text-left">
                        <h2 className="text-2xl font-semibold text-black">Privacy Policy</h2>
                        <ul className="mt-4 space-y-4">
                            <li>We collect only necessary information to facilitate transactions.</li>
                            <li>Your data is securely stored and never shared without consent.</li>
                            <li>You can request account deletion and data removal at any time.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    );
}
