import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';  
import './Bmi.css'
import { Navbar } from 'react-bootstrap';
import port1 from './img/port1.png';
import { useNavigate } from 'react-router-dom';


function Bmi() {
  let navigate=useNavigate()
    let [height,setheight]=useState('')
    let [weight,setweight]=useState('')
    let [age,setage]=useState('')
    let [gender,setgender]=useState('male')
    let [bmi,setbmi]=useState(null)
    let [category,setcategory]=useState('')

    let calculateBMI=(e)=>{
        e.preventDefault()
        if(height == '' || weight == '' || age == ''){
            alert('Pelease enter all fields')
            return
        }
        let heightiInMeters = height / 100
        let bmiValue = weight / (heightiInMeters * heightiInMeters)
        setbmi(bmiValue.toFixed(2))
        if(bmiValue < 18.5){
            setcategory('Underweight')
        }else if(bmiValue >= 18.5 && bmiValue < 24.9){
            setcategory('Normal weight')
        }else if(bmiValue >= 25 && bmiValue < 29.9){
            setcategory('Over Weight')
        }else{
            setcategory('Obese')
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
        <h1 className='bmi'>BMI Calculator</h1>
        <Card style={{width:'40rem'}} className='bmicard'>
        <header className='bmihead'>Calculate Your BMI</header>
         <form onSubmit={calculateBMI}>
        
        <div className='bmihgt'>
          <label>Height (in cm): </label>
    <input type='number' value={height} onChange={(e)=>setheight(e.target.value)} required/>
    </div>

    <div className='bmiwgt'>
    <label>weight (in kg): </label>
    <input type='number' value={weight} onChange={(e)=>setweight(e.target.value)} required/>
    </div>

    <div className='bmiage'>
    <label>age (in year): </label>
    <input type='number' value={age} onChange={(e)=>setage(e.target.value)} required/>
    </div>

    <div className='bmigen'>
    <label>gender (in year): </label>
    <select>
    value={gender} 
    onChange={(e)=>setgender(e.target.value)}
    <option value='male'>male</option>
    <option value='female'>female</option>
    </select>
    </div>
    {bmi && (
        <div className='bmi1'>
          <h2>Your BMI: {bmi}</h2>
          <p>Category: {category}</p>
        </div>
      )}
    <footer className='bmifoot'>
    <button type="submit" className='bmibu1'>Calculate BMI</button></footer>
      </form>
      
    
      </Card>
    </div>
  )
}

export default Bmi