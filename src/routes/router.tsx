import { createBrowserRouter } from 'react-router-dom'

import { Home } from '../components/pages/Home'
import { Skills } from '../components/pages/Skills'
import { Contacts } from '../components/pages/Contacts'
import { Biography } from '../components/pages/Biography'
import { Project } from '../components/pages/Project'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/project/:id',
		element: <Project />
	},
	{
		path: '/skills',
		element: <Skills />,
	},
	{
		path: '/contacts',
		element: <Contacts />
	},
	{
		path: '/biography',
		element: <Biography/>
	}
])
