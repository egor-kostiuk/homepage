import { FC, PropsWithChildren } from 'react'
import { Nav } from '../nav/Nav'
import { Footer } from '../footer/Footer'
import { ScrollToTop } from '../../../utils/scroll-to-top'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<ScrollToTop />
			<Nav />
			{children}
			<Footer />
		</>
	)
}
