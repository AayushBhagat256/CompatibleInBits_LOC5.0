import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const [name,setName]=useState('')
    const [mail,setMail]=useState('')
    const [pass1,setPass1]=useState('')
    const [pass2,setPass2]=useState('')
    function myFunction(e) {
        e.preventDefault()
        var x = document.getElementById("mypass1");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

      function myFunction2(e) {
        e.preventDefault()
        var x = document.getElementById("mypass2");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

    document.title="register page"
    const submitregister=(e)=>{
        e.preventDefault()
        let k = document.getElementById('select').value
        console.log(k)
    }
    const validateRegister=()=>{
        let errReg = false
        if(name.length<2){
            alert("Please enter a valid name")
            errReg = true
        }
    }
    return (
        <div className="form-container">
            <form onSubmit={submitregister}>
                <h3>register now</h3>
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)} value={name}  placeholder="enter your name" />
                <input type="email" name="email" onChange={(e)=>setMail(e.target.value)} value={mail} placeholder="enter your email" />
                <div className="passwords2">
                <input type="password" name="password" id='mypass1'onChange={(e)=>setPass1(e.target.value)} value={pass1} placeholder="enter your password" />
                <button onClick={myFunction}>Show</button>
                </div>
                <div className="passwords3">
                <input type="password" name="cpassword" id='mypass2' onChange={(e)=>setPass2(e.target.value)} value={pass2} placeholder="confirm your password" />
                <button onClick={myFunction2}>Show</button>
                </div>
                <select name="user_type" id='select'>
                    <option value="customer">Customer</option>
                    <option value="photographer">Photographer</option>
                </select>
                <input type="submit" name="submit" value="register now" class="form-btn" />
                <p>already have an account? <Link to="/login">login now</Link></p>

            </form>

        </div>
    )
}

export default Register
