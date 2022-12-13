import React,{useState} from 'react'
function Login() {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [Error,setError]=useState(false);
    const formHandler=(event)=>{
      event.preventDefault();
      if(userName.length===0 && password.length===0)
      {
            setError(true);
      }
       else if(password.length<8)
       {
        setError(true);
       }
      if(userName && password)
      {
        const loginObj={
            name:userName,
            pwd:password
        }
        alert(JSON.stringify(loginObj));
    }}
  return (
    <div style={{backgroundColor:'black',textAlign:'center',width:'400px',marginLeft:'550px',height:'00px'}}>
    <h3>Login Page</h3>
    <form onSubmit={formHandler}>
         UserName : <input type="text"value={userName} placeholder="UserName" onChange={(e)=>setUserName(e.target.value)} /><br/>
         <span>
         {Error && userName.length===0?
         <label style={{color:"grey"}}>
         UserName is Required<br/></label> :" "}
         </span>
        password : <input type ="Password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
        <span>
        {Error && password.length===0?
         <label style={{color:"grey"}}>
         Password is Required<br/></label> :" "} 
         {Error && password.length>0 && password.length<8?
         <label style={{color:'grey'}}>
          password should Contain atleast 8 Characters<br/></label> :""}
         </span>
        <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default Login