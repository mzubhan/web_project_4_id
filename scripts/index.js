let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup')
let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_information');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__information');

function showDisplay(){
   popup.classList.add('popup_opened');

   nameInput.value = profileName.textContent
   jobInput.value = profileJob.textContent
}

function closeDisplay() {
   popup.classList.remove('popup_opened');
}

function submitText(evt) {
   evt.preventDefault();

   profileName.textContent = nameInput.value
   profileJob.textContent = jobInput.value

   closeDisplay()
}

openPopup.addEventListener('click', showDisplay);
closePopup.addEventListener('click', closeDisplay);
formElement.addEventListener('submit', submitText);