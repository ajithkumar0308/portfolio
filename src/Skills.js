import React from 'react'
import html from './img/html.png'
import css from './img/css.png'
import js from './img/js.png'
import react from './img/react.png'
import node from './img/node.png'
import mongodb from './img/mongodb.png'
import express from './img/express.png'
import post from './img/post.png'
import aws from './img/aws.png'
import firebase from './img/firebase.png'
import { Navbar } from 'react-bootstrap';
import port1 from './img/port1.png';
import { useNavigate } from 'react-router-dom';

function Skills() {
  let navigate=useNavigate()

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
        <h1 className='skills'>Skills</h1>
        <img src={html} className='skimg1'></img>
        <img src={css} className='skimg2'></img>
        <img src={js} className='skimg3'></img>
        <img src={react} className='skimg4'></img>
        <img src={node} className='skimg5'></img>
        <img src={mongodb} className='skimg6'></img>
        <img src={express} className='skimg7'></img>
        <img src={post} className='skimg8'></img>
        <img src={aws} className='skimg9'></img>
        <img src={firebase} className='skimg10'></img>

    </div>
  )
}

export default Skills