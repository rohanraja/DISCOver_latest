<?php

include "conn.php";

$tbl="playupdates"; // Table name

$you_url=$_GET['yid'];

$searchq = "SELECT * FROM `playupdates` WHERE you_url LIKE '$you_url'";

$result = mysql_query($searchq);

$row = mysql_fetch_array($result);

$sname = $row['song_name'];
$aname = $row['song_artist'];

print $sname."<br>Artist: ".$aname ;

?>