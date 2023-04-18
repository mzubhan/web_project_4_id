//EDIT PROFILE
let popupEditProfile = document.querySelector('.edit-profile');
let editProfileButton = document.querySelector('.profile__edit-button');
let closeEditPofile = popupEditProfile.querySelector('.popup__close-button');
let popupEditProfileContainer = popupEditProfile.querySelector('.popup');

//ADD PHOTO
let popupAddPhoto = document.querySelector('.add-photo');
let addPhotoButton = document.querySelector('.profile__add-button');
let closeAddPhoto = popupAddPhoto.querySelector('.popup__close-button');
let popupAddPhotoContainer = popupAddPhoto.querySelector('.popup');
let submitPhoto = popupAddPhoto.querySelector('.popup__form');
let photoTitle = popupAddPhoto.querySelector('.popup__input_judul');
let photoUrl = popupAddPhoto.querySelector('.popup__input_tautan-gambar');

//FORM
let formElement = popupEditProfile.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_information');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__information');

//PHOTO GRID
let photoGrid = document.querySelector('.grid');

//POPUP EDIT PROFILE
function showDisplay(){
   popupEditProfileContainer.classList.add('popup_opened');

   nameInput.value = profileName.textContent
   jobInput.value = profileJob.textContent
}

function closeDisplay() {
   popupEditProfileContainer.classList.remove('popup_opened');
}

//SUBMIT EDIT-BUTTON FUNCTION
function submitText(evt) {
   evt.preventDefault();

   profileName.textContent = nameInput.value
   profileJob.textContent = jobInput.value

   closeDisplay()
}

//POPUP ADD PHOTO
function openPhotoSection(){
   popupAddPhotoContainer.classList.add('popup_opened');
}

function closePhotoSection() {
   popupAddPhotoContainer.classList.remove('popup_opened');
}

function addPhoto(titleValue, urlValue){
   let addPhotoCard = document.querySelector('.add-photo-card').content;

   addPhotoCard.querySelector('.grid__title').textContent = titleValue;
   addPhotoCard.querySelector('.grid__photo').src = urlValue;
   addPhotoCard.querySelector('.grid__love-button').addEventListener('click', function(evt){
      evt.target.classList.toggle('.grid__love-button_active')
   });

   let addPhotoElement = addPhotoCard.querySelector('.grid__photo-card').cloneNode(true);

   photoGrid.appendChild(addPhotoElement);   
}

//SUBMIT PHOTO
   submitPhoto.addEventListener('submit', function(evt){
   evt.preventDefault();

   addPhoto(photoTitle.value, photoUrl.value)

   photoTitle.value = "";
   photoUrl.value = "";
   
   closePhotoSection()
});

//FOR EDIT PROFILE
editProfileButton.addEventListener('click', showDisplay);
closeEditPofile.addEventListener('click', closeDisplay);
formElement.addEventListener('submit', submitText);

//FOR ADD PHOTO
addPhotoButton.addEventListener('click', openPhotoSection);
closeAddPhoto.addEventListener('click', closePhotoSection);

// const initialCards = [
//    {
//      name: "Lembah Yosemite",
//      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
//    },
//    {
//      name: "Danau Louise",
//      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
//    },
//    {
//      name: "Pegunungan Gundul",
//      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
//    },
//    {
//      name: "Gunung Latemar",
//      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
//    },
//    {
//      name: "Taman Nasional Vanoise",
//      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
//    },
//    {
//      name: "Lago di Braies",
//      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
//    }
//  ];