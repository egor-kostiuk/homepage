import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../components/pages/Home'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/cart',
		// element: <Cart />,
	},
	{
		path: '/product',
		// element: <Product />
	},
])
