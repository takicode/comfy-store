import { useState } from "react"
import  { ProdutsGrid, ProductsList } from "../components"
import { BsFillGridFill, BsList } from "react-icons/bs"
import { useLoaderData } from "react-router-dom"

const ProductContainer = () => {
  const [grid, setGrid] = useState(true)
  const {meta,products} = useLoaderData()
  const totalProducts = meta.pagination.total

  const setActiveStyles = (pattern)=>{
    return `text-xl btn btn-circle btn-sm ${pattern == grid ? "btn-primary text-primary-content":"btn-ghost text-based-content"}`
  }

  return (
    <>
    <div className="flex justify-between max-w-full items-center mt-8 border-b border-base-300 pb-5">
       <h4 className="font-bold text-lg ">{totalProducts} product{totalProducts > 1 && "s"}</h4>
       <div className="flex gap-x-2 " >
        <button type="button" className={setActiveStyles(true)} onClick={()=>setGrid(true)}>
          <BsFillGridFill />
        </button>
        <button type="button" className={setActiveStyles(false)} onClick={()=>setGrid(false)}>
          <BsList />
        </button>
       </div>
    </div>
    <div>
      {totalProducts === 0 ? (
        <h5 className="text-xl mt-16">
          Sorry, no products matched your search...
        </h5>
      ): grid === true? <ProdutsGrid/> :<ProductsList/>}
    </div>
    
    </>
  )
}

export default ProductContainer