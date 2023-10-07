import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";
import PopularEvents from "../PopularEvents/PopularEvents";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <PopularEvents></PopularEvents>
        </div>
    );
};

export default Home;