//EDIT PROFILE
const popupEditProfile = document.querySelector('.edit-profile');
const editProfileButton = document.querySelector('.profile__edit-button');
const closeEditPofile = popupEditProfile.querySelector('.popup__close-button');
const popupEditProfileContainer = popupEditProfile.querySelector('.popup');

//ADD PHOTO
const popupAddPhoto = document.querySelector('.add-photo');
const addPhotoButton = document.querySelector('.profile__add-button');
const closeAddPhoto = popupAddPhoto.querySelector('.popup__close-button');
const popupAddPhotoContainer = popupAddPhoto.querySelector('.popup');
const submitPhoto = popupAddPhoto.querySelector('.popup__form');
const photoTitle = popupAddPhoto.querySelector('.popup__input_judul');
const photoUrl = popupAddPhoto.querySelector('.popup__input_tautan-gambar');

//FORM
const formElement = popupEditProfile.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_information');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__information');

//PHOTO GRID
const photoGrid = document.querySelector('.grid');
const photoCard = photoGrid.querySelector('.grid__photo-card');
const deletePhotoButton = photoGrid.querySelector('.grid__delete-button');
const lovePhotoButton = photoGrid.querySelector('.grid__love-button');
const imageGrid = photoGrid.querySelector('.grid__photo');
const lovePhotoButtonActive = photoGrid.querySelector('.grid__love-button_active');

//POPUP PHOTO GRID
const popupImage = document.querySelector('.image-popup');
const popupImageContainer = popupImage.querySelector('.image-popup__container');
const closePopupImage = popupImage.querySelector('.image-popup__delete-btn');

//PHOTO ARRAY
const initialCards = [
   {
     name: "Lembah Yosemite",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
   },
   {
     name: "Danau Louise",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
   },
   {
     name: "Pegunungan Gundul",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
   },
   {
     name: "Gunung Latemar",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
   },
   {
     name: "Taman Nasional Vanoise",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
   },
   {
     name: "Lago di Braies",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
   }
 ];

 initialCards.forEach((card) => {
   const addPhotoCard = document.querySelector('.add-photo-card').content;
   const addPhotoElement = addPhotoCard.querySelector('.grid__photo-card').cloneNode(true);

   addPhotoElement.querySelector('.grid__title').textContent = card.name;
   addPhotoElement.querySelector('.grid__photo').alt = card.name; 
   addPhotoElement.querySelector('.grid__photo').src = card.link; 

   photoGrid.prepend(addPhotoElement);
 });

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
   const addPhotoCard = document.querySelector('.add-photo-card').content;
   const addPhotoElement = addPhotoCard.querySelector('.grid__photo-card').cloneNode(true);

   addPhotoElement.querySelector('.grid__title').textContent = titleValue;
   addPhotoElement.querySelector('.grid__photo').src = urlValue;  
   addPhotoElement.querySelector('.grid__photo').alt = titleValue;

   photoGrid.prependChild(addPhotoElement);   
}

//SUBMIT PHOTO
   submitPhoto.addEventListener('submit', function(evt){
   evt.preventDefault();

   addPhoto(photoTitle.value, photoUrl.value)

   photoTitle.value = "";
   photoUrl.value = "";
   
   closePhotoSection()
});

//DELETE PHOTO
function deletePhoto(evt) {
   const target = evt.target
   if (target.classList.contains('grid__delete-button')) {
   target.parentElement.remove()
}};


//LIKE PHOTO
function likePhoto(evt) {
   const target = evt.target
   if (target.classList.contains('grid__love-button')) {
   target.classList.toggle('grid__love-button_active'
   )
}};

//POPUP PHOTO
function popupPhoto(evt){
   const target = evt.target
   if (target.classList.contains('grid__photo')) {

   const title = target.closest('.grid__title');
   const source = target.closest('.grid__photo');

   popupImage.classList.add('image-popup_opened')

   popupImageContainer.querySelector('.image-popup__title').textContent = target.parentElement.querySelector('.grid__title').textContent


   popupImageContainer.querySelector('.image-popup__photo').src = target.parentElement.querySelector('.grid__photo').src
   popupImageContainer.querySelector('.image-popup__photo').alt = target.parentElement.querySelector('.grid__photo').alt
}}

//CLOSE IMAGE POPUP
closePopupImage.addEventListener('click', function() {
   popupImage.classList.remove('image-popup_opened')
   })

//FOR EDIT PROFILE
editProfileButton.addEventListener('click', showDisplay);
closeEditPofile.addEventListener('click', closeDisplay);
formElement.addEventListener('submit', submitText);

//FOR ADD PHOTO
addPhotoButton.addEventListener('click', openPhotoSection);
closeAddPhoto.addEventListener('click', closePhotoSection);

//DELETE AND LIKE PHOTO
photoGrid.addEventListener('click', deletePhoto);
photoGrid.addEventListener('click', likePhoto);
photoGrid.addEventListener('click', popupPhoto)

// photoCard.addEventListener('click', function(event) {
//    if (event.target.className === 'grid__delete-button') {
//       photoGrid.removeChild('.grid__photo-card')
//    }
//  });


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


// DELETE, LIKE, AND POPUP PHOTO
// function deletePhoto(evt) {
//    const target = evt.target
//    if (target.classList.contains('grid__delete-button')) {
//       target.parentElement.remove()
//    } else if (target.classList.contains('grid__love-button')) {
//       target.classList.toggle('grid__love-button_active')
//    } else if (target.classList.contains('grid__photo')) {

//       const title = target.closest('.grid__title');
//       const source = target.closest('.grid__photo');

//       popupImage.classList.add('image-popup_opened')

//       popupImageContainer.querySelector('.image-popup__title').textContent = target.parentElement.querySelector('.grid__title').textContent
//       popupImageContainer.querySelector('.image-popup__photo').src = target.parentElement.querySelector('.grid__photo').src
//       popupImageContainer.querySelector('.image-popup__photo').alt = target.parentElement.querySelector('.grid__photo').alt

//    }
//  }