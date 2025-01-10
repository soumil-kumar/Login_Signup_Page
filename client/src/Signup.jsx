import { useState } from "react";
import './Signup.css'
function Signup() {
return (
  <div class="container">
    <div class="form-container">
    <h2>Register</h2>
      <form>
        <div class="form-group">
          <label for="name"><strong>Name</strong></label>
          <input 
            type="text" 
            id="name" 
            class="form-control" 
            autocomplete="off" 
            placeholder="Enter Name" 
            name="Name"/>
        </div>
        <div class="form-group">
          <label for="email"><strong>Email</strong></label>
          <input 
            type="text" 
            id="email" 
            class="form-control" 
            autocomplete="off" 
            placeholder="Enter Email" 
            name="email"/>
        </div>
        <div class="form-group">
          <label for="password"><strong>Password</strong></label>
          <input 
            type="password" 
            id="password" 
            class="form-control" 
            autocomplete="off" 
            placeholder="Enter Password" 
            name="password"/>
        </div>
        <button type="submit" class="btn btn-success">
          Register
        </button>
        <p>Already have an account?</p>
        <button type="button" class="btn btn-login">
          Login
        </button>
      </form>
    </div>
  </div>
)
}
export default Signup;