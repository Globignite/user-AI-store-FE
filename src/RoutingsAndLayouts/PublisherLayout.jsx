import { Outlet } from "react-router-dom";
import PublisherNavbar from '../GlobalComponents/PublisherNavbar';

function PublisherLayout() {
  return (
    <div>
      <header>
        <PublisherNavbar />
      </header>
      <main>
        <Outlet /> {/* This will render the nested routes' components */}
      </main>
      <footer>
        <p>My App Footer © 2024</p>
      </footer>
    </div>
  );
}

export default PublisherLayout;
