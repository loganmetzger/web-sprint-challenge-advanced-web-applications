import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { axiosWithAuth } from './axiosWithAuth'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth().post('/api/login', form)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          name='username'
          type='text'
          value={form.username}
          placeholder='Username'
          onChange={handleChange}
        />
        <input 
          name='password'
          type='text'
          value={form.password}
          placeholder='Password'
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
