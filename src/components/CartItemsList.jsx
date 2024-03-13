import React from "react"
import { useSelector } from "react-redux"
import CartItem from "./CartItem"

const CartItemsList = () => {
  const { cartItems } = useSelector((state) => state.cartState)
  //   console.log(cartItems)
  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.cartId} cartItem={item} />
      ))}
    </div>
  )
}

export default CartItemsList
