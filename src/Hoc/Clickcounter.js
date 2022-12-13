import React, { Component } from 'react'
import Encomponent from './Encomponent'
import Encomponent from './Hoc'

export default class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:0
      }
    }
  render() 
  {
      return (
      <>
      <h1>
      <button onClick={()=>this.setState({count:this.state.count+1})}>hy {this.state.count}</button>
      </h1>
      <p onClick={()=>this.setState({name:this.state.name+1})}>Hy {this.state.name}</p>
      </>
    )
  }
}
export default Component
