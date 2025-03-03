import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-graphite text-amber-50 text-center px-4 py-2 mt-8">
            <div className="grid grid-cols-2 gap-4 p-8">
                <div>
                    <p className="font-bold uppercase text-4xl text-left">fashion waste</p>
                    <p className="mt-4 text-left pr-8 text-sm">Media pengolahan limbah fashion. Perpanjang siklus fashion dan jauhi fast fashion untuk keberlanjutan lingkungan. Lakukan transaksi melalui Fashion Waste dengan melakukan penjualan, pembelian, atau menukar pakaian kalian dengan pengguna lainnya</p>
                </div>
                <div className="grid grid-rows-2">
                    <Link href="/about">About</Link>
                    <Link href="/marketplace">shop</Link>
                </div>
            </div>
            <hr className="h-1 px-2 py-4"/>
            <p className="capitalize">© copy 2025 Fashion Waste | All rights reserved.</p>
        </footer>
    )
}