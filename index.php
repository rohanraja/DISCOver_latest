<html>
<head>
	<meta charset="utf-8">
	<title></title>
	
	
	<script src="js/jquery.js"></script>
	<script type="text/javascript" src="js/swfobject.js"></script>
	
	
	<script type="text/javascript">
		var YMPParams = 
		{
			autoplay:true,
			volume:0.5,
			parse:false
		}
	</script>
<script type="text/javascript" src="http://mediaplayer.yahoo.com/latest">

	/* This will include the yahoo media player on the page */
</script>


	<script src="js/fbcheck.js"></script>
	
	<script src="js/yql.js"></script>
	
	
	
	<link href="css/style.css" rel="stylesheet" type="text/css">
	
	
	<script type="text/javascript">
	
	
		//alert("sd");
	//	YAHOO.MediaPlayer.addTracks(document.getElementById("playlist2"),0,true));
	
	
		var apiReadyHandler = function ()
		{
			/* Once API ready handler is invoked, YAHOO.MediaPlayer class can be accessed safely */
			/* For example: Add other event listeners **/
			YAHOO.MediaPlayer.onPlaylistUpdate.subscribe(onPlaylistUpateHandler);

		}
	
		var onPlaylistUpateHandler = function (playlistArray)
		{
			/* Handler for onPlaylistUpdate event */
			//alert(" playlist count = " + YAHOO.MediaPlayer.getPlaylistCount()) 
		}
	
		YAHOO.MediaPlayer.onAPIReady.subscribe(apiReadyHandler);
	
	
	
	
	</script>
	
</head>
<body>
	
<div id="main">
	
	<input id="sbox" autocomplete="off" type="text" class="searchbox" name="search_string" placeholder="Search lyrics, artists, songs" onkeypress="return runScript(event)" value=""  />
	

			<img src="" style="" id="propictab">
			<b id="proname"></b>
	
	<img src="img/searchl.gif" id="searchl" style="display : none;">
	<div id="searchresults" style=""></div>
	

	<div id="suggestions">

	</div>
		
	<div id="playlist" style="visibility : hidden">

	
	</div>
</div>	
</body>
</html>