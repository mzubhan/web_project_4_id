let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_information');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__information');

function showDisplay(){
   document.querySelector('.popup_opened').style.display = 'flex';

   nameInput.value = profileName.textContent
   jobInput.value = profileJob.textContent
}

function closeDisplay() {
   document.querySelector('.popup_opened').style.display = 'none';
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