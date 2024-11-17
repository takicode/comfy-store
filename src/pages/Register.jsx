import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import {Link, Form, redirect } from 'react-router-dom'
import { customFetch } from '../utils'
import { toast } from 'react-toastify'

export const action = async({request})=>{
  const formData =await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const response = await customFetch.post("/auth/local/register",data)
    toast.success("account created successfully")
    return redirect("/login")
  } catch (error) {
    console.log(error);
    const errorMessage = error?.response?.data?.error?.message || "Please double check your credentials "
    toast.error(errorMessage)
    return null
  }
  
}

const Register = () => {


  
  return (
    <section className='h-screen grid place-items-center'>
      <Form method='post' className='card p-8 shadow-lg rounded-lg w-96 bg-base-100 gap-y-4'>
        <h4 className='text-center font-bold text-3xl'>Register</h4>
        <FormInput label="username" type="text" name="username" defaultValue="james smith" />
        <FormInput label="email" type="email" name="email" defaultValue="james@gmail.com"/>
        <FormInput label="password" type="password" name="password" defaultValue="secret" />
        <div className='mt-4'>
          <SubmitBtn text="register"/>
        </div>
         <p className='text-center mt-4'>
            Already have an account?
            <Link to="/login" className='ml-2 link link-hover link-primary capitalize'>login here</Link>
        </p>
      </Form>
    </section>
  )
}

export default Register