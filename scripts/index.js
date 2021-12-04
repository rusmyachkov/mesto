
const popupOpenButtonElement = document.querySelector('.profile__edit-button')
const popupElement = document.querySelector('.popup')
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button')

let formElement = popupElement.querySelector('.popup__form')
let nameInput = popupElement.querySelector('.popup__input_type_name')
let jobInput = popupElement.querySelector('.popup__input_type_job')
let profileTittle = document.querySelector('.profile__tittle')
let profileDescription = document.querySelector('.profile__description')


/*
const togglePopupVisibility = function() {
  popupElement.classList.toggle('popup_is-opened')
}
*/

const openPopup = function() {
  popupElement.classList.add('popup_is-opened')
  nameInput.value = profileTittle.textContent
  jobInput.value = profileDescription.textContent
}



const closePopup = function() {
  popupElement.classList.remove('popup_is-opened')
}

/*
const closePopupByClickOnOverlay = function(event) {
  if(event.target !== event.currentTarget) {
    return
  }

}
*/



popupOpenButtonElement.addEventListener('click', openPopup)
popupCloseButtonElement.addEventListener('click', closePopup)
/*
popupElement.addEventListener('click', closePopupByClickOnOverlay)
*/






// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    profileTittle.textContent = nameInput.value
    profileDescription.textContent = jobInput.value

    closePopup()
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
