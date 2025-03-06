import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-graphite text-amber-50 text-center px-4 py-2 mt-8">
            {/* Container utama */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-8">
                {/* Kolom pertama: Deskripsi dan media sosial */}
                <div className="text-left">
                    <p className="font-bold uppercase text-3xl md:text-4xl">fastainable</p>
                    <p className="mt-4 text-sm md:text-base tracking-wider">
                        Media pengolahan limbah fashion. <br />
                        Perpanjang siklus fashion dan jauhi fast fashion untuk keberlanjutan lingkungan.
                    </p>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4">
                        <a href="#" className="hover:underline hover:font-medium">Instagram</a>
                        <a href="#" className="hover:underline hover:font-medium">TikTok</a>
                    </div>
                </div>

                {/* Kolom kedua: Navigasi */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-rows-3 capitalize text-left">
                        <Link href="/about" className="hover:underline hover:font-medium">About</Link>
                        <Link href="/marketplace" className="hover:underline hover:font-medium">Shop</Link>
                        <Link href="/sell" className="hover:underline hover:font-medium">Sell</Link>
                    </div>

                    <div className="grid grid-rows-3 capitalize text-left">
                        <a href="#" className="hover:underline hover:font-medium">FAQ</a>
                        <a href="#" className="hover:underline hover:font-medium">Privacy & Policy</a>
                        <a href="#" className="hover:underline hover:font-medium">Terms & Condition</a>
                    </div>
                </div>
            </div>

            {/* Garis pemisah */}
            <hr className="h-px bg-gray-700 border-0 my-4" />

            {/* Hak cipta */}
            <p className="capitalize text-xs md:text-sm mb-2 px-4">
                © copy 2025 Fashion Waste | All rights reserved.
            </p>
        </footer>
    );
}