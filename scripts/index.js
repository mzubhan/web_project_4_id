let openPopup = document.querySelector('.profile__edit-button');
 openPopup.addEventListener('click', showDisplay)

 function showDisplay(){
    let popupDisplay = document.querySelector('.popup_opened');

    popupDisplay.style.display = 'block';
 }

 let closePopup = document.querySelector('.popup__close-button');
 closePopup.addEventListener('click', closeDisplay)

 function closeDisplay() {
    let popupDisplay = document.querySelector('.popup_opened');

    popupDisplay.style.display = 'none';
 }


let formElement = document.querySelector('.popup__save-button');
formElement.addEventListener('click', submitText);
formElement.addEventListener('submit', submitText);
function submitText(evt) {
    evt.preventDefault();

    let nameInput = document.querySelector('.popup__input-name').value;
    let jobInput = document.querySelector('.popup__input-information').value;

    let profileName = document.querySelector('.profile__name')
    let profileJob = document.querySelector('.profile__information')

    profileName.textContent = nameInput
    profileJob.textContent = jobInput

    let popupDisplay = document.querySelector('.popup_opened');
    popupDisplay.style.display = 'none';

    nameInput.value = "";
    jobInput.value = "";
}