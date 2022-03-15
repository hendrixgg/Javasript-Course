'use strict';

const modal = document.querySelector('.modal'),
    overlay = document.querySelector('.overlay'),
    btnCloseModal = document.querySelector('.close-modal'),
    btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);

const openModal = function () {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; ++i) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    if (e.key === 'Escape' /* && !modal.classList.contains('hidden') */)
        closeModal();
});