import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//  import axios from 'axios'
import Axios from "axios";
import { async } from 'q';

function Login() {
  document.title='LoginPage'
  const [login,setLogin] = useState(false)
  const navilink = useNavigate()
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  function myFunction(e) {
    e.preventDefault()
    var x = document.getElementById("mypass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  const validate=()=>{
    let err = false
    if(pass.length<8){
      //here password error will be passed
      alert('invalid password')
      err=true
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('invalid email')
      err=true
    }
    return err
  }

  const submitform=async(e)=>{
    console.log(email,pass)
    e.preventDefault()
    const error = validate()
    if(error===false){
      console.log("Submit success")

      // var Axios = require('axios');
      try {
        const response = await fetch('//127.0.0.1:8000/account/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: pass
          })
        });
        const data = await response.json();
        console.log(data);
        localStorage.setItem('access',data.access)
        localStorage.setItem('refresh',data.refresh)
        setLogin(true)
        console.log(localStorage.getItem("photo"))
        if(localStorage.getItem("photo")=='true')
        {
          navilink('/pdomain');
          localStorage.setItem("log",true);
        }
        else{
          navilink('/homepage');
          localStorage.setItem("log",true);
        }
        

        
      } catch (error) {
        console.error(error);
        alert("failed")
      }
  
     

    }
    else{
      console.log("Submit not success")
    }

    
  }
  return (
    <div>
      <div className="form-container">

        <form onSubmit={submitform}>
          <h3>login now</h3>

          <input type="email" name="email"  placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <div className="passwords">
          <input type="password" name="password"  value={pass} onChange={e=>setPass(e.target.value)}
          id='mypass' placeholder="enter your password" />
          <button onClick={myFunction}>Show</button>
          {/* <input type="checkbox" name="" id="" value='Show'/> */}
          </div>
          <input type="submit" name="submit" value="login now" className="form-btn" />
          <p>Don't have an account? <Link to='/register'>register now</Link></p>
        </form>

      </div>
    </div>
  )
}

export default Login
