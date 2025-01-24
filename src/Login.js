import { ErrorMessage, Formik } from 'formik';
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { Navbar } from 'react-bootstrap';
import port1 from './img/port1.png';

function Login() {
  let navigate=useNavigate()
    let [user, setuser]=useState({
        name:'', password:''
    })
    let localname=localStorage.getItem("name")
    let localpassword=localStorage.getItem("newpassword")
    console.log(localname)
    console.log(localpassword)
    let schema=yup.object().shape({
      name:yup.string().required(),
      password:yup.string().min(8, 'password must be at least 8 characters').matches(/[A-Z]/,/[0-9]/,/[!@#$%^&*(),.?":{}|<>]/).required(),
    })
    let handleInput=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }

    let handleSubmit=()=>{
      if(localname === user.name && localpassword === user.password){
        alert('login Successfull...')
        localStorage.setItem('username',user.name)
        navigate('/api')
      }else{
        alert('Invalid name or password')
        
      }
     
      
       }
       
  return (
    <div className='c'>
      <Navbar className='hmnav'>
        <header>   
         <img  src={port1} className='port1'></img>
         <p onClick={() => navigate('/home')} className='home' >Home</p>
         <p onClick={()=> navigate('/about')} className='about'>About</p>
         <p onClick={()=> navigate('/skills')} className='skill' >Skills</p>
         <p onClick={() => navigate('/project')} className='project' >Projects</p>
         {/* <p onClick={()=> navigate('/resume')} className='resu'>Resume</p> */}
        </header>
      </Navbar>
      <Formik
        initialValues={user}
        validationSchema={schema}
          onSubmit={handleSubmit}>
          {({handleSubmit,handleChange,})=>(
        <form onSubmit={handleSubmit}>
        <h1 className='Log1'>Log In</h1>
        <Card style={{ width: '18rem' }} className='logcd'>
        <input  className='login7' type='text' onChange={(e)=>{handleInput(e);handleChange(e);}} name='name' value={user.name} placeholder='Name'/>
        <ErrorMessage name='name'component='div' className='text-danger'/>
        <input className='login8' type='text' onChange={(e)=>{handleInput(e);handleChange(e);}} name='password' value={user.password} placeholder='Password'/>
        <ErrorMessage name='password'component='div' className='text-danger'/>
        <button className='logbu2'>login</button>
        </Card>
        <p className='logp1'><Link to ='/'><span>SignUp</span></Link> to create new account</p>
        </form>
          )}
        </Formik>
    </div>
    
  )
}

export default Login