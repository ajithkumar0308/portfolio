import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';    
import './Agecalculator.css'
import { Navbar } from 'react-bootstrap';
import port1 from './img/port1.png';
import { useNavigate } from 'react-router-dom';


function Agecalculator() {
  let navigate=useNavigate()
  let[dob,setdob]=useState('')
  let [age,setage]=useState(null)
  let CalculateAge = ()=>{
    if (!dob){
      alert('pelease enter your date of birth')
      return
    }
    let birthDate = new  Date(dob)
    let today = new Date()
    let age = today.getFullYear()- birthDate.getFullYear()
    let monthDiff=today.getMonth()-birthDate.getMonth()
    let dayDiff=today.getDate()-birthDate.getDate()
    if(monthDiff<0 || (monthDiff=== 0 && dayDiff<0)){
      age--
    }
    setage(age)
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
        <Card style={{width:'30rem'}} className='agecard'>
            <header className='agehead'>Calculate Your Age To Given Date</header>
            <p className='agep1'>Your Birth Date (From Date)</p>
            <input className='ageinp1' type='date' value={dob} onChange={(e)=>setdob(e.target.value)}/>
            <p className='agep2'>Today Date</p>
            <input className='ageinp2' type='date'/>
            {age !== null &&(<div>
                  <strong className='agest'>Your Age {age} years old</strong>
                </div>)}
            <footer className='agefoot'>
                <button className='agebu1' onClick={CalculateAge}>Calculate</button>
              
            </footer>
        </Card>
    </div>
  )
}

export default Agecalculator