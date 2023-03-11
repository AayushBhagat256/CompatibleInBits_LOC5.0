import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  document.title='LoginPage'
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

  const submitform=(e)=>{
    e.preventDefault()
    const error = validate()
    if(error===false){
      console.log("Submit success")
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
