import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";

import PopularEvents from "../PopularEvents/PopularEvents";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Partners from "./Partners/Partners";
import TeamsSection from "./TeamsSection/TeamsSection";

import Aos from "aos";
import 'aos/dist/aos.css'


const Home = () => {
   
    return (
        <div>
           <Banner></Banner>
           <div className="max-w-7xl mx-auto">
            <AboutUs></AboutUs>
           <Services></Services>
           <PopularEvents></PopularEvents>
           <TeamsSection></TeamsSection>
           <Partners></Partners>
           </div>
          
        </div>
    );
};

export default Home;