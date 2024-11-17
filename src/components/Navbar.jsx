import { NavLink } from "react-router-dom"
import {FaBarsStaggered} from "react-icons/fa6"
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import Navlinks from "./Navlinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/UserSlice";



const Navbar = () => {
  const {numItemsInCart}= useSelector((store)=>store.cart)
  const dispatch = useDispatch()
  const handleTheme = () =>{
    dispatch(toggleTheme())
  }


  return (
    <nav className="bg-base-200">
      <div className="max-w-6xl px-8 mx-auto navbar ">
        <div className="navbar-start">
          <NavLink to="/" className="hidden lg:flex btn btn-secondary text-3xl items-center">C</NavLink>
          {/* dropdown */}
          <div className="dropdown">
            <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
           <FaBarsStaggered  className="h-6 w-6" />
           </label>
           <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
           <Navlinks/>
         </ul>
        </div>
          
          
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="menu menu-horizontal">
            <Navlinks/>
          </ul>
        </div>
        <div className="navbar-end ">
          {/* Theme setup */}
           <label className="swap swap-rotate" onChange={handleTheme}>
          <input type="checkbox"  />
              <BsSunFill className="swap-on h-6 w-6 fill-current"/>
          {/* moon icon */}
             <BsMoonFill className="swap-off h-6 w-6 fill-current"/>
         </label>
          {/* cart link */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
           <div className="indicator">
            <BsCart3 className="h-6 w-6"/>
              <span className="badge badge-sm badge-primary indicator-item">{numItemsInCart}</span>
           </div>
          </NavLink>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar