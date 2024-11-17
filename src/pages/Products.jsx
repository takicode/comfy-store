import { Filters, PaginationContainer, ProductContainer } from "../components"
import { customFetch } from "../utils"
const url = "/products"

const productsQuery = (searches)=>{
  const {search, category, company, sort, price, shipping, page} = searches
  return{
    queryKey:["products", search?? "", category??"all",company??"all", sort??"a-z", price??100000, shipping?? false , page??1],
    queryFn: ()=>customFetch(url,{searches})
  }
}
 
export const loader =(queryClient)=> async({request})=>{

 const params = [...new URL(request.url).searchParams.entries()]
 const searches = Object.fromEntries(params)
     
  
  
  const {data} = await queryClient.ensureQueryData(productsQuery(searches))
  const products = data.data
  const meta = data.meta
  return {products, meta,searches}
}

const Products = () => {
  return (
    <>
     <Filters/>
     <ProductContainer/>
     <PaginationContainer/>
    </>
   
  )
}

export default Products