import { useSelector } from "react-redux"
import CartItems from "./CartItems"


const CartItemsList = () => {
  const {cartItems} = useSelector((state)=>state.cart)

  return (
    <div>
      {cartItems.map((cartItem)=>{
        return <CartItems key={cartItem.cartID} cartItem={cartItem}/>
      })}
    </div>
  )
}

export default CartItemsList