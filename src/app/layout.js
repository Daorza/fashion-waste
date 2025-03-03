import "./globals.css";
export const metadata = {
    title: "Fashion Waste",
    description: "Platform pengurangan limbah pakaian.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <body className="min-h-screen flex flex-col bg-white">
                <main>                    
                    {children}
                </main>
            </body>
        </html>
    );
}