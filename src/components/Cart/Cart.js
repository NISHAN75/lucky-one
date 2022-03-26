
import './Cart.css'
const Cart = (props) => {
  const {cart ,randomHeadphone ,random ,allRemoveHeadphone}=props;
  return (
    <div className='cart'>
      <h4>Select<br></br> Headphone</h4>
      {
        cart.map( product => <h5 key={product.id}>{product.name}</h5>)
      }
        <h5>{random.name}</h5>
      <button onClick={()=> randomHeadphone(cart)} className='c-btn-one'>CHOOSE <br></br> 1 FOR ME</button><br></br>
      <button onClick={()=>allRemoveHeadphone(cart)}  className='c-btn-two'>CHOOES AGAIN</button>
    </div>
  );
};
export default Cart;