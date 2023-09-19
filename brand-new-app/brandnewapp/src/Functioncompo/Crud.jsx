import React, { useState } from 'react'
import "./Crud.css"

const Crud = () => {
    const [name , setName] = useState("")
    const [ alldata , setAlldata] = useState([])

    const handleadd = ()=>{
      //  console.log("handleadd");
      if(name.lenght !== 0) {
        setAlldata(newdata =>[...newdata , name])
        setName("")
      }
    
    }
    console.log(alldata);
    return ( 
    <>
    <div className='Crud-css'>
        <input value={name} type="text" onChange={(e)=>setName(e.target.value)}/>
        <button onClick={handleadd}>Additem</button>

    </div>
    {
        alldata.map((val) =>
        <div className='alldata'>
            <h1>{val}</h1>
            <button>Edit</button>
            <button>Delete</button>
        </div>
        )
    }
    </> );
}
 
export default Crud;