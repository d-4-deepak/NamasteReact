import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"

import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(()=>import("./components/Grocery"));

const About = lazy(()=>import("./components/About"));



const AppLayout = ()=>{
    const [userName,setUserName] = useState()

    //Authentication Logic
    useEffect(()=>{
        //will make a API call with username and password and get a data 
        const data = {
            name:"Deepak Gupta"
        }

        setUserName(data.name);

    },[])
    
    return (

       <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="">
        <Header/>
        <Outlet/>
    </div>
    </UserContext.Provider>
   
)
}
const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            }
        ],
        errorElement: <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);