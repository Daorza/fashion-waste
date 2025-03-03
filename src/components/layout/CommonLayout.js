import NavbarCommon from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function CommonLayout({ children }) {
    return (
       <>
                <main>                    
        <NavbarCommon />
                    {children}
                </main>
        <Footer />
       </>
          
    );
}