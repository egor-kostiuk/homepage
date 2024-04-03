import { social } from './footer-data.js';
import { createSocialItem } from './footer-social.js';
import { container } from './footer-container.js';

const footer = document.querySelector('.footer');

footer.appendChild(container);

container.children[0].appendChild(createSocialItem(social));
