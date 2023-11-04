import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';
import user_icon from '../Assests/person.png';
import email_icon from '../Assests/email.png';
import password_icon from '../Assests/password.png';
import calendar_icon from '../Assests/calendar_icon.png';

const Signup = () => {
    const [data, setData]=useState({
        name:"",
        email:"",
        dob:"",
        password:""
    })
    const navigate=useNavigate();
    const handleChange=({currentTarget: input})=>{
        setData({...data, [input.name]:input.value});
    }
    const fields=[
      {
        id:1,
        imgsrc: user_icon,
        type:"text",
        placeholder: "Name",
        names:"name"
      },
      {
        id:2,
        imgsrc: email_icon,
        type:"email",
        placeholder: "Email Id",
        names:"email"
      },
      {
        id:3,
        imgsrc: email_icon,
        type:"date",
        placeholder: "dd-mm-yyyy",
        names:"dob"
      },
      {
        id:4,
        imgsrc: password_icon,
        type:"password",
        placeholder: "Password",
        names:"password"
      },
    ]
    const handleSubmit= async (e)=>{
        e.preventDefault();
        try {
            const url="http://localhost:8080/signup";
            const {data: res}=await axios.post(url, data);
            navigate("/login")
            console.log(res.message);
        } catch (error) {
            console.log(error)
        }

    }
    return (
      <div className='container'>
        <div className="header">
          <div className="text">Sign Up</div>
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
          <button type="submit" className="submit">SignUp</button>
        </div>
        </form>

      </div>
    )
  }
  

export default Signup;