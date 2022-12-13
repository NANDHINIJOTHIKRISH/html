import React, { Component } from 'react'

export default class StateEx extends Component {
    constructor(props) {
      super(props) 

      this.state = {
         count:0,
         name:"jk"
      }
    }
  render() 
  {
      return (
      <h1>
      <button onClick={()=>this.setState({count:this.state.count+1})}>clickMe{this.state.count}</button>
      </h1>
    )
  }
}
