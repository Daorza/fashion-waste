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
            <body className="min-h-screen flex flex-col bg-orange-100">
                <Navbar />
                <main className="flex-grow container mx-auto p-4">                    
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}