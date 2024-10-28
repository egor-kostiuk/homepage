import { FC } from 'react'

import { Nav } from '../ui/nav/Nav'
import { Footer } from '../ui/footer/Footer'

export const Skills: FC = () => {
	return (
    <>
    <Nav/>
		<main className="section">
			<div className="container">
				<h1 className="title-1">Skills</h1>
				<ul className="content__list">
					<li className="content__list-item">
						<h2 className="title-2">Tech Stack</h2>
						<p>
							JavaScript, TypeScript, HTML5, CSS3, SCSS, Tailwind, React Query,
							ReactJS , Git (GitHub), PostgreSQL
						</p>
					</li>
					<li className="content__list-item">
						<h2 className="title-2">Soft Skills</h2>
						<p>Communication, Assertiveness, Confidence, Fast learner</p>
					</li>
				</ul>
			</div>
		</main>
    <Footer/>
    </>
	)
}
