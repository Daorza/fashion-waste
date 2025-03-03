import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-graphite text-amber-50 text-center px-4 py-2 mt-8">
            <div className="grid grid-cols-2 gap-4 p-8">
                <div>
                    <p className="font-bold uppercase text-4xl text-left">fashion waste</p>
                    <p className="mt-4 text-left pr-8 text-sm tracking-wider">Media pengolahan limbah fashion. <br/> Perpanjang siklus fashion dan jauhi fast fashion untuk keberlanjutan lingkungan.</p>
                    <div className="px-4 py-2 mt-2 text-left space-x-8">
                        <a href="#">Instagram</a>
                        <a href="#">TikTok</a>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="grid grid-rows-3 capitalize text-left ml-2 w-min">
                        <Link href="/about" className="hover:underline hover:font-medium">About</Link>
                        <Link href="/marketplace" className="hover:underline hover:font-medium">shop</Link>
                        <Link href="/sell" className="hover:underline hover:font-medium">Sell</Link>
                    </div>

                    <div className="grid grid-rows-3 capitalize text-left ml-2 w-max">
                        <a href="#" className="hover:underline hover:font-medium">FAQ </a>
                        <a href="#" className="hover:underline hover:font-medium">Privacy & Policy</a>
                        <a href="#" className="hover:underline hover:font-medium">Terms & Condition</a>
                    </div>
                </div>
            </div>
            <hr className="h-1 px-2 py-3"/>
            <p className="capitalize text-sm mb-2">© copy 2025 Fashion Waste | All rights reserved.</p>
        </footer>
    )
}