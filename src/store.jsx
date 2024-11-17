import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/Cart/CartSlice"
import userReducer from "./features/user/UserSlice"

const store = configureStore({
  reducer:{
  cart:cartReducer,
  user:userReducer
}
})

export default store