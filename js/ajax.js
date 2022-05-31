$(function(){

    priakazKategorije();
    prikaziTask();

    $('#addTask').click(function(){

        let taskTitle = $('#taskTitle').val();
        let taskText = $('#taskText').val();
        let taskKategorija = $('#taskKategorija').val();
        

        if(taskTitle!='' || taskText!='' || taskKategorija!=''){

                $.post('php/dodajTask?funkcija=dodajTask', {

                task_ime:taskTitle,
                task_text:taskText,
                task_kategorija:taskKategorija}, function(response){

                    poruka();
                    odgovor.innerHTML="<p class='odgovor-uspeh'>Task uspesno dodat.</p>"; 
                    setInterval(sakrijPoruku, 1200);

                    let taskOverlay = document.getElementById('taskOverlay');
                    taskOverlay.style=`
                        transform: translateX(32rem);
                    `;
                } 
            )
            
            prikaziTask();
            ocistiPolja();
           
        }else{

            poruka();
            odgovor.innerHTML="<p class='odgovor-greska'>Sva polja su obavezna!</p>";
            setInterval(sakrijPoruku, 1200);
            return false;
        } 
    })
})


// Clear fields function
function ocistiPolja(){
    $('input').val('');
    $('textarea').val('');
    $('select').val('');
}

// Show/Hide Message container
let odgovor = document.getElementById('odgovor');
function poruka(){
    if(odgovor){
        odgovor.style=`
            transform:translateX(-27rem);
        `;
    }

}

function sakrijPoruku(){
    odgovor.style=`transform:translateX(0rem);`;
}


// Show task function
function prikaziTask(){

    $.get('php/prikaziTask?funkcija=prikaz', function(response){
                    
        // $('#response').html(response);

        let odgovorIzPhp = JSON.parse(response);
        let izlaz = "";
        console.log(odgovorIzPhp);
        for(task of odgovorIzPhp){

            izlaz+="<div class='todo-single-task' id='singleTask' >";

                if(task.task_kategorija_id==1){
                   izlaz+="<div class='category-task-private'></div>"; 
                }else{
                   izlaz+="<div class='category-task-work'></div>"; 
                }
                
                izlaz+= "<div class='task-icon' id='taskIcon'>" 
                
                    if(task.uradjen==0){
                        izlaz+= "<div class='task-todo' id='todo'></div>"; 
                    }else{
                        izlaz+= "<div class='task-done' id='done'><ion-icon name='checkmark-outline'></ion-icon></div>";  
                    }
                     
                izlaz+="</div>";

                izlaz+= "<div class='task-text' id='tasktext'   data-ime='"+task.task_ime+"' data-text='"+task.task_text+"'>" + "<h3>" +task.task_ime+ "</h3>" + "</div>";

                izlaz+="<ion-icon class='deleteTask' id='deleteTask' name='trash-outline' onclick='obrisiTask("+task.id+")'></ion-icon>";

            izlaz+="</div>";

        }
        
        $('#todoList').html(izlaz);
    })
}

// Delete Task
function obrisiTask(taskId){

    let potvrda = confirm('Da li ste sigurni da želite da obrisete zadatak?');

    console.log(potvrda);

    if(potvrda==true){

        $.post('php/obrisiTask?funkcija=obrisi', {id:taskId}, function(response) {
            poruka();
            odgovor.innerHTML="<p class='odgovor-uspeh' data-sr='Task uspešno obrisan!!!' data-en='Task deleted successfully!!!'>Task uspešno obrisan!!!</p>"; 
            setInterval(sakrijPoruku, 1200);

            prikaziTask();
        })
    }
}


// Tasks Category function
function priakazKategorije(){

    $.get('php/kategorije?funkcija=taskKategorija', function(response){

        // $('#response').html(response);

        let odgovorTask = JSON.parse(response);
        let izlaz = '';

        console.log(odgovorTask);

        for(kategorija of odgovorTask){

            izlaz+= '<div class="categories-card" id="bussines">'
            
                izlaz+='<label for="">40 Tasks</label>';
                izlaz+='<h2 data-SR='+kategorija.kategorija_ime_SR+' data-EN='+kategorija.kategorija_ime_EN+'>'+kategorija.kategorija_ime_SR+'</h2>';

                izlaz+='<div class="progress-bars">'
                
                    izlaz+='<div class="line-gray"></div>';

                    if(kategorija.id==1){
                      izlaz+='<div class="line-progress-orange"></div>';  
                    }else{
                      izlaz+='<div class="line-progress-blue"></div>';  
                    }

                izlaz+='</div>';
            
            izlaz+='</div>';



        }

        $('#todoContainers').html(izlaz);

    })
}

