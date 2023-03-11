import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Register() {
    const nav = useNavigate()
    const navigate=()=>{
        nav('/pdomain')
    }
    const [photo,setPhoto]=useState(false)
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [pass1, setPass1] = useState('')
    const [pass2, setPass2] = useState('')
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

    document.title = "register page"

    const passmatch = () => {
        let errReg1 = false
        if (pass1 != pass2) {
            alert("both passwords must be same...")
            errReg1 = true
        }
        return errReg1
    }
    const validateRegister = () => {
        let errReg = false
        if (name.length < 2) {
            alert("Please enter a valid name")
            errReg = true
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            alert('invalid email')
            errReg = true
        }
        if (pass1.length < 8) {
            alert('passwords munst be of 8 characters')
            errReg = true
        }
        if (pass2.length < 8) {
            alert('passwords munst be of 8 characters')
            errReg = true
        }
        return errReg
    }
    const submitregister = (e) => {
        e.preventDefault()
        let k = document.getElementById('select').value
        console.log(k)
        if(k=='customer')
        {
            setPhoto(false)
        }
        else{
            setPhoto(true)
        }
        const error1 = validateRegister()
        const error2 = passmatch()
        if (error1 === false && error2 === false) {
            console.log("form Submitted")
            console.log(name,pass1,pass2,mail,photo);
            register()

        }
        else {
            console.log("Form not submitted")
        }
    }

    const register = () => {

        var data = JSON.stringify({
            "email": mail,
            "username": name,
            "password": pass1,
            "password2": pass1,
            "is_photographer": photo
        });

        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '//127.0.0.1:8000/account/register/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                if(photo==true)
                {
                    nav('/pdomain')
                }
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    return (
        <div className="form-container">
            <form onSubmit={submitregister}>
                <h3>register now</h3>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} placeholder="enter your name" />
                <input type="email" name="email" onChange={(e) => setMail(e.target.value)} value={mail} placeholder="enter your email" />
                <div className="passwords2">
                    <input type="password" name="password" id='mypass1' onChange={(e) => setPass1(e.target.value)} value={pass1} placeholder="enter your password" />
                    <button onClick={myFunction}>Show</button>
                </div>
                <div className="passwords3">
                    <input type="password" name="cpassword" id='mypass2' onBlur={passmatch} onChange={(e) => setPass2(e.target.value)} value={pass2} placeholder="confirm your password" />
                    <button onClick={myFunction2}>Show</button>
                </div>
                <select name="user_type" id='select'>
                    <option value="customer">Customer</option>
                    <option value="photographer">Photographer</option>
                </select>
                <input type="submit" name="submit" value="register now" className="form-btn" onClick={{ submitregister }} />
                <p>Already have an account? <Link to="/login">login now</Link></p>

            </form>

        </div>
    )
}

export default Register
