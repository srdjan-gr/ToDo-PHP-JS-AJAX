<?php

// Baza
$db = mysqli_connect("localhost:3309", "root", "", "todo_app");
mysqli_query($db, "SET NAMES utf8");

if(!$db){
   echo "Doslo je do greske prilikom konekcije na bazu <br>"; 
   echo mysqli_connect_errno()."<br>";
   echo mysqli_connect_error();
}
