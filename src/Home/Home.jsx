import Navbar from "../Component/Pages/Navbar/Navbar";

import Banner from "../Component/Pages/Banner/Banner"
import KeyFeatures from "../Component/Pages/KeyFetures/KeyFeatures" ;
import About from "../Component/Pages/About/About";
import Services from "../Component/Pages/Srevices/Services";
import PricingPlans from "../Component/Pages/Pricing/PricingPlans";
const Home = () => {
    return (
        <div>
            {/* navigation bar  */}
            <Navbar></Navbar>
            {/* banner section */}
            <Banner></Banner>
            <div>
            <KeyFeatures></KeyFeatures>
            </div>
            <About></About>
            <div>
                <Services></Services>
            </div>
            <PricingPlans></PricingPlans>
        </div>
    );
};

export default Home;