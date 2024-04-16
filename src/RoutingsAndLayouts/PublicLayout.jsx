
import { Outlet } from 'react-router-dom'

function PublicLayout() {
  return (
    <div>
      <header>
        <h1>Public Header</h1>
        {/* Navigation or other elements */}
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

export default PublicLayout