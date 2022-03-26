import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
  const {product,addSelectHeadphone}=props;
  const {name,price,img}=product;
  return (
    <div className='product'>
        <img src={img} alt="" />
        <div className="product-info">
        <h4>name:{name}</h4>
        <p>Price:{price}</p>
        <button onClick={()=>addSelectHeadphone(product)}  className='btn-text'>Add to Cart
        <FontAwesomeIcon className='icon' icon={faShoppingBasket}/>
        </button>
        </div>
    </div>
  );
};

export default Product;