import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Colleges from "../Pages/Colleges/Colleges";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/NotFound/NotFound";
import Profile from "../Pages/Profile/Profile";
import Admission from "../Pages/Admission/Admission";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "colleges",
                element: <Colleges></Colleges>
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
                // loader: ({params}) => fetch(`http://localhost:5000/universities/${params.id}`)
            },
            {
                path: "profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "admission",
                element: <Admission></Admission>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
]);