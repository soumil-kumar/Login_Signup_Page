import React from "react";
import { useState } from "react";
import './Signup.css'
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios'

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/signup', {name, email, password})
    .then(result => {console.log(result)
    navigate('/login')})
    .catch(err => console.log(err))
  }

  return (
    <div class="container">
      <div class="form-container">
        <h2>Signup</h2>
        <form>
          <div class="form-group">
            <label for="name"><strong>Username</strong></label>
            <input 
              type="text" 
              id="name" 
              class="input-box" 
              autocomplete="off" 
              placeholder="Enter Name" 
              name="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="email"><strong>Email</strong></label>
            <input 
              type="text" 
              id="email" 
              class="input-box" 
              autocomplete="off" 
              placeholder="Enter Email" 
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="password"><strong>Password</strong></label>
            <input 
              type="password" 
              id="password" 
              class="input-box" 
              autocomplete="off" 
              placeholder="Enter Password" 
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-success">
            Register
          </button>
          <p>
            Already have an account?
            <Link to="/login" class = "login-link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
export default Signup;