<?php

include "conn.php";

$tbl="playupdates"; // Table name


$fbid= 24;//$_GET['fbid']; 
$song_name=$_GET['sname'];
$song_artist=$_GET['sartist'];
$you_url=$_GET['yid'];


$enterq = "INSERT INTO $tbl (fbid, song_name, song_artist, you_url) VALUES ('$fbid','$song_name','$song_artist','$you_url')";

mysql_query($enterq);



?>