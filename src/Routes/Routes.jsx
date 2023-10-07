import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import UpcomingEvents from "../pages/Home/UpcomingEvents/UpcomingEvents";
import PopularEvents from "../pages/PopularEvents/PopularEvents";
import ContactUs from "../pages/ContactUs/ContactUs";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/upcomming',
                element:<UpcomingEvents></UpcomingEvents>
            },
            
            {
                path:'/contact',
                element:<ContactUs></ContactUs>
            }
        ]
    }
])

export default router;