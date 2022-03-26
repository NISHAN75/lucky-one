import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
  const {name,price,img}=props.product
  return (
    <div className='product'>
        <img src={img} alt="" />
        <div className="product-info">
        <h4>name:{name}</h4>
        <p>Price:{price}</p>
        <button className='btn-text'>Add to Cart
        <FontAwesomeIcon className='icon' icon={faShoppingBasket} />
        </button>
        </div>
    </div>
  );
};

export default Product;