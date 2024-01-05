import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header />
        {/* dynamically middle home about will be passed using Outlet */}
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout