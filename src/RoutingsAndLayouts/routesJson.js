export const routesJson = [
	{
		"path": "/",
		"componentPath": "./Guest/Home",
		"allowedRoles": ["guest", "user", "publisher"],
		"title": "Home"
	},
	{
		"path": "*",
		"componentPath": "./Guest/NotFound",
		"allowedRoles": ["guest", "user", "publisher"],
		"title": "Not Found"
	},
	{
		"path": "/sign-in",
		"componentPath": "./Guest/SignIn",
		"allowedRoles": ["guest", "user", "publisher"],
		"title": "Sign In"
	},
	{
		"path": "/sign-up",
		"componentPath": "./Guest/SignUp",
		"allowedRoles": ["guest", "user", "publisher"],
		"title": "Sign Up"
	},
	{
		"path": "/about",
		"componentPath": "./Guest/About",
		"allowedRoles": ["guest", "user", "publisher"],
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
		"path": "/publisher-dashboard",
		"componentPath": "./publisher/publisherDashboard",
		"allowedRoles": ["publisher"],
		"title": "publisher Dashboard"
	}
]