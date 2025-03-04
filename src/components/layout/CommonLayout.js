import NavbarCommon from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function CommonLayout({ children }) {
    return (
       <>
        <NavbarCommon />
            <main>                    
                {children}
            </main>
        <Footer />
       </>
          
    );
}