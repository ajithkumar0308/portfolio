import { ErrorMessage, Formik } from 'formik';
import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import './Signuppage.css'
import { Navbar } from 'react-bootstrap';
import port1 from './img/port1.png';


function Signuppage() {
    let navigate=useNavigate()
    let [user, setuser]=useState({
        name:'', age:'', email:'', newpassword:'', confirmpassword:'', 
    })
    let schema=yup.object().shape({
        name:yup.string().required(),
        age:yup.string().matches(/\d{2,3}/,'enter only two or three digits').required(),
        email:yup.string().email().required(),
        newpassword:yup.string().min(8, 'password must be at least 8 characters').matches(/[A-Z]/,/[0-9]/,/[!@#$%^&*(),.?":{}|<>]/).required(),
        confirmpassword:yup.string().oneOf([yup.ref('newpassword'),null], 'password must match').required('Confrim password required'),

    })
    let handleInput=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }
    let handleSubmit=()=>{
      
       localStorage.setItem("name",user.name)
       localStorage.setItem("newpassword",user.newpassword)
       alert("Account created....")
             navigate('/vote')
       
            
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
        <h1 className='siup'>Sign up</h1>
        <Formik
        initialValues={user}
        validationSchema={schema}
        onSubmit={handleSubmit}>
            {({handleSubmit,handleChange})=>(
        <Card style={{ width: '18rem' }} className='sicad'>
            <form onSubmit={handleSubmit}> 
            <input className='siin1' type='text' onChange={(e)=>{handleInput(e);handleChange(e);}} name='name' value={user.name} placeholder='Name'/>
            <ErrorMessage name='name'component='div' className='text-danger'/>
            <input className='siin2' type='text' onChange={(e)=>{handleInput(e);handleChange(e)}} name='age' value={user.age} placeholder='Age'/>
            <ErrorMessage name='age'component='div' className='text-danger'/>
            <input className='siin3' type='text' onChange={(e)=>{handleInput(e);handleChange(e)}} name='email' value={user.email} placeholder='Email'/>
            <ErrorMessage name='email'component='div' className='text-danger'/>
            <input className='siin4' type='text' onChange={(e)=>{handleInput(e);handleChange(e);}} name='newpassword' value={user.newpassword} placeholder='Newpassword'/>
            <ErrorMessage name='newpassword'component='div' className='text-danger'/>
            <input className='siin5' type='text' onChange={(e)=>{handleInput(e);handleChange(e)}} name='confirmpassword' value={user.confirmpassword} placeholder='Confirmpassword'/>
            <ErrorMessage name='confirmpassword'component='div' className='text-danger'/>
           <button className='sibu1'>signup</button>
            </form>
        </Card>
        )}
        </Formik>
    </div>
  )
}

export default Signuppage