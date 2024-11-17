import React, { useState } from 'react'
import {customFetch, generateAmountOptions} from "../utils"
import {generatePath, Link, useLoaderData } from 'react-router-dom'
import {formatPrice} from "../utils"
import { addItem } from '../features/Cart/CartSlice'
import { useDispatch } from 'react-redux'

const singleProductQuery = (id) =>{
 return {
  queryKey:["singleProduct", id],
 queryFn:()=> customFetch.get(`/products/${id}`)
 }
}


export const loader=(queryClient)=>  async({params}) =>{
  const productId = params
  const id = productId.id
  const response = await queryClient.ensureQueryData(singleProductQuery(id))
  return response.data.data
}

const SingleProduct = () => {
  const dispatch = useDispatch()
  const product = useLoaderData()
  const {image, title, price, description, colors, company} = product.attributes
  const dollarAmount = formatPrice(price)
  const Amount = generateAmountOptions(20)
  
  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)
   
  const handleAmount = (e)=>{
   e.preventDefault()
   setAmount(parseInt(e.currentTarget.value))
  }

  const cartProduct = {
    cartID : product.id + productColor,
    productID : product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount
  }

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-6">
        <img src={image} alt={title} className='w-96 h-96 object-cover rounded-lg lg:w-full' />
        <div>
          <h1 className='capitalize text-3xl font-bold'>   
          </h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>{company}</h4>
          <p className='mt-3 text-xl'>{dollarAmount}</p>
          <p className='mt-6 leading-8'>{description}</p>
          {/* Colors */}
          <div className='mt-6'>
            <h4 className='text-md font-medium tracking-wider capitalize'>colors</h4>
            <div className='mt-2'>
              {colors.map((color)=>{ 
              return ( <button key={color} type="button" className={`badge w-6 h-6 mr-2 ${color === productColor && "border-2 border-secondary"}`} style={{backgroundColor:color}} onClick={()=>setProductColor(color)}>
              </button>
               
              )
            })}
            </div>
            <div className='form-control w-full max-w-xs'>
              <label className='label' htmlFor='amount'>
                <h4 className='text-md font-medium tracking-wider capitalize'>amount</h4>
              </label>
              <select className="select select-secondary select-bordered select-md" id="amount" value={amount} onChange={handleAmount}>
               {Amount}
              </select>
            </div>
            <div className='mt-10'>
               <button className='btn btn-secondary btn-md' onClick={()=>dispatch(addItem(cartProduct))
               }>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct