import Footer from './src/components/Footer'
import Header from './src/components/Header/Header'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout