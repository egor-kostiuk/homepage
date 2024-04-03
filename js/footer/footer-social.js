export function createSocialItem(data) {
    const socialList = document.createElement('ul');
    socialList.classList.add('footer__social');

    for (let key in data) {
        const socialItem = document.createElement('li');
        const socialLink = document.createElement('a');
        const socialIcon = document.createElement('img');

        socialLink.href = data[key];
        socialItem.classList.add('footer__social-item');

        switch (key) {
            case 'telegram':
                socialIcon.src = '/img/icons/telegram.svg';
                break;
            case 'instagram':
                socialIcon.src = '../.././img/icons/instagram.svg';
                break;
            case 'twitter':
                socialIcon.src = '../.././img/icons/twitter.svg';
                break;
            case 'github':
                socialIcon.src = '../.././img/icons/github.svg';
                break;
            case 'linkedin':
                socialIcon.src = '../.././img/icons/linkedin.svg';
                break;
            default:
                socialIcon.src = '../.././img/icons';
        }

        socialLink.appendChild(socialIcon);
        socialItem.appendChild(socialLink);
        socialList.appendChild(socialItem);
    }
    return socialList;
}
