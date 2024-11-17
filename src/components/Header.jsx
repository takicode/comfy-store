import { useDispatch, useSelector } from "react-redux"
import { Link, redirect, useNavigate, useNavigation } from "react-router-dom"
import { logoutUser } from "../features/user/UserSlice"
import { clearCart } from "../features/Cart/CartSlice"
import { useQueryClient } from "@tanstack/react-query"


const Header = () => {
  const {user} = useSelector((state)=>state.user)
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <header className='bg-neutral py-2 text-neutral content'>
      <div className="align-element flex justify-center sm:justify-end">
        {/* User */}
        {user? 
         <div className="flex gap-x-2 sm:gap-x-8 items-center">
          <p className="text-xs sm:text-sm text-neutral-content">Hello, {user.username}
          </p>
          <button className="btn btn-xs btn-outline btn-primary" onClick={()=>{
            navigate("/")
            dispatch(clearCart())
            dispatch(logoutUser())
            queryClient.removeQueries()}}>logOut</button>
        </div> 
        :
        <div className="flex gap-x-6 justify-center items-center">
          <Link to="/login" className="link link-hover text-xl text-neutral-content sm:text-sm ">Sign in / Guest</Link>
          <Link to="/register" className="link link-hover text-xl text-neutral-content sm:text-sm ">Create account</Link>
        </div> } 
        
      </div>
    </header>
  )
}

export default Header