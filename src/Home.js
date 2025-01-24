import React from 'react';
import port1 from './img/port1.png';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import ajithresume from './resume/ajithresume.pdf'


function Home() {
  const navigate = useNavigate();
 let handleDownload = ()=>{
    let link = document.createElement('a')
    link.href = ajithresume
    link.download = 'ajithresume.pdf'
    link.click()
  }



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
        <Card style={{ width: '60rem' }} className='card1'>
        <button onClick={()=> handleDownload()} className='resbu1'>Download Resume</button>
          <p className='hello'>Hello it's me</p>
          <p className='name'>M Ajith Kumar</p>
          <p className='dev'>
            And i'm a <span className='sp1'>Developer</span>
          </p>
          <p className='lo'>
            I am a passionate and dedicated web developer with internship experience building modern, responsive, and user-friendly websites and applications.
          </p>
          <p className='lo'>
            I specialize in front-end development, crafting visually appealing and interactive interfaces using HTML, CSS, JavaScript, and React.js. I also have a strong background in back-end development, working with technologies like Node.js, Express.js, and databases such as MongoDB.
          </p>
          <p className='lo'>
            Whether it's a brand-new website, an e-commerce platform, or a custom web application, I take pride in my attention to detail and commitment to delivering high-quality, performant solutions that meet my clients' needs.
          </p>
        </Card>

        <Card style={{ width: '60rem' }} className='card2'>
          <h1 className='myskills'>My Skills</h1>
          <ul>
            <li className='li'>
              <p className='hp1'>Front-End: HTML5, CSS3, JavaScript, React, Vue.</p>
            </li>
            <li className='li'>
              <p className='hp2'>Back-End: Node.js, Express.js.</p>
            </li>
            <li className='li'>
              <p className='hp3'>Databases: MongoDB.</p>
            </li>
            <li className='li'>
              <p className='hp4'>Tools & Technologies: GitHub, Postman, Firebase.</p>
            </li>
            <li className='li'>
              <p className='hp5'>UI/UX: Framer-motion, React-Bootstrap, Responsive Design.</p>
            </li>
          </ul>
          <p className='imc'>
            I’m constantly learning new techniques, staying up-to-date with the latest trends, and improving my skills. When I'm not coding, you can find me exploring new tech or contributing to open-source projects.
          </p>
          <p className='feel'>
            Feel free to connect with me if you have a project in mind or if you just want to talk about the latest trends in web development!
          </p>
        </Card>
    </div>
  );
}

export default Home;
