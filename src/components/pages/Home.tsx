import { FC } from 'react'
import { Layout } from '../ui/layout/Layout'
import { Header } from '../ui/header/Header'
import { ProjectsBlock } from '../ui/projects-block/ProjectBlock'

export const Home: FC = () => {
	return (
		<>
			<Layout>
				<Header />
				<ProjectsBlock />
			</Layout>
		</>
	)
}
