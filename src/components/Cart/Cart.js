import React from 'react';
import './Cart.css'
const Cart = (props) => {
  const cart=props.cart
console.log(props);
  return (
    <div className='cart'>
      <h4>Select<br></br> Headphone</h4>
      <button className='c-btn-one'>CHOOSE 1 FOR ME</button><br></br>
      <button className='c-btn-two'>CHOOES AGAIN</button>
      {
        cart.map( product => <li>{product.name}</li>)
      }
    </div>
  );
};
export default Cart;