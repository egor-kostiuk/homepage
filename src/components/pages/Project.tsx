import { useParams } from 'react-router-dom'

import { projects } from '../../helpers/projects'
import { Layout } from '../ui/layout/Layout'

import gitHub from '../../assets/icons/github_mini.svg'
import netlify from '../../assets/icons/netlify.svg'


export const Project = () => {
	const { id } = useParams()
	const project = projects[id]

	return (
		<Layout>
			<main className="section">
				<div className="container">
					<div className="project__wrapper">
						<h1 className="title-1">{project.title}</h1>
						<div className={`project__img-container project__img-container-${project.id}`}>
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
								target={'_blank'}
							>
								<img src={gitHub} alt="code" />
								GitHub repo
							</a>
							{project.demoLink && (
								<a
									href={project.demoLink}
									className="btn-outline"
									target={'_blank'}
								>
									<img src={netlify} alt="demo" />
									Demo
								</a>
							)}
						</div>
					</div>
				</div>
			</main>
		</Layout>
	)
}
