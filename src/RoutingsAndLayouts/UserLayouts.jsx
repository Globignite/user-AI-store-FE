
import { Outlet } from 'react-router-dom'

function UserLayouts() {
  return (
    <div>
      <header>
        <h1>User Navbar</h1>
        {/* Navigation or other elements */}
      </header>
      {/* sidebar  */}
      <main>
        <Outlet />  {/* This will render the current route's component */}
      </main>
      <footer>
        <p>My App Footer © 2024</p>
      </footer>
    </div>
  )
}

export default UserLayouts