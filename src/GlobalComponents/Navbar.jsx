;
import { Link } from 'react-router-dom';
import { routesJson } from '../RoutingsAndLayouts/routesJson';
 

const Navbar = () => { 

  return (
    <nav style={{ padding: '10px', background: 'lightblue', marginBottom: '20px' }}>
      {routesJson.map((route, index) => (
        <Link key={index} to={route.path} style={{ marginRight: '10px' }}>
          {route.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
