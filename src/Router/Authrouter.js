import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Afootpages/Blog/Blog";
import Courses from "../Pages/Afootpages/Courses/Courses";
import CoursesItems from "../Pages/Afootpages/CoursesDetails/CoursesItems/CoursesItems";
import CoursesDescription from "../Pages/Afootpages/CoursesDetails/Descriptions/CoursesDescription";
import Faq from "../Pages/Afootpages/Faq/Faq";
import Home from "../Pages/Afootpages/HomePage/Home";
import CheckOut from "../Pages/CheckOutPage/CheckOut";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Securitypages/Login/Login";
import Register from "../Pages/Securitypages/Register/Register";
import Securerouter from "./Privateroute/Securerouter";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch("https://learning-platforn-assignment-server.vercel.app/tittles ")
            },
            {
                path: "/faq",
                element: <Faq></Faq>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/courses",
                element: <Courses></Courses>,
            },
            {
                path: "/catagory/:id",
                element: <CoursesItems></CoursesItems>,
                loader: ({ params }) => fetch(`https://learning-platforn-assignment-server.vercel.app/catagory/${params.id}`)
            },
            {
                path: "/premium/:id",
                element: <Securerouter><CheckOut></CheckOut></Securerouter>,
                loader: ({ params }) => fetch(`https://learning-platforn-assignment-server.vercel.app/premium/${params.id}`)
            }
        ]
    },
    {
        path: "/courses/:id",
        element: <CoursesDescription></CoursesDescription>,
        loader: ({ params }) => fetch(`https://learning-platforn-assignment-server.vercel.app/courses/${params.id}`)
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>
    }

])