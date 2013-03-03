<?php

	$host="localhost"; // Host name 
	$username="root"; // Mysql username 
	$password=""; // Mysql password 
	$db="hacku"; // Database name 


	mysql_connect($host,$username,$password); 
	mysql_select_db("$db")or die("cannot select DB");

?>