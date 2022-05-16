let odgovor = document.getElementById('odgovor');

$(function(){

    $('#addTask').click(function(){

        let taskTitle = $('#taskTitle').val();
        let taskText = $('#taskText').val();
        let taskKategorija = $('#taskKategorija').val();
        

        if(taskTitle!='' || taskText!='' || taskKategorija!=''){

                $.post('php/dodajTask?funkcija=dodaj', {

                task_ime:taskTitle,
                task_text:taskText,
                task_kategorija:taskKategorija}, function(response){
                    $('#odgovor').html(response)

                    poruka();
                    odgovor.innerHTML="<p class='odgovor-uspeh'>Task uspesno dodat.</p>"; 
                    setInterval(sakrijPoruku, 3500);

                    let taskOverlay = document.getElementById('taskOverlay');
                    taskOverlay.style=`
                        transform: translateX(30rem);
                    `;
                } 
            )
    
            ocistiPolja();
           
        }else{

            poruka();
            odgovor.innerHTML="<p class='odgovor-greska'>Sva polja su obavezna!</p>";
            setInterval(sakrijPoruku, 2500);
            return false;
        }

       
    })
})



function ocistiPolja(){
    $('input').val('');
    $('textarea').val('');
    $('select').val('');
}

function poruka(){
    if(odgovor){
        odgovor.style=`
            transform:translateX(-26rem);
        `;
    }
}

function sakrijPoruku(){
    
    odgovor.style=`transform:translateX(0rem);`;

}




