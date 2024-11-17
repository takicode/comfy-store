import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import  {HomeLayout, LandingPage,About,Cart, Checkout, Error, Login, Products, Register, SingleProduct, Orders
 } from "./index"

 import {loader as LandingLoader} from "./pages/LandingPage"
 import {loader as SingleProductLoader} from "./pages/SingleProduct"
 import {loader as ProductLoader} from "./pages/Products"
 import {loader as CheckoutLoader} from "./pages/Checkout"
 import {loader as ordersLoader} from "./pages/Orders"
 import {action as RegisterAction} from "./pages/Register" 
 import {action as LoaderAction} from "./pages/Login" 
 import {action as CheckoutAction} from "./components/CheckoutForm" 
import { ErrorElement } from "./components"
import store from "./store"

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000 * 60 * 5
    }
  }
})

const router = createBrowserRouter([{
  element:<HomeLayout/>,
  path:"/",
  errorElement:<Error/>,
  children:[
    {
      index:true,
      element:<LandingPage/>,
      errorElement:<ErrorElement/>,
      loader:LandingLoader(queryClient)
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/checkout",
      element:<Checkout/>,
      loader:CheckoutLoader(store),
      action:CheckoutAction(store,queryClient)
    },
    {
      path:"/products",
      element:<Products/>,
      loader:ProductLoader(queryClient)
    },
    {
      path:"/products/:id",
      element:<SingleProduct/>,
      loader:SingleProductLoader(queryClient)
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    
    {
      path:"/orders",
      element:<Orders/>,
      loader:ordersLoader(store, queryClient)
    },
    
  ],
},
  {
    path:"/register",
    element:<Register/>,
    errorElement:<Error/>,
    action:RegisterAction
  },
  {
    path:"/login",
    element:<Login/>,
    errorElement:<Error/>,
    action:LoaderAction(store)
  },
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>

      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App