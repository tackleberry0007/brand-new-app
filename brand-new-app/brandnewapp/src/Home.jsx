
import React from 'react';
// import Header from './common compo/Header';
// import { Link } from 'react-router-dom';
// import About from './common compo/About';
// import Contact from './common compo/Contact';
import { Link } from 'react-router-dom';
import Header from './common compo/Header';


function Home(props) {
    return (
     <>
      {/* <ul>
        <li> <Link to={'/'}>Home</Link></li>
        <li> <Link to={'/about'}>About</Link></li>
        <li> <Link to={'/contact'}>Contact</Link></li>
        </ul> */}

        {/* <Header /> */}
      <h1 className='p-3'>Home</h1>
      <p className='p-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quae.
      </p>
     
     </>
    )
}

export default Home;

