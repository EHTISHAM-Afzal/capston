import React from 'react'
import Header from './src/components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './src/components/Footer'

const Layout = () => {
  return (
    <div className='grids'>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout