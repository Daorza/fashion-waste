import Navbar from "../components/Navbar";
import Footer  from "@/components/Footer";
import "./globals.css";
export const metadata = {
    title: "Fashion Waste",
    description: "Platform pengurangan limbah pakaian.",
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className="min-h-dvh bg-slate-100 text-graphite select-none">
                <Navbar/>
                    <main>                    
                        {children}
                    </main>
                <Footer/>
            </body>
        </html>
    );
}