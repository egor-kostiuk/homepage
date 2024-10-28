import { FC, PropsWithChildren } from 'react'
import { Nav } from '../nav/Nav'
import { Footer } from '../footer/Footer'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Nav></Nav>
			{children}
			<Footer></Footer>
		</>
	)
}
