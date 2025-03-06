import Header from "../header/Header";
import Home from "../home/Home";
import About from "../about/About";
import Features from "../features/Features";
import Menu from "../menu/Menu";
import Choose from "../choose/Choose";
import Stats from "../stats/Stats";
import Gallery from "../gallery/Gallery";
import Offer from "../offer/Offer";
import Team from "../team/Team";
import Reservation from "../reservation/Reservation";
import Testimonials from "../testimonials/Testimonials";
import Footer from "../footer/Footer";

function Homepage() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Features />
            <Menu />
            <Choose />
            <Stats />
            <Gallery />
            <Offer />
            <Team />
            <Reservation />
            <Testimonials />
            <Footer />
        </>
    )
};

export default Homepage