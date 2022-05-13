let backBtn = document.getElementById('backBtn');
let cardList = document.getElementById('cardList');
let todoMenu = document.getElementById('todoMenu');

backBtn.addEventListener('click', () => {

    cardList.style=`
        // left: 0;
        // transition: left .6s ease; 
        // transform: scale(1);
        // transform: translateX(0rem);

        transform: scale(1) translateX(0rem);
        transition: transform .5s ease-out; 
    `;
})

todoMenu.addEventListener('click', () => {

    cardList.style=`
        
        // left: 22;
        // transform: scale(.86);
        // transition: left .5s linear;
        
        transform: translateX(22rem) scale(.86);
        transition: transform .5s ease-out;
    `;
})
