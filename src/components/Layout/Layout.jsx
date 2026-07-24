import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import './Layout.scss'

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Navigation />
      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout