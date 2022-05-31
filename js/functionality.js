// Task card transitiopn
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
        transform: translateX(23.5rem) scale(.86);
        transition: transform .5s ease-out;
    `;
})


// Task add Form
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
        transform: translateX(32rem);
    `;

    clearFields();
})

// Delete fields function
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

// Theme container toggle switch
let themeBtn = document.getElementById('themeBtn');
let themeContainer = document.getElementById('theme');

themeBtn.addEventListener('click', (e) => {

    themeContainer.classList.toggle('active-theme');

});


// Translation
// $(function(){

//     $('#jezik').change(function(){

//         alert($(this).val());

//         // val ako je aktivan element za selektovanje jezika - Select Option na primer
//         let jezik = $(this).val();

//         $("[data-"+jezik+"]").each(function(){
//             $(this).html($(this).data(jezik));      
//         })
//     })
// })

