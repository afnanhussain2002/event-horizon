import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";
import PopularEvents from "../PopularEvents/PopularEvents";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Partners from "./Partners/Partners";
import TeamsSection from "./TeamsSection/TeamsSection";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <div className="max-w-7xl mx-auto">
           <Services></Services>
           <PopularEvents></PopularEvents>
           <TeamsSection></TeamsSection>
           <Partners></Partners>
           </div>
          
        </div>
    );
};

export default Home;