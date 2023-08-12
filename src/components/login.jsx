import React ,{useState} from 'react';

import { Link, useNavigate } from 'react-router-dom';


let isLoggedIn;
const Login = () => {
  
  const Navigate =useNavigate()
  const [user,setUser]=useState({
    email:"",password:""
  })

  let name,value;
  function handleChange(e){
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value});
  }

  const handleClick= async (e)=>{
    e.preventDefault();

    const {email,password}=user;

    const res= await fetch("https://mern-backend-2w8y.onrender.com/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      withCredentials:true,
      body:JSON.stringify({
        email,password
      })
    })

    const data = await res.json();
    
  if(res.status===400 || !data){
    window.alert("Retry");
  }
  else{
localStorage.setItem('jwttoken',data.token)
    
    isLoggedIn=true;
    localStorage.setItem("isLoggedIn",isLoggedIn)
    window.alert("Login success");
    Navigate("/");

  }

    
  }



  return (
    <>
    <h1>Login</h1>

    <div className="container login-container">
      
        <div className="login-form">
          <form method='POST'>
            <div className="form-group group1">
              
              <input type="email" onChange={handleChange} name='email' value={user.email} id="email" className="form-control" placeholder="Enter your Email" />
            </div>
            <div className="form-group">
              
              <input type="password" onChange={handleChange} id="password" name="password" value={user.password} className="form-control" placeholder="Enter your password" />
               </div>
               <div className=' align-items-center'>
            <button type="submit" onClick={handleClick} className="btn btn-primary ">Login</button>
            </div>
            <br/>
            <hr id="horizontalLine"/>
           <br/>
            <br/><br/>
            <div>Don't have an account? 
             <Link to="/signup"><button className='btn btn-primary'>Sign up</button>
           
            </Link>
            
            </div>
           
        
          </form>
        </div>
      </div>
    
    </>
  );
};

export default Login;

