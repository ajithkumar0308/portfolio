import React, { useContext } from 'react';
import { Cartcontext } from './App';
import './Cartpage.css'
import { Card,Button} from 'react-bootstrap'
import Nav from './Nav';


function Cartpage() {
  let [cart, setcart] = useContext(Cartcontext)
 
  const removeFromCart = (id) => {
    setcart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Nav/>
      <Card style={{width:'69rem'}} className='carcard'>
      <h1 className='cartpg'>Cart Page</h1>
      {cart && cart.length > 0 ?(
        cart.map((item)=> (
          <div key={item.id}>
            <div className='carprd'>
              <h2>Product Name</h2>
            </div>
  
            <div className='prti'>
              {item.title}
            </div>
  
            <div className='carpri'>
              <h2>Price</h2>
            </div>
  
            <div className='priti'>
              {item.price} $
            </div>
  
            <div className='cardes'>
              <h2>Description</h2>
            </div>
  
            <div className='desti'>
              {item.description}
            </div>
  
            <div className='carimg'>
              <img src={item.image} alt={item.title} style={{ width: '100px' }}/>
            </div>
  
            <div>
              <button onClick={()=>removeFromCart(item.id)} className='carbu'>Remove from Cart</button>
            </div>
          </div>
        ))
      ):(
        <p className='carp'>Your cart is empty!</p>
      )}
      
      </Card>
    </div>
  );
}

export default Cartpage;