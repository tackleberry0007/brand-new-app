import React from 'react'
import { Link, Outlet } from 'react-router-dom';
 
const  Functioncompomenu= () => {
    return (
    <>
    <ul>
        <li><Link to="Functioncompointro">Functioncompointro</Link></li>    
        <li><Link to="Usestate">Usestate</Link></li> 
        <li><Link to="Usereducer">Usereducer</Link></li>
        <li><Link to="Useref">Useref</Link></li>  
        <li><Link to="API">API </Link></li>     
        <li><Link to="APIchild">APIchild </Link></li>
        <li><Link to="Crud">Crud </Link></li>







    </ul>
    <Outlet></Outlet>
    </>  );

}
 
export default Functioncompomenu;