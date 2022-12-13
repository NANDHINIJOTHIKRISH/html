import axios from 'axios'
import React, { Component } from 'react'

export default class GetEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{console.log(res.data)
        this.setState({posts:res.data})})
        .catch(error=>console.log(error))
    }
  render() {
    const {posts}=this.state
    return (
      <div>
      <p>{posts.map
      ((hy) => (<ul key={hy.id}><li>{hy.title}</li></ul>))}
      </p></div>
      
    )
  }
}
