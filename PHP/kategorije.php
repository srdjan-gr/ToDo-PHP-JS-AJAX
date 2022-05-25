<?php

include_once('konekcija.php');

$funkcija = $_GET['funkcija'];

if($funkcija=='taskKategorija'){

    $upit = "SELECT * FROM task_kategorija";
    $rezultat = mysqli_query($db, $upit);

    $odgovor = mysqli_fetch_all($rezultat, MYSQLI_ASSOC);

    // print_r($odgovor);
    echo json_encode($odgovor, 256);
}

mysqli_close($db);