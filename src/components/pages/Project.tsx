import { useParams } from 'react-router-dom'

import { projects } from '../../helpers/projects'
import { Layout } from '../ui/layout/Layout'

import gitHub from '../../assets/icons/github_mini.svg'
import netlify from '../../assets/icons/netlify.svg'

export const Project = () => {
	const { id } = useParams<{ id: string }>()
	const projectId = parseInt(id ?? '', 10)
	const project = !isNaN(projectId) ? projects[projectId] : null

	return (
		<Layout>
			<main className="section">
				<div className="container">
					<div className="project__wrapper">
						{project ? (
							<>
								<h1 className="title-1">{project.title}</h1>
								<div
									className={`project__img-container project__img-container-${project.id}`}
								>
									<img
										src={project.img}
										alt="project photo"
										className="project__img"
									/>
								</div>
								<div className="project__description">
									<p>Skills: {project.skills}</p>
								</div>
								<div className="buttons">
									<a
										href={project.gitHubLink}
										className="btn-outline"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={gitHub} alt="code" />
										GitHub repo
									</a>
									{project.demoLink && (
										<a
											href={project.demoLink}
											className="btn-outline"
											target="_blank"
											rel="noopener noreferrer"
										>
											<img src={netlify} alt="demo" />
											Demo
										</a>
									)}
								</div>
							</>
						) : (
							<p>Project not found</p>
						)}
					</div>
				</div>
			</main>
		</Layout>
	)
}
