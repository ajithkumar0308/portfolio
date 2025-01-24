import React from 'react'
import { Card } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap';
import port1 from './img/port1.png';
import { useNavigate } from 'react-router-dom';

function About() {
  let navigate=useNavigate()
  return (
    <div>
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
      <Card className='abtcard1'>
        <h1 className='abt'>About</h1>
        <p className='abtp1'>
            I am a passionate and dedicated web developer with internship experience building modern, responsive, and user-friendly websites and applications.
          </p>
          <p className='abtp1'>
            I specialize in front-end development, crafting visually appealing and interactive interfaces using HTML, CSS, JavaScript, and React.js. I also have a strong background in back-end development, working with technologies like Node.js, Express.js, and databases such as MongoDB.
          </p>
          <p className='abtp1'>
            Whether it's a brand-new website, an e-commerce platform, or a custom web application, I take pride in my attention to detail and commitment to delivering high-quality, performant solutions that meet my clients' needs.
          </p>
          </Card>
          <Card className='abtcard2'>
          <h1 className='abtskill'>My Skills</h1>
          <ul>
            <li className='li'>
              <p className='abtp2'>Front-End: HTML5, CSS3, JavaScript, React, Vue.</p>
            </li>
            <li className='li'>
              <p className='abtp2'>Back-End: Node.js, Express.js.</p>
            </li>
            <li className='li'>
              <p className='abtp2'>Databases: MongoDB.</p>
            </li>
            <li className='li'>
              <p className='abtp2'>Tools & Technologies: GitHub, Postman, Firebase.</p>
            </li>
            <li className='li'>
              <p className='abtp2'>UI/UX: Framer-motion, React-Bootstrap, Responsive Design.</p>
            </li>
          </ul>
          <p className='abtp3'>
            I’m constantly learning new techniques, staying up-to-date with the latest trends, and improving my skills. When I'm not coding, you can find me exploring new tech or contributing to open-source projects.
          </p>
          <p className='abtp3'>
            Feel free to connect with me if you have a project in mind or if you just want to talk about the latest trends in web development!
          </p>
          </Card>
    </div>
    
  )
}

export default About