const forms = () => {

    const form = document.querySelector('.form'),
        formCircles = form.querySelectorAll('.form-circle'),
        formTexts = form.querySelectorAll('.form-text'),
        selects = form.querySelectorAll('.form-input'),
        formImage = form.querySelector('.form-image'),
        formText = form.querySelector('.circles-text'),
        bigCircles = form.querySelectorAll('.big-circle'),
        formButton = form.querySelector('.button-form'),
        message = document.querySelector('.message')

    const fileImage = document.createElement('img');
    const fileText = document.createElement('a');
    const inputForm = document.createElement('input');
    const backButton = document.createElement('button');
    const forwardButton = document.createElement('button');
    const nameInput = document.createElement('input');
    const phoneInput = document.createElement('input');
    const emailInput = document.createElement('input');

    bigCircles.forEach(item => {
        if (item.firstElementChild.classList.contains('active') === false) {
            item.classList.remove('big-circle')
        }
    })

    fileImage.src = 'img/file-image.png';
    fileImage.classList.add('file-image');

    fileText.textContent = 'Загрузите файл';
    fileText.classList.add('file-text');

    inputForm.placeholder = 'Введите задание в текстовое поле';
    inputForm.classList.add('input-in-form');

    backButton.textContent = 'Назад'
    backButton.type = 'button'
    backButton.classList.add('buttons', 'back-button');

    forwardButton.textContent = 'Далее'
    forwardButton.type = 'button'
    forwardButton.classList.add('buttons', 'forward-button');

    nameInput.placeholder = 'ФИО';
    phoneInput.placeholder = 'Телефон';
    emailInput.placeholder = 'E-mail';

    nameInput.classList.add('name-input');
    phoneInput.classList.add('phone-input');
    emailInput.classList.add('email-input');

    formText.after(fileImage);
    fileImage.after(fileText);
    fileText.after(inputForm);
    inputForm.after(forwardButton);
    inputForm.after(backButton);

    formText.after(nameInput);
    formText.after(phoneInput);
    formText.after(emailInput);

    fileImage.classList.add('hide');
    fileText.classList.add('hide');
    inputForm.classList.add('hide');
    forwardButton.classList.add('hide');
    backButton.classList.add('hide');
    nameInput.classList.add('hide');
    phoneInput.classList.add('hide');
    emailInput.classList.add('hide');

    formButton.addEventListener('click', () => {
        formCircles[0].textContent = '✔';
        formCircles[0].classList.add('marked');
        formCircles[0].classList.remove('circle-active');
        formCircles[1].classList.add('circle-active');

        formTexts[0].classList.remove('text-active');
        formTexts[1].classList.add('text-active');


        selects.forEach(item => {
            item.classList.add('hide');
        })
        formImage.classList.add('hide');
        formButton.classList.add('hide');

        fileImage.classList.remove('hide');
        fileText.classList.remove('hide');
        inputForm.classList.remove('hide');
        forwardButton.classList.remove('hide');
        backButton.classList.remove('hide');

    })

    fileImage.addEventListener('mouseover', () => {
        fileImage.style.cursor = 'pointer';
    })

    backButton.addEventListener('click', () => {

        if (formCircles[1].classList.contains('circle-active')) {

            formCircles[0].textContent = '1';
            formCircles[0].classList.remove('marked');
            formCircles[0].classList.add('circle-active');
            formCircles[1].classList.remove('circle-active');

            formTexts[0].classList.add('text-active');
            formTexts[1].classList.remove('text-active');

            fileImage.classList.add('hide');
            fileText.classList.add('hide');
            inputForm.classList.add('hide');
            forwardButton.classList.add('hide');
            backButton.classList.add('hide');

            selects.forEach(item => {
                item.classList.remove('hide');
            })
            formImage.classList.remove('hide');
            formButton.classList.remove('hide');
        } else {

            form.style.height = '390px';

            if (inputForm.classList.contains('empty-value')) {
                inputForm.classList.remove('empty-value');
            }

            formCircles[1].textContent = '2';
            formCircles[1].classList.remove('marked');
            formCircles[1].classList.add('circle-active');
            formCircles[2].classList.remove('circle-active');

            formTexts[1].classList.add('text-active');
            formTexts[2].classList.remove('text-active');

            forwardButton.textContent = 'Далее';
            fileImage.classList.remove('hide');
            fileText.classList.remove('hide');
            inputForm.classList.remove('hide');

            nameInput.classList.add('hide');
            phoneInput.classList.add('hide');
            emailInput.classList.add('hide');
        }


    })

    nameInput.onchange = () => {
        nameInput.classList.remove('empty-value');
    }

    phoneInput.onchange = () => {
        phoneInput.classList.remove('empty-value');
    }

    emailInput.onchange = () => {
        emailInput.classList.remove('empty-value');
    }

    forwardButton.addEventListener('click', (e) => {

        if (inputForm.value === "") {

            inputForm.classList.add('empty-value');

        } else {

            if (formCircles[1].classList.contains('circle-active')) {

                form.style.height = '450px';

                formCircles[1].textContent = '✔';
                formCircles[1].classList.add('marked');
                formCircles[1].classList.remove('circle-active');
                formCircles[2].classList.add('circle-active');

                formTexts[1].classList.remove('text-active');
                formTexts[2].classList.add('text-active');

                forwardButton.textContent = 'Готово';
                fileImage.classList.add('hide');
                fileText.classList.add('hide');
                inputForm.classList.add('hide');

                nameInput.classList.remove('hide');
                phoneInput.classList.remove('hide');
                emailInput.classList.remove('hide');

            } else {

                if (nameInput.value === '') {

                    nameInput.classList.add('empty-value');

                } else if (phoneInput.value === '') {

                    phoneInput.classList.add('empty-value');

                } else if (emailInput.value === '') {

                    emailInput.classList.add('empty-value');

                } else {



                    message.classList.remove('hide');

                    form.style.height = '390px';

                    formCircles[1].textContent = '2';
                    formCircles[1].classList.remove('marked');
                    formTexts[1].classList.remove('text-active');
                    formCircles[1].classList.remove('circle-active');
                    formCircles[2].classList.remove('circle-active');
                    formTexts[2].classList.remove('text-active');

                    formCircles[0].textContent = '1';
                    formCircles[0].classList.remove('marked');
                    formCircles[0].classList.add('circle-active');
                    formTexts[0].classList.add('text-active');

                    nameInput.classList.add('hide');
                    phoneInput.classList.add('hide');
                    emailInput.classList.add('hide');

                    selects.forEach(item => {
                        item.classList.remove('hide');
                    })
                    formImage.classList.remove('hide');
                    formButton.classList.remove('hide');

                    forwardButton.classList.add('hide');
                    backButton.classList.add('hide');

                    inputForm.value = '';
                    nameInput.value = '';
                    phoneInput.value = '';
                    emailInput.value = '';
                }

            }
        }
    })
}

export default forms;