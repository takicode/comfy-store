import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

import { Header,Loading } from '../components'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === "loading"
  return (
    <div >
      <Header/>
      <Navbar/>
      {isLoading? <Loading/> : <section className="align-element py-20 ">
       <Outlet />
      </section>}

    </div>
  )
}

export default HomeLayout