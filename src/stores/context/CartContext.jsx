import { createContext, useContext,  useState} from "react";

const CartContext = createContext({
})

export const CartProvider = ({children}) => {

  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    if (!cartItems.some(cartItem => cartItem.id === item.id)) {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem !== item))
  }

  return( <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>

    {children}
  </CartContext.Provider>)
}

export const useCart = () => {
  return useContext(CartContext)
}