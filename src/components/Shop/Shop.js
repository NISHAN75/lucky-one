import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
  const [products , setProducts]=useState([]);
  const [cart,setCart]=useState([]);
  const [random ,setRandom]=useState([]);
   useEffect(()=>{
   fetch('products.json')
   .then(res => res.json())
   .then(data => setProducts(data))
 },[]);
 const addSelectHeadphone =(product)=>{
    const newCart=[...cart , product];
    if(newCart.length >4){
      alert('you cannot add more than 4 item')
      return;
    }
    setCart(newCart);
}
const randomHeadphone=(cart)=>{
  if(cart.length ===0){
    return;
  }
  else{
    setCart([]);
  const randomCount=cart[Math.floor(Math.random() * cart.length)];
    setRandom(randomCount);
  }
}
const allRemoveHeadphone=()=>{
  setCart([]);
  setRandom([]);
}
  return (
    <div className='shop-container'>
        <div className="product-container">
        {
          products.map( product =><Product product={product}
            addSelectHeadphone={addSelectHeadphone}
            key={product.id}
          ></Product>)
        }
        </div>
        <div className='cart-container'>
          <Cart randomHeadphone={randomHeadphone} random={random} allRemoveHeadphone={allRemoveHeadphone} cart={cart} ></Cart>
        </div>
        
    </div>
  );
};

export default Shop;