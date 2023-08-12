import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./login.css";
const SignUp = () => {
 const Navigate = useNavigate();
  const [user ,setUser]=useState({
    name:"",email:"",phone:"",password:""
  })

  let name,value;
function handleChange(e){
  name=e.target.name;
  value=e.target.value;

  setUser({...user,[name]:value});
}

const handleSubmit= async(e)=>{

  e.preventDefault();

  const {name,email,phone,password}=user;
  const res =await fetch("https://mern-backend-2w8y.onrender.com/register",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,email,phone,password
    })
  })
  const data = await res.json();

  if(res.status === 422|| !data){
    return window.alert("Retry")
  }
  else if (res.status===201){
    Navigate("/login");
    return window.alert("Registeration success")
    
  }


}
  return (

    
    <>
    
    <h1 class="loginStrip">SignUp</h1>
    <div className="container login-container">
    
      <div className=" login-form-container">
        <div className="login-form">
          <form method='POST'>
            <div className="form-group group1">
            
              <input onChange={handleChange} type="text" id="username" name='name' className="form-control" placeholder="Username" value={user.name} />
            </div>
            <div className=" form-group ">
              
              <input type="integer" onChange={handleChange} id="mobile" name='phone' className="form-control" value={user.phone} placeholder="Mobile.no" />
               </div> 
               <div className="form-group email">
               
              <input type="email" id="email" onChange={handleChange} name='email' className="form-control" value={user.email} placeholder="Email" />
               </div>
            <div className="form-group">
              
              <input type="password" id="password" onChange={handleChange} name='password' className="form-control" value={user.password} placeholder="Create password" />
               </div>
               
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">SignUp</button>
            <br/>
            <hr id="horizontalLine"/>
           <br/>
            <br/><br/>
            <div className=''>Already have an account?
            <Link to="/login">
            <button type="submit" className="btn btn-primary"> 
             Login
            </button></Link>  
            
            </div> 
          </form>
          
 
        </div>
        
      </div>
    
    </div>

    </>
  );
};

export default SignUp;
