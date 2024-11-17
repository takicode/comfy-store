import { Form, useLoaderData, Link } from "react-router-dom"
import {FormInput, FormSelect, FormRange} from "../components"
import FormCheckbox from "./FormCheckbox"


const Filters = () => {
  const {meta,searches} = useLoaderData()
   const {shipping, search, company, category, order, price} = searches
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center"> 
    {/* SEARCH */}
    <FormInput type="search" label="search product" name="search" size="input-sm" defaultValue={search}/>
    {/* Category */}
    <FormSelect
  label='select category'
  name='category'
  list={meta.categories}
  size='select-sm'
  defaultValue={category}
/>
{
  /* COMPANIES */
}
<FormSelect
  label='select company'
  name='company'
  list={meta.companies}
  size='select-sm'
  defaultValue={company}
/>
{
  /* ORDER */
}
<FormSelect
  label='sort by'
  name='order'
  list={['a-z', 'z-a', 'high', 'low']}
  size='select-sm'
  defaultValue={order}
/>
{/* RANGE */}
<FormRange label="select price" name="price" size="range-sm" price={price}/>
{/* CHECKBOX */}
 <FormCheckbox name="shipping" label="Free shipping" size="checkbox-sm" defaultChecked={shipping}/>
    {/* BUTTONS */}
    <button type="submit" className="btn btn-primary btn-sm">
      search
    </button>
    <Link to="/products" className="btn btn-accent btn-sm">reset</Link>

    </Form>
  )
}

export default Filters