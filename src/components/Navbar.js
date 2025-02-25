import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-amber-600 px-4 py-2 shadow-md text-amber-50">
            <div className="flex justify-between">
                <div>
                    <Link href="/" className="font-bold text-lg">Fashion Waste</Link>
                </div>
                <div>
                    <Link href="/about" className="mx-4">About</Link>
                    <Link href="/marketplace" className="mx-4">Marketplace</Link>
                </div>
            </div>
        </nav>
    );
}