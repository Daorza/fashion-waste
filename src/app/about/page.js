export default function About() {
    return (
        <main className="flex items-center justify-center py-12 bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
                <h1 className="text-3xl font-bold text-black mb-4">About Us</h1>
                <p className="text-gray-600 mb-6">
                    Welcome to our platform! We are dedicated to providing the best experience for our users.
                    Our mission is to create a seamless and enjoyable way to trade, purchase, and interact within
                    our marketplace.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-black">Our Mission</h2>
                        <p className="text-gray-600 mt-2">
                            To create a sustainable and user-friendly marketplace for trading goods and services.
                        </p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-black">Our Vision</h2>
                        <p className="text-gray-600 mt-2">
                            To be the go-to platform for seamless, secure, and rewarding exchanges worldwide.
                        </p>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-black mb-3">Meet Our Team</h2>
                    <p className="text-gray-600 mb-6">
                        We are a team of passionate individuals dedicated to making your experience better every day.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition text-center">
                            <div className="w-24 h-24 mx-auto mb-3 rounded-lg overflow-hidden">
                                <img 
                                    src="/images/dummy_photo.jpg" 
                                    alt="Person 1" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-black">Nugroho Nur Cahyo</h3>
                            <p className="text-gray-600">Role / Position</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition text-center">
                            <div className="w-24 h-24 mx-auto mb-3 rounded-lg overflow-hidden">
                                <img 
                                    src="/images/dummy_photo.jpg" 
                                    alt="Person 2" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-black">Muhammad Reza Hafizzi</h3>
                            <p className="text-gray-600">Role / Position</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition text-center">
                            <div className="w-24 h-24 mx-auto mb-3 rounded-lg overflow-hidden">
                                <img 
                                    src="/images/dummy_photo.jpg" 
                                    alt="Person 3" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-black">Naufal Bintanga Pradana H</h3>
                            <p className="text-gray-600">Role / Position</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
