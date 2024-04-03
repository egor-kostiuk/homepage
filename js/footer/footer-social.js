export function createSocialItem(social, icons) {
    const socialList = document.createElement('ul');
    socialList.classList.add('footer__social');

    const check = document.querySelector('.check'); // ! optimize (as soon as possible)

    for (let key in social) {
        const socialItem = document.createElement('li');
        const socialLink = document.createElement('a');
        const socialIcon = document.createElement('img');

        // add social links to (li) elements
        socialLink.href = social[key];
        socialItem.classList.add('footer__social-item');

        // add icons to (li) elements
        socialIcon.src = icons[key];

        if (check === null) {
            socialIcon.src = icons[key].replace('../', '');
        }

        // collect all list elements
        socialLink.appendChild(socialIcon);
        socialItem.appendChild(socialLink);
        socialList.appendChild(socialItem);
    }
    return socialList;
}
