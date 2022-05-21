const cardLink = () => {
    const links = document.querySelectorAll('.card-links'),
        lastmodal = document.querySelector('.last-modal'),
        email = document.querySelector('e-mail')

    lastmodal.classList.add('hide');

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.lastChild.style = 'margin-left: 10px';
            link.lastChild.style.transition = '0.4s';
        })
    })

    links.forEach(link => {
        link.addEventListener('mouseleave', () => {
            link.lastChild.style = 'margin-right: 10px';
            link.lastChild.style.transition = '0.4s';
        })
    })

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            lastmodal.classList.remove('hide')
        })
    })
}

export default cardLink;



