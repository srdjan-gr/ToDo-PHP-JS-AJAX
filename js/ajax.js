$(function(){

    prikaziTask();

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
                    setInterval(sakrijPoruku, 3000);

                    let taskOverlay = document.getElementById('taskOverlay');
                    taskOverlay.style=`
                        transform: translateX(30rem);
                    `;
                } 
            )
            
            prikaziTask();
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

let odgovor = document.getElementById('odgovor');
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


// Funkcija za prikaz taskova
function prikaziTask(){

    $.get('php/prikaziTask?funkcija=prikaz', function(response){
                    
        let odgovorIzPhp = JSON.parse(response);
        let izlaz = "";

        for(task of odgovorIzPhp){

            izlaz+="<div class='todo-single-task' id='singleTask'>";

                izlaz+= "<div class='task-icon' id='taskIcon'>" 
                
                    izlaz+= "<div class='task-todo' id='todo'></div>";  

                    // izlaz+= "<div class='task-done' id='done'><ion-icon name='checkmark-outline'></ion-icon></div>";  
                
                izlaz+="</div>";

                izlaz+= "<div class='task-text' data-ime='"+task.task_ime+"' data-text='"+task.task_text+"'>" + "<h3>" +task.task_ime+ "</h3>"+ "</div>";

                izlaz+="<ion-icon class='deleteTask' id='deleteTask' name='trash-outline'></ion-icon>";

            izlaz+="</div>";

        }
        
        $('#todoList').html(izlaz);
    })
}



