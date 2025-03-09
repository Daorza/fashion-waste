"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Footer() {
    const pathname = usePathname();
    return (
        <footer className={`bg-graphite text-amber-50 text-center px-4 py-2 ${pathname == "/auth/login" || pathname == "/auth/register" ? "hidden" : "block"}`}>
            {/* Container utama */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-8">
                {/* Kolom pertama: Deskripsi dan media sosial */}
                <div className="text-left">
                    <p className="font-bold uppercase text-3xl md:text-4xl tracking-wider">fastainable</p>
                    <p className="mt-4 text-sm tracking-wide max-w-sm md:max-w-md">
                    Extend the life cycle of fashion and move away from fast fashion for a more sustainable future. Embrace conscious consumption and responsible recycling to reduce environmental impact.                     </p>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4">
                        <Link href="#" className="hover:underline hover:font-medium flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 mt-1 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            Instagram
                        </Link>
                        <Link href="#" className="hover:underline hover:font-medium flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 mt-1 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            TikTok
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-cols-3 md:grid-cols-1 capitalize text-left">
                        <Link href="/marketplace" className="hover:underline hover:font-medium">Shop</Link>
                        <Link href="/blog" className="hover:underline hover:font-medium">Blog</Link>
                        <Link href="/about" className="hover:underline hover:font-medium">About</Link>
                    </div>
                    <hr className="h-px bg-gray-700 border-0 md:hidden" />
                    <div className="grid grid-cols-3 md:grid-cols-1 capitalize text-left">
                        <Link href="/about/#faq" className="hover:underline hover:font-medium">FAQ</Link>
                        <Link href="/about/#terms" className="hover:underline hover:font-medium">Terms & Condition</Link>
                        <Link href="/about/#privacy" className="hover:underline hover:font-medium">Privacy & Policy</Link>
                    </div>
                </div>
            </div>

            <hr className="h-px bg-gray-700 border-0 my-4" />

            <p className="capitalize text-xs md:text-sm mb-2 px-4">
                © copy 2025 Fashion Waste | All rights reserved.
            </p>
        </footer>
    );
}