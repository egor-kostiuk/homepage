import { social } from './footer-data.js';
import { createSocialItem } from './footer-social.js';
import { container } from './footer-container.js';

const footer = document.querySelector('.footer');

// adds the main container to the footer
footer.appendChild(container);

// add a social list to the first child (footer__wrapper) of the container
container.children[0].insertBefore(createSocialItem(social), container.children[0].firstChild);