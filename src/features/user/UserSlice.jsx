import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const themes ={
    winter : "winter",
    dracula: "dracula"
}
const getUserFromLocalStorage = ()=>{
  return JSON.parse(localStorage.getItem("user")) || null
}

const oldtheme =()=>{
  const theme = localStorage.getItem("theme") || themes.dracula
  document.documentElement.setAttribute("data-theme", theme)  
    return theme;
} 

const defaultState = {
  user:getUserFromLocalStorage(),
  theme:oldtheme()
}

const userSlice = createSlice({
  name:"user",
  initialState:defaultState,
  reducers:{
      loginUser:(state, action)=>{
       const user = {...action.payload.user, token:action.payload.jwt }
       state.user = user
       localStorage.setItem("user",JSON.stringify(user))
      },
      logoutUser:(state)=>{
        state.user = null
        localStorage.removeItem("user")
        toast.success("logged out successfully")
      },
      toggleTheme:(state)=>{
        const {dracula, winter} = themes
        state.theme = state.theme === dracula? winter : dracula
        document.documentElement.setAttribute("data-theme",state.theme)
        localStorage.setItem("theme", state.theme)
      }
  }
})

const {actions, reducer} = userSlice
export const {loginUser,logoutUser,toggleTheme} = actions
export default reducer