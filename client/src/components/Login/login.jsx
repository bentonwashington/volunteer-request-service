import React, { useState } from 'react'

// import '../Login/login.css'

// import {LOGIN_USER} from '../../utils/mutations'
// import {useMutation } from '@apollo/client'



const Login = () => {

  const [formData, setFormData] = useState({ email: "", password: "" })
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div className='container'>

      <form onSubmit={handleSubmit} id='shapeUp'>
        <h1 id='Welcome'> Welcome Hero </h1>
        <h1> Let's Login </h1>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.email  })} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" value={formData.password} onChange={(event) => setFormData({ ...formData, password: event.target.password })} class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3 form-check">
          {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"/> */}
          {/* <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Login;