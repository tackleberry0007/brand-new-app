import React, { useEffect ,useState } from 'react'


const APIchild = () => {

const [user ,setUser] =useState([])



    useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/todos").then((data)=>{data.json().then((resp)=>{
       // console.log(resp);
        setUser(resp)
    })}) })

    return ( 
    <>
    <h1>Apichild</h1>
   {<table border="1" widh="70%" align='center'> 
    {/* <tr border="1">
        <td>userId</td>
        <td>id</td>
        <td>title</td>
        <td>completed</td>
        </tr>   */}
        {
            user.map((item)=>
                <tr border="1">
                <td>{item.userID}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed == true ? "true" :"false "}</td>
                </tr>
            )
        }
   
    </table>}
    </> );
}
 
export default APIchild;