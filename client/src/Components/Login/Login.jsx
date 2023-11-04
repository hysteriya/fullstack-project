import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import email_icon from '../Assests/email.png';
import password_icon from '../Assests/password.png';


const Login = () => {
    const [data, setData]=useState({
        email:"",
        password:""
    })
    const handleChange=({currentTarget: input})=>{
        setData({...data, [input.name]:input.value});
    }
    const fields=[
      
      {
        id:1,
        imgsrc: email_icon,
        type:"email",
        placeholder: "Email Id",
        names:"email"
      },
      {
        id:2,
        imgsrc: password_icon,
        type:"password",
        placeholder: "Password",
        names:"password"
      },
    ]
    const handleSubmit= async (e)=>{
        e.preventDefault();
        try {
            const url="http://localhost:8080/login";
            const {data: res}=await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location ="/"
            console.log(res.message);
        } catch (error) {
            console.log(error)
        }

    }
    return (
      <div className='container'>
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <form className="inputs" onSubmit={handleSubmit}>
          {
            fields.map(({id, imgsrc, type, placeholder, names})=>(
              <div key={id} className='input'>
                <img src={imgsrc} alt=''/>
                <input 
                    type={type} 
                    placeholder={placeholder}
                    name={names}
                    onChange={handleChange}
                    value={data.names}
                    required/>
              </div>
            ))
          }
        
        <div className="submit-container">
          <button type="submit" className="submit">Login</button>
        </div>
        </form>
      </div>
    )
  }
  

export default Login;