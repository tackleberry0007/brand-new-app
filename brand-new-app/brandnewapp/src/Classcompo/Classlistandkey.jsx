import React from "react";
import { Component } from 'react';

class Classlistandkey extends Component {
   constructor(){
    super()
    this.state =   {
        items : [1,2,3,4,5,6]
    }
   }


    add = ()=>{
        console.log("add");
        this.setState({
            items : [1,2,3,4,5,6,7]
        })
    }
    render() {
        //const items = [1,2,3,4,5,6]
        const listitems = this.state.items.map((item,index) =><li key={item.toString()}>{item}</li>)
        return (
            <>
               <ul>
                <li>{listitems}</li>

                </ul> 

                <button onClick={()=> this.add()}>Add-items</button>
            </>
        );
    }
}

export default Classlistandkey;