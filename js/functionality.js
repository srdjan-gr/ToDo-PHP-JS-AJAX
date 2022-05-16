// Tranzicija kartice sa Taskovima
let backBtn = document.getElementById('backBtn');
let cardList = document.getElementById('cardList');
let todoMenu = document.getElementById('todoMenu');

backBtn.addEventListener('click', () => {

    cardList.style=`
        transform: scale(1) translateX(0rem);
        transition: transform .5s ease-out; 
    `;
})

todoMenu.addEventListener('click', () => {

    cardList.style=`
        transform: translateX(22rem) scale(.86);
        transition: transform .5s ease-out;
    `;
})


// Forma za unos taska
let addBtn = document.getElementById('addBtn');
let closeTask = document.getElementById('closeTask');
let taskOverlay = document.getElementById('taskOverlay');

addBtn.addEventListener('click', () => {

    taskOverlay.style=`
        transform: translateX(0rem);
    `;
})

closeTask.addEventListener('click', () => {

    taskOverlay.style=`
        transform: translateX(30rem);
    `;

    clearFields();
})

// Funkcija za brisanje polja
function clearFields(){

    let title = document.getElementById('taskTitle');
    let text = document.getElementById('taskText');
    let select = document.getElementById('taskKategorija');

    if(closeTask){
        title.value='';
        text.value='';
        select.value='';
    }
}