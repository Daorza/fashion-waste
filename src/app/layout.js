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
            <body className="min-h-screen bg-white text-graphite">
                <Navbar/>
                    <main>                    
                        {children}
                    </main>
                <Footer/>
            </body>
        </html>
    );
}