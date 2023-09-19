import React, { useReducer, useState } from 'react'

const initialstate = 0 
const reducer = (state, action)=>{
    console.log(state, action);
    if(action.type === "INCREMENT"){
        return state + 1
    }
     
    if(action.type === "DECREMENT"){
        return state - 1
    }
    

    if(action.type === "MULTIPLE"){
        return state * 2
    }
    return state

}
const Usereducer = () => {
   // const [count, setCount] = useState(0)

    const [state, dispatch] = useReducer( reducer, initialstate)

    // const increment =()=>{
    //     setCount (count +1)
    // }

    // const decrement =()=>{
    //     setCount (count - 1)
    // }
    return (
        <>
        <h1>usereducer</h1>

        <h1>{state}</h1>
        <button onClick={()=> dispatch({type : "INCREMENT"})}>update</button>
    <button onClick={()=> dispatch({type : "DECREMENT"})}>update</button>
    <button onClick={()=> dispatch({type : "MULTIPLE"})}>update</button>


        </>
      );
}
 
export default Usereducer;