import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

import './styles/App.css'
import './styles/project-details.css' // TODO: optimize
import './styles/colors.css'

export const App = () => {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	)
}
