var fbid = iddd; 

function createyousearchurl(youquery)
{
	//yousearchurl = "http://query.yahooapis.com/v1/yql?q=select%20*%20from%20boss.search%20where%20q%3D%22";
	
	//http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20boss.search%20where%20q%3D%22Summer%20of%2069%20Bryan%20Adams%22%20and%20secret%20%3D%20%22a3d93853ba3bad8a99a175e8ffa90a702cd08cfa%22%20and%20ck%3D%22dj0yJmk9YWF3ODdGNWZPYjg2JmQ9WVdrOWVsWlZNRk5KTldFbWNHbzlNVEEyTURFNU1qWXkmcz1jb25zdW1lcnNlY3JldCZ4PTUz%22%20AND%20sites%20%3D%20%22youtube.com%22%20AND%20count%20%3D%20%225%22%3B&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=cbfunc
	
	
	//http://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&q=_eVTXPUF4Oz4
	
	qry = youquery.replace("Lyrics","");
	
	yousearchurl = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20boss.search%20where%20q%3D%22";

	yousearchurl = yousearchurl + qry ; 
	
	//yousearchurl = yousearchurl + "%22%20and%20secret%20%3D%20%22a3d93853ba3bad8a99a175e8ffa90a702cd08cfa%22%20and%20ck%3D%22dj0yJmk9YWF3ODdGNWZPYjg2JmQ9WVdrOWVsWlZNRk5KTldFbWNHbzlNVEEyTURFNU1qWXkmcz1jb25zdW1lcnNlY3JldCZ4PTUz%22%20AND%20sites%20%3D%20%22youtube.com%22%3B&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=cbfunc";
		
	yousearchurl = yousearchurl + "%22%20and%20secret%20%3D%20%22a3d93853ba3bad8a99a175e8ffa90a702cd08cfa%22%20and%20ck%3D%22dj0yJmk9YWF3ODdGNWZPYjg2JmQ9WVdrOWVsWlZNRk5KTldFbWNHbzlNVEEyTURFNU1qWXkmcz1jb25zdW1lcnNlY3JldCZ4PTUz%22%20AND%20sites%20%3D%20%22youtube.com%22%20AND%20count%20%3D%20%225%22%3B&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys" ;
		
	yousearchurl = yousearchurl.replace(/\ /g,"%20");
	//yousearchurl = yousearchurl.replace("Lyrics","");
	
	console.log(yousearchurl);
	
	
	return yousearchurl;
	
}


function searchquery(squery)
{	

	$("#searchresults").animate({height : '0px'}, 'slow');

	
	$('#searchl').css('display', 'block');
	

	
	srchurl = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20boss.search%20where%20q%3D%22";
	
	srchurl = srchurl + squery;
		
	srchurl = srchurl + "%22%20and%20secret%20%3D%20%22a3d93853ba3bad8a99a175e8ffa90a702cd08cfa%22%20and%20ck%3D%22dj0yJmk9YWF3ODdGNWZPYjg2JmQ9WVdrOWVsWlZNRk5KTldFbWNHbzlNVEEyTURFNU1qWXkmcz1jb25zdW1lcnNlY3JldCZ4PTUz%22%20AND%20sites%20%3D%20%22lyrics007.com%22%20AND%20count%20%3D%20%225%22%3B&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys" ;
	
	
	srchurl = srchurl.replace(/\ /g,"%20");
	


	console.log(srchurl);
	
	//alert(srchurl);
	
	$.ajax({
		url: srchurl,
		type: "GET",
		dataType: 'json',
		async: true,
		success: function(data) {
		
		//$('body').html(data.query.count);
		console.log(data);
		//console.log(data.query.results.bossresponse.web.results.result);
		
		document.getElementById("searchresults").innerHTML = "";
		
		resultarray = data.query.results.bossresponse.web.results.result ;
		
		$.each(resultarray, function(index, value) {
		
			outp = "<div class=\"searchitems\" onclick=\"linkclick('" ;
		 	contt = value.title.content.replace(/<b>/g,"") ;
		 	contt1 = contt.replace(/<\/b>/g,"") ;
		 	
		 	contt = contt1.replace(/\'/g,"\\'") ;

		 	outp += contt;
		 				
			
			
			searchurl = createyousearchurl(contt);
			
			$.getJSON(searchurl, function(data) {
				
				youtubeurl = data.query.results.bossresponse.web.results.result[0].url;
				console.log(youtubeurl);
				youtubeurl = youtubeurl.replace("watch?v=","embed/");
			
				vidid2 = youtubeurl.replace(/http:\/\/www.youtube.com\/embed\//, "");

				$("#"+index.toString()).find('img').attr('src','http://img.youtube.com/vi/'+vidid2+'/2.jpg');
				
			});

		 	outp += "')\" id='"+ index +"'>";
		 	outp += contt1.replace("Lyrics",""); 
		 	//outp += "<img src='http://img.youtube.com/vi/" + vidid +"/2.jpg";
		 	
		 	outp += "<img src=''></div><br>";
		 	
		 	
		 	

		 	document.getElementById("searchresults").innerHTML += outp;
		 	
		 	if(index==0)
		 	{
			 	linkclick(contt);
		 	}
		 	
		 	
		 
		 
		});
		
	
		
		
		
		//alert($('a').html());

		//alert("done");
		
	}});
}



function updateplayhistory(sngname, sngartist, youid)
{

	
	$.ajax({
		url: "php/playhistupdate.php?fbid="+fbid+"&sname="+sngname+"&sartist="+sngartist+"&yid="+youid,
		type: "GET",
		async: true,
		
		success: function(data) {
			
			
			console.log("Updated");
			
		}});
	
}


function linkclick(linkname)
{
	$('#searchl').css('display', 'block');
	
	var straa = linkname.replace(/(.+)\ -\ /g, "");
	songname = straa.replace(" Lyrics","");
	
	var artistname = linkname.replace(/\ -(.+)/g, "");

	searchurl = createyousearchurl(linkname);
	
	var i = 0;
	
	$.getJSON(searchurl, function(data) {
	
		do
		{
		isnotplayble = 1;
		youtubeurl = data.query.results.bossresponse.web.results.result[i].url;
		
		console.log(youtubeurl);
		
		yahooyouurl = youtubeurl;
		
		youtubeurl = youtubeurl.replace("watch?v=","embed/");
		
		var vidid = youtubeurl.replace(/http:\/\/www.youtube.com\/embed\//, "");
		
		//alert(vidid);
		
		
		var pl = document.getElementById("playlist") ;
		
		pl.innerHTML = "";
		
		pl.innerHTML = "<a href='" + yahooyouurl + "'>"+songname+"</a>" ;
		
		YAHOO.MediaPlayer.addTracks(pl,null,false);
		YAHOO.MediaPlayer.next();
		
					
		chkurl = "http://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&q=_" + vidid; 
			
			
			$.ajax({
				url: chkurl,
				type: "GET",
				dataType: 'json',
				async: false,
				
				success:function(data){
							
			jdata = JSON.stringify(data);
			
			if(/\"embed\":\"allowed\"/.test(jdata))
				isnotplayble = 0;
			else
				isnotplayble = 1;
			
			
		}});
							
			
			
		
		
		i = i + 1;
		
		}while(isnotplayble && i <6);
			
			
			updateplayhistory(songname, artistname, vidid);
			
			setTimeout(function() { load_suggestions(vidid) ; }, 2800); 

			setTimeout(function() { 
			
			$("#searchresults").animate({height : '0px'}, 'fast');

			$('div.ywp-container').animate({'margin-left' : '320px'}, 'slow');
			
				}, 5800); 
						
			
			$('#searchl').css('display', 'none');
			
			//console.log($('div.ywp-player').css('box-shadow', 'none'));
			
			$("#searchresults").animate({height : '400px'}, 'slow');
			$('div.ywp-container').animate({'margin-left' : '650px'}, 'slow');
			

		});
	
	
}

function getyoutubeurlfromsearch(srchq)
{
	searchurl = createyousearchurl(srchq);
	
	$.getJSON(searchurl, function(data) {
		
		youtubeurl = data.query.results.bossresponse.web.results.result[0].url;
		return youtubeurl;
		
	});
}




function runScript(e) {
	if (e.keyCode == 13) {
		
		searchquery($("#sbox").attr('value'));
		return false;
	}
}



function load_suggestions(vidid)
{
	if($("#suggestions").html())
		$("#suggestions").animate({bottom : '-500px'}, 1500);

	
	$.getJSON("php/generatesuggestions.php?yid="+vidid+"&fbid="+fbid, function(data) {
		
		mainout = "";
		
		$.each(data, function(index, value) {
		 
			if(value.you_url != vidid)
			{
			
			$.ajax({
				url: "php/getsong.php?yid="+value.you_url,
				type: "GET",
				dataType: 'html',
				async: false,
				success: function(dataa) {



			outt = '<div id="items" onclick="linkclick(\''+dataa+'\')"><div id="videoimg"><img src="http://img.youtube.com/vi/' + value.you_url + '/2.jpg"></div><div id="videodet">' + dataa + '</div></div>';
			
			mainout = mainout + outt;
			
			
			}});
			
			}
			
		});
		
		
		
		$("#suggestions").html("<div id=\"people\">People who like this music also like</div>"+mainout);
		
		if(mainout)
			$("#suggestions").animate({bottom : '5px'}, 1500);

		
		


});
	
}

