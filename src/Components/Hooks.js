import React,{useState,useEffect} from 'react'

function Hooks() {
const[count,setCount]=useState(0)
  useEffect(()=>{
    document.title="Hi";
    console.log({count})
  })
  return (
    <div>{count}<br/>
    <button onMouseOver={()=>
  setCount(count+1)}style={{backgroundColor:"grey",color:"yellow"}}>Increase</button><br/>
  <button onMouseOver={()=>
  setCount(count-1)}style={{backgroundColor:"grey"}}>Decrement</button><br/>
  <button onMouseOver={()=>
  setCount(count+500000)}style={{backgroundColor:"grey"}}>Increment</button>
    </div>
    
  )
}

export default Hooks