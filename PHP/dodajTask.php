<?php

include_once('konekcija.php');


// Citanje funkcije koja dolazi GET metodom iz AJAX-a
$funkcija = $_GET['funkcija'];
$poruka['uspesno'] = "";
$poruka['greska'] = "";

if($funkcija=='dodajTask'){

    $task_ime = $_POST['task_ime'];
    $task_text = $_POST['task_text'];
    $task_kategorija = $_POST['task_kategorija'];

    if($task_ime!="" and $task_text!="" and $task_kategorija!=""){

        $upit = "INSERT INTO tasks (task_ime, task_text, task_kategorija_id) VALUES ('{$task_ime}', '{$task_text}', '{$task_kategorija}')";

        mysqli_query($db, $upit);

        if(mysqli_error($db)){
            echo mysqli_error($db);
        }
        else{
            $poruka =  "Task uspesno dodat.";
            // echo "Task uspesno dodat." .mysqli_affected_rows($db);
        }

    }
    // else{
    //     echo "Svi podaci su neophodni";
    // }

}

mysqli_close($db);
