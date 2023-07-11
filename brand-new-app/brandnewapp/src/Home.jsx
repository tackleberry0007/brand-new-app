
import React from 'react';
import Header from './common compo/Header';
import { Link } from 'react-router-dom';
import About from './common compo/About';
import Contact from './common compo/Contact';

function Home(props) {
    return (
     <>
       <Header /> 
       <Contact />
       <About />
  
     </>
    )
}

export default Home;
