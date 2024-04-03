export function createSocialItem(data) {
    const socialList = document.createElement('ul');
    socialList.classList.add('footer__social');

    for (let key in data) {
        const socialItem = document.createElement('li');
        const socialLink = document.createElement('a');

        socialLink.href = data[key];
        socialItem.classList.add('footer__social-item');

        socialItem.appendChild(socialLink);
        socialList.appendChild(socialItem);
    }
    return socialList;
}
