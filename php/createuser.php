<?php

include "conn.php";

$tbl="fblogin"; // Table name

// Connect to server and select databse.


$fbid=$_GET['fbid']; 
$first_name=$_GET['first_name'];
$last_name=$_GET['last_name'];
$email=$_GET['email'];


$enterq = "INSERT INTO fblogin (fbid, first_name,last_name,email) VALUES ('$fbid','$first_name','$last_name','$email')";

mysql_query($enterq);


?>