import logo from './logo.svg';
import './App.css';
import Variables from './Variables';
import Operators from './Operators';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from './img/images.jpeg'
import Home from './Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import { createContext, useReducer } from 'react';
import Cartpage from './Cartpage';
import Nav from './Nav';
import Signuppage from './Signuppage';
import Useeffectaiimg from './Useeffectaiimg';
import Login from './Login';
import Homepage from './Homepage';
import About from './About';
import Agecalculator from './Agecalculator';
import Bmi from './Bmi';
import Emi from './Emi';
import Skills from './Skills';
export let Cartcontext = createContext()

let reducer=(state,action)=>{
  switch(action.type){
    case "addtocart":
      return [...state,{...action.item,quantity:1}]
  
  }
  }

function App() {
  let [cart,setcart]=useReducer(reducer,[])
   console.log(cart)
   let location=useLocation()
  return (
    <div>
      <Cartcontext.Provider value={[cart,setcart]}>
      {/* {location.pathname !='/' && location.pathname !='/vote' && <Nav/>} */}
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/cart1' element={<Cartpage />}></Route>
        <Route path='/project' element={<Homepage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/age' element={<Agecalculator/>}></Route>
        <Route path='/bmi' element={<Bmi/>}></Route>
        <Route path='/emi' element={<Emi/>}></Route>
        <Route path='/ecmw' element={<Signuppage/>}></Route>
        <Route path='/vote' element={<Login/>}></Route>
      <Route path='/api' element={<Useeffectaiimg/>}></Route>
      {/* <Route path='/cart1' element={<Cartpage/>}></Route> */}
      </Routes>
    </Cartcontext.Provider>


    </div>

  );
}

export default App;
