import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';    
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import port1 from './img/port1.png';
import './Homepage.css'


function Homepage() {
  let navigate = useNavigate()
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
       <Card style={{width:'30rem'}} className='hpcd'>
        <h1 className='ac'>Age Calculator</h1>
        <div onClick={()=> navigate('/age')}><Button className='hpbu1'>Agecalculator</Button></div>
       </Card>

       <Card style={{width:'30rem'}} className='hpcd2'>
        <h1 className='bc'>Bmi Calculator</h1>
        <div onClick={()=> navigate('/bmi')}><Button className='hpbu1'>Bmicalculator</Button></div>
       </Card>

       <Card style={{width:'30rem'}} className='hpcd3'>
        <h1 className='emc'>Emi Calculator</h1>
        <div onClick={()=> navigate('/emi')}><Button className='hpbu1'>Emicalculator</Button></div>
       </Card>
       <Card style={{width:'30rem'}} className='hpcd4'>
        <h1 className='ech1'>E-commerce Website</h1>
        <div onClick={()=> navigate('/ecmw')}><Button className='hpbu1'>E-commerce Website</Button></div>
       </Card>
       
    </div>
  )
}

export default Homepage