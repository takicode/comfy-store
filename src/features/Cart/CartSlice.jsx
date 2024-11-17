import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getLocalStorage = () =>{
  const local = JSON.parse(localStorage.getItem("cart")) || defaultState
  return local
}

const defaultState = {
  cartItems:[],
  numItemsInCart:0,
  cartTotal:0,
  shipping:500,
  tax:0,
  orderTotal:0,
  loading:false
}


const cartSlice = createSlice({
  name:"cart",
  initialState:getLocalStorage(),
  reducers:{
     addItem:(state,action)=>{
      const products = action.payload
    
      const items = state.cartItems.find((i)=>i.cartID === products.cartID)
      if(items){
        items.amount += products.amount
      }
     else{
      state.cartItems.push(products)
     } 
      state.numItemsInCart += products.amount
      state.cartTotal += products.amount * products.price
      cartSlice.caseReducers.calculateTotals(state)
      toast.success("item added to cart")
      },
     clearCart:(state)=>{
      localStorage.setItem("cart", JSON.stringify(defaultState))
      toast.success("cart cleared")
      return defaultState
     },
     removeItem:(state, action)=>{
    
      
        const cartID = action.payload
        const item = state.cartItems.find((i)=>i.cartID === cartID)
      
        state.cartItems = state.cartItems.filter((i)=>i.cartID !== cartID)
        state.numItemsInCart -= item.amount
        state.cartTotal -= item.amount * item.price
        cartSlice.caseReducers.calculateTotals(state)
        toast.error("item removed from cart")
     },
     editItem:(state, action)=>{

        const {cartID, amount,price} = action.payload
        const product = state.cartItems.find((i)=>i.cartID === cartID)
        
       state.numItemsInCart += amount - product.amount 
       state.cartTotal += (amount * price) - (product.amount * product.price)
       product.amount = amount
       cartSlice.caseReducers.calculateTotals(state)
        toast.success("Cart updated")
        
      },
     calculateTotals:(state)=>{
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
     }
  }
})


const {actions, reducer} = cartSlice
export const {addItem,clearCart,removeItem,editItem} = actions
export default reducer