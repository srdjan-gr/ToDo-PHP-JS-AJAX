
$(function(){

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
})
        
    







   
