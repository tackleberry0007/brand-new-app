import React, { useRef } from 'react'

const Useref = () => {
    const inputref = useRef(null)

    function inputfunction(){
       // console.log("inputfunction");
       //inputref.current.focus()
       //inputref.current.style.color = "Blue"

    }
    return ( 
    <>
    <h1>Useref</h1>
    <input type="text" ref={inputfunction} />
    <button onClick={inputfunction}>Update</button>
    </> );
}
 
export default Useref;