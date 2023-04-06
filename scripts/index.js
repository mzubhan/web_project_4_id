let openPopup = document.querySelector('.profile__edit-button');
function showDisplay(){
   document.querySelector('.popup_opened').style.display = 'flex';
}

let closePopup = document.querySelector('.popup__close-button');
function closeDisplay() {
   document.querySelector('.popup_opened').style.display = 'none';
}

let formElement = document.querySelector('.popup__form');
function submitText(evt) {
   evt.preventDefault();

   let nameInput = document.querySelector('.popup__input_name');
   let jobInput = document.querySelector('.popup__input_information');
   let profileName = document.querySelector('.profile__name');
   let profileJob = document.querySelector('.profile__information');

   profileName.textContent = nameInput.value
   profileJob.textContent = jobInput.value

   nameInput.placeholder = profileName.textContent;
   jobInput.placeholder = profileJob.textContent;

   let popupDisplay = document.querySelector('.popup_opened');
   popupDisplay.style.display = 'none';

   nameInput.value = "";
   jobInput.value = "";
}

openPopup.addEventListener('click', showDisplay);
closePopup.addEventListener('click', closeDisplay);
formElement.addEventListener('submit', submitText);