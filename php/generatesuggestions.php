<?php

include "conn.php";

$tbl="playupdates"; // Table name

// Connect to server and select databse.


$fbid = $_GET['fbid']; 
$song_name=$_GET['sname'];
$song_artist=$_GET['sartist'];
$you_url=$_GET['yid'];

$searchq = "SELECT DISTINCT fbid FROM `playupdates` WHERE you_url LIKE '$you_url'";

$finalsearchq = "SELECT * FROM `playupdates` WHERE 0 " ;


$result = mysql_query($searchq);

while ($row = mysql_fetch_array($result) ) 
{
	
	$fbb = $row['fbid'] ;
	
	if($fbb != $fbid)
	{
		$finalsearchq = $finalsearchq."OR fbid = $fbb ";

	}
	

}


$mainquery = "SELECT you_url, COUNT(fbid) FROM ($finalsearchq) AS temp GROUP BY you_url ORDER BY COUNT(fbid) DESC LIMIT 4";

$result = mysql_query($mainquery);

$pgs = array();
while($r = mysql_fetch_assoc($result)) {
	
	 
	
	$pgs[] = $r;

}
echo json_encode($pgs);

?>