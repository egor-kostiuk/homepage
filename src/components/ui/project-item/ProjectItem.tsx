import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import './ProjectItem.css'

export const ProjectItem: FC<{
	title: string
	img: string
	className?: string
	index: number
}> = ({ title, img, className, index }) => {
	return (
		<NavLink to={`/project/${index}`}>
			<li className="project__item">
				<div className={className}>
					<img src={img} alt={title} className="project__image" />
				</div>
				<h3 className="project__title">{title}</h3>
			</li>
		</NavLink>
	)
}
