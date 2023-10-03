import React from "react";
import  ReactDOM  from "react-dom/client";
import Header ,{ Title } from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import About from "./component/About";



const AppLayout = () => {
    return(
        <>
        <Header />
        <Body />
        <Footer />
        </>
    );
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
    },
    {
        path: "/about",
        element: <About />
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
