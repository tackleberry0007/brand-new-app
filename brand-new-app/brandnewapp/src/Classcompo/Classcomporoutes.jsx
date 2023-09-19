import React, { Component } from "react";
import { Route,Routes } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointro from "./Classcompointro";
import Classlistandkey from "./Classlistandkey";
import Classcompositionandinheritance from "./Classcompositionandinheritance";
import Childcompoforclass from "./Classcompoforclass";

class Classcomporoutes extends Component{
    render(){

        return(
            <>
            <Routes>
                <Route path="/" element={<Classcompomenu />}>
                    <Route path="Classcompointro" element={<Classcompointro />} />
                    <Route path="Classlistandkey" element={<Classlistandkey />} />
                    <Route path="Classcompositionandinheritance" element={<Classcompositionandinheritance />} />
                    <Route path="Childcompoforclass" element={<Childcompoforclass />} />




                </Route>
            </Routes>
            </>
        )

        

        
    }
}
export default Classcomporoutes;