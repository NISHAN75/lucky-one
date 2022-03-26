
import './Cart.css'
const Cart = (props) => {
  const cart=props.cart
  return (
    <div className='cart'>
      <h4>Select<br></br> Headphone</h4>
      
      {
        cart.map( product => <h5 key={product.id}>{product.name}</h5>)
      }
      <button  className='c-btn-one'>CHOOSE 1 FOR ME</button><br></br>
      <button  className='c-btn-two'>CHOOES AGAIN</button>
    </div>
  );
};
export default Cart;