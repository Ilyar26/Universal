const messageOut = () => {
    const message = document.querySelector('.message'),
        messageButton = document.querySelector('.message-button')

    message.classList.add('hide');

    messageButton.addEventListener('click', () => {
        message.classList.add('hide');
    })
}

export default messageOut;

