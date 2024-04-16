;
import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <div>
      <header>
        <h1>Admin Header</h1>
      </header>
      <main>
        <Outlet />  {/* This will render the nested routes' components */}
      </main>
      <footer>
        <p>My App Footer © 2024</p>
      </footer>
    </div>
  )
}

export default AdminLayout;
