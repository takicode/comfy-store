import { redirect, useLoaderData } from "react-router-dom"
import { OrdersList, ComplexPagination, SectionTitle } from "../components"
import { toast } from "react-toastify"
import { customFetch } from "../utils"

const ordersQuery = (params, user) =>{
  return {
    queryKey:["orders", user.username, params.page? parseInt(params.page) : 1],
    queryFn:()=>customFetch.get("/orders", {params, headers:{
      Authorization:`Bearer ${user.token}`
    }}) 
  }
}

export const loader = (store,queryClient)=>async({request})=>{
  const user = store.getState().user.user
  if(!user){
    toast.warn("You must be logged in to checkout")
    return redirect("/login")
  }
  const url = [...new URL(request.url).searchParams.entries()]
  const params = Object.fromEntries(url)
  try {
    const resp = await queryClient.ensureQueryData(ordersQuery(params, user))

    return {orders:resp.data.data, meta:resp.data.meta}
  } catch (error) {
   const errorMessage = error?.response?.data?.error?.message || "there was an error placing your order"
   toast.error(errorMessage)
   if(error?.response?.status === 401 || 403) return redirect("/login")
   return null
  }
}

const Orders = () => {
  const {meta} = useLoaderData()

  if(meta.pagination.total < 1){
     return <SectionTitle text="please make an order"/>

  }
  return (
    <>
     <SectionTitle text="Your orders"/>
     <OrdersList/>
     <ComplexPagination/>
    </>
  )
}

export default Orders