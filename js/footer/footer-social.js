import { social } from './footer-data'


const socialList = document.querySelector('.footer__social');
function createSocialItem (data) {
    for (key in data) {
        const socialItem = document.createElement('li');
    }
}

createSocialItem(social)