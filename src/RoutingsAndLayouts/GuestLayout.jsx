
import { Outlet } from 'react-router-dom'
import GuestNavbar from "../GlobalComponents/GuestNavbar"

function GuestLayout() {
  return (
    <div>
      <header>
        <GuestNavbar/>
      </header>
      <main>
        <Outlet />  {/* This will render the current route's component */}
      </main>
      <footer>
        <p>My App Footer © 2024</p>
      </footer>
    </div>
  )
}

export default GuestLayout