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
let photoCard = photoGrid.querySelector('.grid__photo-card');
let deletePhotoButton = photoGrid.querySelector('.grid__delete-button');
let lovePhotoButton = photoGrid.querySelector('.grid__love-button');
let imageGrid = photoGrid.querySelector('.grid__photo');
let lovePhotoButtonActive = photoGrid.querySelector('.grid__love-button_active');

//POPUP PHOTO GRID
let popupImage = document.querySelector('.image-popup');
let popupImageContainer = popupImage.querySelector('.image-popup__container');
let closePopupImage = popupImage.querySelector('.image-popup__delete-btn');

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
   let addPhotoElement = addPhotoCard.querySelector('.grid__photo-card').cloneNode(true);

   addPhotoElement.querySelector('.grid__title').textContent = titleValue;
   addPhotoElement.querySelector('.grid__photo').src = urlValue;  

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

// DELETE, LIKE, AND POPUP PHOTO
function deletePhoto(evt) {
   const target = evt.target
   if (target.classList.contains('grid__delete-button')) {
      target.parentElement.remove()
   } else if (target.classList.contains('grid__love-button')) {
      target.classList.toggle('grid__love-button_active')
   } else if (target.classList.contains('grid__photo')) {

      let title = target.closest('.grid__title');
      let source = target.closest('.grid__photo');

      popupImage.classList.add('image-popup_opened')

      popupImageContainer.querySelector('.image-popup__title').textContent = target.parentElement.querySelector('.grid__title').textContent
      popupImageContainer.querySelector('.image-popup__photo').src = target.parentElement.querySelector('.grid__photo').src
      popupImageContainer.querySelector('.image-popup__photo').alt = target.parentElement.querySelector('.grid__photo').alt

   }
 }

//FOR EDIT PROFILE
editProfileButton.addEventListener('click', showDisplay);
closeEditPofile.addEventListener('click', closeDisplay);
formElement.addEventListener('submit', submitText);

//FOR ADD PHOTO
addPhotoButton.addEventListener('click', openPhotoSection);
closeAddPhoto.addEventListener('click', closePhotoSection);

//DELETE AND LIKE PHOTO
photoGrid.addEventListener('click', deletePhoto)

//CLOSE IMAGE POPUP
closePopupImage.addEventListener('click', function() {
      popupImage.classList.remove('image-popup_opened')
})

photoCard.addEventListener('click', function(event) {
   if (event.target.className === 'grid__delete-button') {
      photoGrid.removeChild('.grid__photo-card')
   }
 });


// **CODE DUMP**
// DELETE
// deletePhotoButton.forEach(function(deletePhoto) {
//    deletePhoto.addEventListener('click', function() {
//     let photoContainer = deletePhoto.parentElement;
//     photoContainer.remove();
//   });
// });

// //LIKE
// lovePhotoButton.forEach(function(lovePhoto) {
//    lovePhoto.addEventListener('click', function() {
//       lovePhoto.classList.add('grid__love-button_active')
//   });
// });

//PHOTO POPUP
// imageGrid.forEach(function(selectPhoto){
//    selectPhoto.addEventListener('click', function() {
//       let title = selectPhoto.closest('.grid__title');
//       let source = selectPhoto.closest('.grid__photo');

//       popupImage.classList.add('image-popup_opened')

//       popupImageContainer.querySelector('.image-popup__title').textContent = selectPhoto.parentElement.querySelector('.grid__title').textContent
//       popupImageContainer.querySelector('.image-popup__photo').src = selectPhoto.parentElement.querySelector('.grid__photo').src
//       popupImageContainer.querySelector('.image-popup__photo').alt = selectPhoto.parentElement.querySelector('.grid__photo').alt

//    })
// })

