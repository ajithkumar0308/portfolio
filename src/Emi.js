import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';  
import './Emi.css'
import { Navbar } from 'react-bootstrap';
import port1 from './img/port1.png';
import { useNavigate } from 'react-router-dom';


function Emi() {
  let navigate=useNavigate()
    let [loanamount,setloanamount]=useState(0)
    let [interestrate,setinterestrate]=useState(0)
    let [loantenure,setloantenure]=useState(0)
    let [emi,setemi]=useState(null)

    let handleSubmit=(e)=>{
        e.preventDefault()
        let monthlyRate=interestrate/12/100
        let numberOfInstallments=loantenure*12
    let emiAmount = (loanamount*monthlyRate * Math.pow(1 + monthlyRate, numberOfInstallments))/(Math.pow(1+monthlyRate,numberOfInstallments)-1)
    setemi(emiAmount.toFixed(2))
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
      <h1 className="emih1">EMI Calculator</h1>
        <Card style={{width:'45rem'}} className='emicard'>
        <header className='emihead'>Calculate Your EMI</header>
        <form onSubmit={handleSubmit}>
            <div className='emila'>
            <label>Loan Amount</label>
          <input type="number" value={loanamount} onChange={(e) => setloanamount(e.target.value)} required />
            </div>
            <div className='emiair'>
            <label>Annual Interest Rate (%)</label>
            <input type="number" value={interestrate} onChange={(e) => setinterestrate(e.target.value)} required />
            </div>
            <div className='emilt'>
            <label>Loan Tenure (in years)</label>
            <input type="number" value={loantenure} onChange={(e) => setloantenure(e.target.value)} required />
            </div>
            {emi && (
        <div className="emiresult">
          <h3>Your Monthly EMI is: ₹{emi}</h3>
        </div>
      )}
            <footer className='emifoot'>
            <button type="submit" className='emibu'>Calculate EMI</button></footer>
        </form>
        
      </Card>
    </div>
  );
}

export default Emi