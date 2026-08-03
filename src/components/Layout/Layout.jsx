import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import './Layout.scss'

import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from "motion/react"


function Layout() {

  return (
    <div className="layout">
      <Header />
      <Navigation />
      <motion.main className="layout-content">
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  )
}

export default Layout