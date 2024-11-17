
import { FeaturedProducts, Hero } from "../components"
import {customFetch} from "../utils"
const url = '/products?featured=true'

const featuredProductQuery = {
  queryKey :["featuredProducts"],
  queryFn:()=> customFetch.get(url)

}

export const loader =(queryClient)=> async() =>{
  const {data} = await queryClient.ensureQueryData(featuredProductQuery)
  const products = data.data
  return {products}
}

const LandingPage = () => {
  
  return <>
    <Hero/>
    <FeaturedProducts />
  </>
}

export default LandingPage