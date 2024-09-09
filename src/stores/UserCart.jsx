
import React from 'react'
import NavBar from "./components/NavBar";

import { useCart } from "../stores/context/CartContext";



const UserCart = () => {

    const {cartItems, addToCart, removeFromCart} = useCart()

    console.log(cartItems);

  return (
<>
<NavBar />
<div>
    <h2 className='y-cart'>Your Cart</h2>
 {cartItems.length ===0 ?
    (<p className='empty'>Your Cart is Empty</p>):
   <div>
     {cartItems.map((item)=>{
        return(
            <div className='cart-section'>
                <div className="cart-img">
                    <img src={item.image} alt="" />
                </div>
                <div className="cart-details">
  <h3>{item.company}</h3>  {/* Changed from item.product to item.company */}
  <h2>{item.price}</h2>
  <h3>{item.model}</h3>
</div>

                <button className='removeBtn' onClick={() => removeFromCart(item)}>Remove</button>
            </div>
        )
    })}
   </div>

}
     
    </div>
</>
  )
}

export default UserCart