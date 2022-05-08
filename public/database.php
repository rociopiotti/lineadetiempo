<?php
 header("Access-Control-Allow-Origin: *");


 $file = file_get_contents("https://linea-de-tiempo.netlify.app/database.json");

 echo $file;
 ?>