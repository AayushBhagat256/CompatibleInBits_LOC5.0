import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    document.title="register page"
    const submitregister=(e)=>{
        e.preventDefault()
        let k = document.getElementById('select').value
        console.log(k)
    }
    return (
        <div className="form-container">
            <form onSubmit={submitregister}>
                <h3>register now</h3>
                <input type="text" name="name"  placeholder="enter your name" />
                <input type="email" name="email"  placeholder="enter your email" />
                <input type="password" name="password"  placeholder="enter your password" />
                <input type="password" name="cpassword"  placeholder="confirm your password" />
                <select name="user_type" id='select'>
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                </select>
                <input type="submit" name="submit" value="register now" class="form-btn" />
                <p>already have an account? <Link to="/login">login now</Link></p>

            </form>

        </div>
    )
}

export default Register
