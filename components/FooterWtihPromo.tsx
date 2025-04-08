import Footer from "./Footer";
import AppPromoSection from "./AppPromoSection";

const FooterWithPromo = () => {
    return(
        <>
        <div className="bg-white pt-[140px]">
            <AppPromoSection/>
            <Footer/>
        </div>
        </>
    )
}
export default FooterWithPromo;