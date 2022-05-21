const modalOut = () => {

    const callMenu = document.querySelector('.call-item'),
        modal = document.querySelector('.modal'),
        modalClose = modal.querySelector('.modal-close'),
        modalButton = modal.querySelector('.modal-button'),
        modalInput = modal.querySelectorAll('.modal-input'),
        modalHead = modal.querySelector('.modal-head'),
        modalText = modal.querySelector('.modal-text')

    const modalCircle = document.createElement('div');
    const modalMark = document.createElement('div');
    const modalNewHead = document.createElement('div');
    const modalNewText = document.createElement('div');

    modal.classList.add('hide');
    modalCircle.classList.add('modal-circle');
    modalMark.classList.add('modal-mark');
    modalMark.textContent = '✔';
    modalMark.classList.add('hide')
    modalNewHead.textContent = "Заявка успешно отправлена";
    modalNewHead.classList.add('hide');
    modalNewHead.classList.add('modal-new-head');
    modalNewText.textContent = "В ближайшее время с вами  свяжутся наши менеджеры";
    modalNewText.classList.add('hide');
    modalNewText.classList.add('modal-new-text');
    modalCircle.classList.add('hide')


    modalClose.after(modalCircle);
    modalCircle.append(modalMark);
    modalCircle.after(modalNewHead);
    modalNewHead.after(modalNewText);

    callMenu.addEventListener('click', () => {
        modal.classList.remove('hide');
    })

    modalClose.addEventListener('click', () => {
        modal.classList.add('hide');
    })

    modalButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (modalButton.textContent != "На главную") {

            modalHead.classList.add('hide');
            modalText.classList.add('hide');
            modalInput.forEach(input => {
                input.classList.add('hide');
            })
            modalCircle.classList.remove('hide');
            modalMark.classList.remove('hide');
            modalNewHead.classList.remove('hide');
            modalNewText.classList.remove('hide');


            modalButton.textContent = "На главную";
            modalInput.forEach(input => {
                input.value = '';
            })
        } else {

            modalHead.classList.remove('hide');
            modalText.classList.remove('hide');
            modalInput.forEach(input => {
                input.classList.remove('hide');
            })

            modalCircle.classList.add('hide');
            modalMark.classList.add('hide');
            modalNewHead.classList.add('hide');
            modalNewText.classList.add('hide');

            modalButton.textContent = "Отправить заявку";
            modal.classList.add('hide');
        }
    })
}


export default modalOut;
