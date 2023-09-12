import React from 'react'
import "./style.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [Username, Setusername] = useState('')
  const [password, Setpassword] = useState('')

  const preventDefault1 = (e) => {
    console.log(Username, password)
    e.preventDefault();
    var details = {
      'email': Username,
      'password': password,

    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    const data = { email: Username, password: password };
    console.log(data)

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(response => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem('auth-token', data.auth);

        toast('Log In  Successfully !', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          window.location.href = '/'

        }, 2000)
      }

      );


  }

  const handleChange = (e) => {
    Setusername(e.target.value)
  }
  const handleChange2 = (e) => {
    Setpassword(e.target.value)
  }
  return (


    <div className="form">

      <form className="form-input" onSubmit={preventDefault1} >
        <h3 className="headl">Login to CuriousCanvas</h3>
        <input type="email" name="email" placeholder="Enter Your Email here " id="inputID" value={Username} onChange={handleChange} required />
        <input type="password" onChange={handleChange2} name="loginpass" placeholder="Enter Your Password here" id="inputid2" value={password} required />
        <button type="submit">Login</button>
        <small style={{
          color: "black", margin: "10px 0px"
        }}>Didn't Have Account? <a href="/signup" style={{
          textDecoration: "none",
          color: "#8bbcff"
        }}>   SignUp</a> </small>
      </form></div>
  )
}

export default Login