<html>
<head>
	<meta charset="utf-8">
	<title></title>
	
	
	<script src="js/jquery.js"></script>
	<script type="text/javascript" src="js/swfobject.js"></script>
	<script src="js/yql.js"></script>
	
	
	
	<link href="css/style.css" rel="stylesheet" type="text/css">
	
	<script type="text/javascript">
	
	 var fbid = <?php print $_GET['fbid'];?> ;
	
	
	</script>
	
</head>
<body>
	

	
	<input id="sbox" autocomplete="off" type="text" class="searchbox" name="search_string" placeholder="Search" onkeypress="return runScript(event)" value=""  />
	
<div id="ytplayer">

<p>You will need Flash 8 or better to view this content.</p>

</div>





<script type="text/javascript">

	var params = { allowScriptAccess: "always" };

	swfobject.embedSWF(

		"http://www.youtube.com/v/tFI7JAybF6E&enablejsapi=1&playerapiid=ytplayer", "ytplayer", "425", "365", "8", null, null, params);

</script>

			<a  id="fbcon" class="navbar-text pull-right" style=" "href="https://www.facebook.com/dialog/oauth?client_id=295811957186915&redirect_uri=http://collegepedia.in/videotuts/videocookie/fblogin.html&response_type=token" target="_blank">			
			
			<img src="img/fbcon.png" style="">
			</a>
	
	<img src="img/searchl.gif" id="searchl" style="display : none;">
	<div id="searchresults" style="">
	</div>
	
	
	
	
</body>
</html>