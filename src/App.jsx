import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
  
import { routesJson } from './RoutingsAndLayouts/routesJson';

import PublisherLayout from './RoutingsAndLayouts/PublisherLayout';
import UserLayouts from './RoutingsAndLayouts/UserLayouts';
import GuestLayout from './RoutingsAndLayouts/GuestLayout';


const App = () => {
  const userRole = 'guest'; // This should come from user session or authentication context

  const dynamicImport = (componentPath) => {
    return lazy(() => import(componentPath));
  };

  const getLayout = (role) => {
    if (role === 'publisher') return PublisherLayout;
    if (role === 'user') return UserLayouts;
    return GuestLayout;
  };

  const Layout = getLayout(userRole);

  return (
		<Router> 
			<Routes>
				<Route path="/" element={<Layout />}>
					{routesJson.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							element={
								route.allowedRoles.includes(userRole) ? (
									<Suspense fallback={<div>Loading...</div>}>
										{React.createElement(dynamicImport(route.componentPath))}
									</Suspense>
								) : (
                    <Navigate to="/sign-in" replace />
								)
							}
						/>
					))}
				</Route>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</Router>
	);
};

export default App;
