import NavigationBar from "../../components/Navbar/navbar";
import Hero from "../../components/Hero/hero";
import Footer from "../../components/Footer/footer";
import WhoWe from "../../components/WhoWe/whowe";

const HomePages = () => {
    return (
        <div>
            <NavigationBar />
            <Hero/>
            <WhoWe/>
            <Footer/>
        </div>
    );
}

export default HomePages;