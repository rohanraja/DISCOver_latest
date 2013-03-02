<?php

include "conn.php";

$tbl="playupdates"; // Table name


$fbid=$_GET['fbid']; 
$song_name=$_GET['sname'];
$song_artist=$_GET['sartist'];
$you_url=$_GET['yid'];


$enterq = "INSERT INTO $tbl (fbid, song_name, song_artist, you_url) VALUES ('$fbid','$first_name','$last_name','$email')";

mysql_query($enterq);



?>