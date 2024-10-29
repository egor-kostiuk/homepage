import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

import './App.css'
import './project-details.css' // TODO: optimize
import './colors.css'

export const App = () => {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	)
}
