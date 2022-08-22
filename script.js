const btns = document.querySelectorAll('.btn');



const openModal = () => {
    document.querySelector('.modal')
    .classList.remove('hidden');
    document.querySelector('.overlay')
    .classList.remove('hidden');
}

const closeModal = () =>{
    document.querySelector('.modal')
    .classList.add('hidden');
    document.querySelector('.overlay')
    .classList.add('hidden');
}

btns.forEach(el => {
    el.addEventListener('click',openModal)
});

document.querySelector('.close-modal')
.addEventListener('click',closeModal )

document.addEventListener('keydown', function (e) {
     //console.log(e.key);
    if (e.key === 'Backspace') {
      closeModal();
    }
});