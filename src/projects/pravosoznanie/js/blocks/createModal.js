import inputFile from "./inputFile.js";
import returnScrollWidth from './returnScrollWidth.js';

function createModal(modalType, caseDescrElement) {
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let inner = document.createElement('div');
    inner.classList.add(`modal__${modalType}`, 'modal__content');

    if (modalType === 'consult') {
        inner.innerHTML = `
            <div class="contact-form" style='padding: 0; border: 0; width: auto;'>
                <h3 class="contact-form__title">
                    Бесплатная консультация
                </h3>
                <form class="contact-form__form">
                    <input name='name' type="text" class="contact-form__input" placeholder="Имя" required>
                    <input name='tel' type='tel' class="contact-form__input" placeholder="Телефон" required>
                    <input type="submit" value="отправить" class="contact-form__submit">
                </form>
                <div class="contact-form__privacy">
                    нажимая на кнопку отправить, я соглашаюсь на обработку своих персональных данных в соответсвии с ФЗ №152
                </div>
            </div>
            <div class='close'>&times</div>
        `;
    }
    else if (modalType === 'send-docs') {
        inner.innerHTML = `
            <div class="contact-form" style='padding: 0; border: 0; width: auto;'>
                <h3 class="contact-form__title">
                    Отправить документы
                </h3>
                <form class="contact-form__form">
                    <input name='name' type="text" class="contact-form__input" placeholder="Имя" required>
                    <input name='tel' type='tel' class="contact-form__input" placeholder="Телефон" required>
                    <input name='mail' type='mail' class="contact-form__input" placeholder="E-mail" required>
                    <label class='contact-form__label' for='contact-form__file'>Прикрепить файлы<img src='./images/modal/pin.svg'></label>
                    <input id='contact-form__file' type="file" name="file" class="contact-form__file" required>
                    <textarea class='contact-form__textarea' placeholder='Дополнительная информация'></textarea>
                    <input type="submit" value="отправить" class="contact-form__submit">
                </form>
                <div class="contact-form__privacy">
                    нажимая на кнопку отправить, я соглашаюсь на обработку своих персональных данных в соответсвии с ФЗ №152
                </div>
            </div>
            <div class='close'>&times</div>
        `;
    }
    else if (modalType === 'cases') {
        caseDescrElement.style.opacity = '1';
        caseDescrElement.style.height = 'auto';
        caseDescrElement.innerHTML += '<div class="close">&times</div>';
        inner.innerHTML = caseDescrElement.outerHTML;
    }
    else if (modalType === 'service') {
        inner.innerHTML = `
            <div class='modal__service-left'>
                <h4 class="modal__service-title">
                    ${caseDescrElement.querySelector("h4").textContent}
                </h4>
                <div class='modal__service-text'>
                    ${(caseDescrElement.querySelector('[class$="descr"]').textContent + '<br><br>').repeat(3)}
                </div>
            </div>
            <div class='modal__service-right'>
                <img src='images/services/modal-img.jpg' class='modal__service-photo'>
            </div>
        `;
        inner.innerHTML += '<div class="close">&times</div>';
    }

    modal.append(inner);
    document.body.append(modal);
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = returnScrollWidth() + 'px';

    try {
        inputFile(modal); //организовано для изменения статуса загрузки в инпуте с типом FILE modal=>send-docs
    }
    catch {}
}

export default createModal;