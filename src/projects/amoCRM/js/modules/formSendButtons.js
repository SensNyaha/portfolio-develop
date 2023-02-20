import { resetCalculator } from './resetCalculator.js';
import {thanksPopUp , resetPopup} from './popups.js';

function bindSendButtons() {
    let sendButtons = document.querySelectorAll('button[data-send]');

    sendButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            let dataObject = {};
            let phoneAdded = false;
            let phoneForm = e.target.closest('.phone-form');
            let phoneInput = phoneForm.querySelector('input[type="tel"]');

            if (!phoneInput.classList.contains('wrong') && phoneInput.value !== '') {
                dataObject['Номер телефона клиента:'] = phoneInput.value;
                phoneAdded = true;
            };

            if (e.target.dataset.datafromid) {
                let id = e.target.dataset.datafromid;
                let testAnswers = document.querySelector(`.${id}`).querySelectorAll(`.${id}-block`);

                testAnswers.forEach(block => {
                    dataObject[block.querySelector(`.${id}-question`).innerHTML.slice(3)] = block.querySelector('.active').textContent;
                })
            }

            if (e.target.dataset.theme) {
                dataObject['Тема'] = e.target.dataset.theme;
            }

            if (phoneAdded) {

                resetCalculator();
                phoneInput.value = '';

                let textContent = btn.textContent;
                btn.textContent = '';

                let dotsWrapper = document.createElement('DIV');
                dotsWrapper.classList.add('button__spans');
                btn.append(dotsWrapper);
                for (let i = 0; i < 3; i++) {
                    dotsWrapper.append(document.createElement('SPAN'))
                }
                btn.innerHTML += `<span class='button__text'>${textContent}</span>`

                setTimeout(() => {
                    if (!btn.classList.contains('first')) {
                        btn.children[0].classList.add('sliding');
                        btn.children[0].classList.add('animated');
                        btn.children[1].classList.add('sliding');
                    }
                })

                setTimeout(() => {
                    btn.children[0].classList.remove('animated');
                    btn.children[0].classList.add('done');
                    console.log(JSON.stringify(dataObject));

                    setTimeout(() => {
                        thanksPopUp();
                        
                        setTimeout(() => {
                            resetPopup();
                        }, 2000)
                    }, 2000)
                }, 2000)
            }
            else {
                phoneInput.classList.remove('wrong');
                setTimeout(()=> {phoneInput.classList.add('wrong')}); //Почему-то прямое снятие-назначение класса инпуту не помогает повторно запустить анимацию при нажатии кнопки при уже wrong инпуте
                phoneInput.nextElementSibling.classList.add('wrong');
            }
        })
    })
}

export {bindSendButtons};