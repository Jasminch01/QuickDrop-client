import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";

const Router = createBrowserRouter([
    {
        path : '/',
        element : <Layout/>,
        errorElement : <div></div>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                
                element : <div></div>
            },
            {
                path : '/about',
                element : <div></div>
            },
            {
                path : '/deshboard',
                element : <div></div>
            }
        ]
    }
])
export default Router;