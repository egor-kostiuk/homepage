import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

export const App = () => {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	)
}
