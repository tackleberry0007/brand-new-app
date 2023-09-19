import React from 'react'
import { Component } from 'react';

class  Classstatecount extends Component{
    constructor(){
        super()
        this.state ={
            count : 0
        }
    }


render(){
 return (
    <>
    <button onClick={()=> this.setState({count : this.state.count + 1})}>ADD {this.state.count}</button>
    </>
 )
 }
    

 }
 
export default Classstatecount;