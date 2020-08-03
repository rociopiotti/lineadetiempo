<?php
 header("Access-Control-Allow-Origin: *");


 $file = file_get_contents("database.json");

 echo $file;
 ?>