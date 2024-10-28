import { FC } from 'react'
import { social } from '../../../helpers/social'

import './Footer.css'

export const Footer: FC = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="footer__social">
						{social.map(el => (
							<li className="footer__social-item">
								<a href={el.link} target={'_blank'}>
									<img src={el.img} alt={el.img} />
								</a>
							</li>
						))}
					</ul>
					<div className="footer__development">
						<p>© Portfolio, 2023</p>
						<p>
							Developer:
							<a
								href="https://t.me/egor_kostiuk"
								className="footer__development-link"
								target={'_blank'}
							>
								{' '}
								Egor Kostiuk
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
