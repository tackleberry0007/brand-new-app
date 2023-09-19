import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from './common compo/Header';
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import Product from "./Product";
import Example from "./Example";
import { Suspense } from "react";
import { Children } from "react";
const Dummy = React.lazy(() =>import("./Dummy"))
const Classcomporoutes = React.lazy(()=>import("./Classcompo/Classcomporoutes"))
const Functioncomporoutes = React.lazy(()=>import("./Functioncompo/Functioncomporoutes"))



const Mainrouter = createBrowserRouter([
    
    {
        path :'/',

        element : <><Header /> </>
    },
    {
        path :'/home',

        element : <><Header /> <Home /></>
    },
    {
        path :'/about',

        element : <><Header /> <About /></>
    },
    {
        path :"/contact",

        element : <><Header /> <Contact /></>
    },
    {
        path :'/dummy',

        element : <><Header /> <Suspense fallback={<h1>Loading.......</h1>}><Dummy /></Suspense></>
    },
    {
        path :'/product',

        element : <><Header /> <Product /></>
    },
    {
        path :'/example',
        element : <><Header/> <Example /></>,
        children :[
            {
                path:"Classcompo/*",
                element: <><Suspense fallback={<h1>Loading.......</h1>}><Classcomporoutes /></Suspense></>
            },
            {
                path:"Functioncompo/*",
                element: <><Suspense fallback={<h1>Loading.......</h1>}><Functioncomporoutes /></Suspense></>
            }
        ]
  
          
        
    }
    
    


])
  
 
export default Mainrouter;