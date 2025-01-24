import React from 'react'
import './Nav.css'
import { Card, Navbar } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
function Nav() {
  let username = localStorage.getItem('username')
  return (
    <div>
         <Navbar  className='navb'>
        <Link to={'/cart1'}>
        <button className='usecart' >cart</button></Link>
        <Link to={'/vote'}>
        <button className='uselogout'>logout</button></Link>
        <h1 className='usepro'>Products</h1>
        <p className='usep2'>Welcome {username}</p>
        

        </Navbar>
    </div>
  )
}

export default Nav