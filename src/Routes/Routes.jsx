import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import UpcomingEvents from "../pages/Home/UpcomingEvents/UpcomingEvents";
import ContactUs from "../pages/ContactUs/ContactUs";
import PopularDetails from "../components/PopularDetails/PopularDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../Provider/PrivateRoutes/PrivateRoute";
import Profile from "../pages/Profile/Profile";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element:<Home></Home>
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
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:'/service/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader:()=> fetch('/services.json')

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