<?php

include_once('konekcija.php');

$funkcija = $_GET['funkcija'];
$poruka['uspesno'] = "";
$poruka['greska'] = "";


if($funkcija=="obrisi"){

    $id = $_POST['id'];

    $upit = "UPDATE tasks SET obrisan=1 WHERE id={$id}";

    // $upit = "DELETE from tasks WHERE id={$id}";
    mysqli_query($db, $upit);

    if(mysqli_error($db)){
        echo mysqli_error($db);
    }
    // else {
    //     $poruka['uspesno'] = "Task $id obrisan";
    // }
}

mysqli_close($db);

