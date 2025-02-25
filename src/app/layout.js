import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Fashion Waste",
    description: "Platform pengurangan limbah pakaian.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <body className="min-h-screen flex flex-col bg-white">
                <Navbar />
                <div className="h-16"></div>
                <main>                    
                    {children}
                </main>
                {/* <Footer /> */}
            </body>
        </html>
    );
}