<?php


include "conn.php";

$tbl="fblogin"; // Table name

$fbid=$_GET['fbid']; 

$sql="SELECT * FROM $tbl WHERE fbid='$fbid'";

$result=mysql_query($sql);

$count=mysql_num_rows($result);

$r = mysql_fetch_assoc($result) ;


if($count==0)
{
	echo 0;
	
	}
	
else
{
echo $r['id'];
}


?>