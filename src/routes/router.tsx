import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../components/pages/Home'
import { Skills } from '../components/pages/Skills'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/skills',
		element: <Skills />,
	},
	{
		path: '/contacts',
		// element: <Contacts />
	},
	{
		path: '/biography',
		// element: <Biography/>
	}
])
