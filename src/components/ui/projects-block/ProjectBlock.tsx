import { FC } from 'react'
import { projects } from '../../../helpers/projects'

import { ProjectItem } from '../project-item/ProjectItem'

import './ProjectBlock.css'

export const ProjectsBlock: FC = () => {
	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Projects</h2>
				<ul className="project__list">
					{projects.map((project, index) => {
						return (
							<ProjectItem
								key={index}
								index={index}
								title={project.title}
								img={project.img}
								className={`project__image-container project__image-container-${index}`}
							/>
						)
					})}
				</ul>
			</div>
		</main>
	)
}
