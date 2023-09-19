import React from "react";
import { Link, Outlet } from "react-router-dom";



const Example = () => {
    return ( 
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-6">
                   <h3><Link to='/example/Classcompo'>Class Component</Link></h3>
                 
                </div>

                <div className="col-6">
                   <h3><Link to='/example/Functioncompo'>Function Component</Link></h3>
                </div>
            </div>
        </div>
        <Outlet />


    
        </>
     );
}
 
export default Example;