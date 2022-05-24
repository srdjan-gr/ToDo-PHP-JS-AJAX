<?php
include_once('konekcija.php');

$funkcija = $_GET['funkcija'];

if($funkcija=='prikaz'){

    $upit = "SELECT * FROM tasks WHERE obrisan=0 ORDER BY id DESC";
    $rez = mysqli_query($db, $upit);

    $odgovor = mysqli_fetch_all($rez, MYSQLI_ASSOC);
    echo json_encode($odgovor, 256);

}