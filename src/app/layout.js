import "./globals.css";
export const metadata = {
    title: "Fashion Waste",
    description: "Platform pengurangan limbah pakaian.",
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className="min-h-screen bg-white">
                    <main>                    
                        {children}
                    </main>
            </body>
        </html>
    );
}