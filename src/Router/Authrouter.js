import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Afootpages/Blog/Blog";
import Courses from "../Pages/Afootpages/Courses/Courses";
import Faq from "../Pages/Afootpages/Faq/Faq";
import Login from "../Pages/Securitypages/Login/Login";
import Register from "../Pages/Securitypages/Register/Register";



export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
        {
            path:"/faq",
            element:<Faq></Faq>,
        },
        {
            path:"/blog",
            element:<Blog></Blog>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
        ]
    },
    {
        path:"/courses",
        element:<Courses></Courses>
    }
])