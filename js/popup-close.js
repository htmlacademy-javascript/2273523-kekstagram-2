let bodyPart = document.querySelector('body');
let bigPopup = document.querySelector('.big-picture');
let cross = document.querySelector('.big-picture__cancel')
cross.addEventListener('click', function() {
    bigPopup.classList.add('hidden');
    // bodyPart.classList.remove('modal-open');
})
