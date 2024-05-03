export const routesJson = [
	{
		"path": "/",
		"componentPath": "./Guest/Home",
		"allowedRoles": ["guest", "user", "admin"],
		"title": "Home"
	},
	{
		"path": "*",
		"componentPath": "./Guest/NotFound",
		"allowedRoles": ["guest", "user", "admin"],
		"title": "Not Found"
	},
	{
		"path": "/sign-in",
		"componentPath": "./Guest/SignIn",
		"allowedRoles": ["guest", "user", "admin"],
		"title": "Sign In"
	},
	{
		"path": "/sign-up",
		"componentPath": "./Guest/SignUp",
		"allowedRoles": ["guest", "user", "admin"],
		"title": "Sign Up"
	},
	{
		"path": "/about",
		"componentPath": "./Guest/About",
		"allowedRoles": ["guest", "user", "admin"],
		"title": "About"
	}, 
	{
		"path": "/products",
		"componentPath": "./Guest/Products",
		"allowedRoles": ["guest"],
		"title": "Products",
	},
	{
		"path": "/user-dashboard",
		"componentPath": "./User/UserDashboard",
		"allowedRoles": ["user"],
		"title": "User Dashboard"
	},
	{
		"path": "/admin-dashboard",
		"componentPath": "./Admin/AdminDashboard",
		"allowedRoles": ["admin"],
		"title": "Admin Dashboard"
	}
]