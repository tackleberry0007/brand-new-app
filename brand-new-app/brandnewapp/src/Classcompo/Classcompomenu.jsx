import React from "react";
import { Component } from "react";
// import Classcompointro from "./Classcompointro";
import { Link, Outlet } from "react-router-dom";

class Classcompomenu extends Component{
    render(){
        return(
            <>
            <ul > 
            <li><Link to={"Classcompointro"} >Classcompointro</Link>  </li>
            <li><Link to={"Classlistandkey"} >Classlistandkey</Link>  </li>
            <li><Link to={"Classcompositionandinheritance"} >Classcompositionandinheritance</Link>  </li>


                   
            </ul>
            <Outlet />
            </>
        )
    }
}
export default Classcompomenu;