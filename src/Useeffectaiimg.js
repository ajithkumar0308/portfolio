import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Navbar } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import { Cartcontext } from './App'
import Nav from './Nav'
function Useeffectaiimg() {
    let [record,setrecord]=useState([])
    let [cart,setcart]=useContext(Cartcontext)
    useEffect(()=>{
        fetchdata()
    },[])
        let fetchdata=async()=>{
            let res=await axios.get('https://fakestoreapi.com/products').then(res=>{
                console.log(res.data);
                setrecord(res.data)    
            })
        }
        
    
    let handleaddtocart=(item)=>{
setcart({type:"addtocart",item})
    }
  return (
    <div className='prodiv'>
        <Nav/>     
        <h2 className='useh2'>Buy Your Products</h2>
       
        <ul>
            {record && record.map(item=>(
                <li key={item.id} className='useid' onClick={()=>handleaddtocart(item)}>
                    <div className='useitem1'>
                    <h2>Product Name</h2>
                    </div>

                    <div className='usetitle'>
                    {item.title}
                    </div>

                    <div className='useitem2'>
                    <h2>Prize</h2>
                    </div>

                    <div className='usePrize'>
                    {item.price} $
                    </div>

                    <div className='useitem3'>
                    <h2>Description</h2>
                    </div>   

                    <div className='useDescription'>
                    {item.description}
                    </div>
                    
                    <div className='useimg'>
                        <img src={item.image} style={{width:'100px'}}/>
                        </div>  
                    
                                     
                </li>
             ))
             }
        </ul>
    </div>
  )
}

export default Useeffectaiimg