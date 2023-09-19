import React from 'react'
import { useState } from 'react';
 const Functioncount = () => {
    const [count , setCount] = useState( 10000)
    const [text ,setText] = useState("Pankaj")
    return ( 
    <>
    <button onClick={()=> setCount(count + 1)}>ADD{count}</button>
    <h1>{text }</h1>
    </> );
 }
  
 export default Functioncount;