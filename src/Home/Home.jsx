import Navbar from "../Component/Pages/Navbar/Navbar";

import Banner from "../Component/Pages/Banner/Banner"
import KeyFeatures from "../Component/Pages/KeyFetures/KeyFeatures" ;
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
        </div>
    );
};

export default Home;