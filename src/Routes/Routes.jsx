import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import UpcomingEvents from "../pages/Home/UpcomingEvents/UpcomingEvents";
import PopularEvents from "../pages/PopularEvents/PopularEvents";
import ContactUs from "../pages/ContactUs/ContactUs";
import PopularDetails from "../components/PopularDetails/PopularDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../Provider/PrivateRoutes/PrivateRoute";

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
            },
            {
                path:'/popular/:id',
                element: <PrivateRoute><PopularDetails></PopularDetails>,</PrivateRoute>,
                loader: ()=> fetch('/popular_enents.json')
                
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;