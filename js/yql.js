function createyousearchurl(youquery)
{
	//yousearchurl = "http://query.yahooapis.com/v1/yql?q=select%20*%20from%20boss.search%20where%20q%3D%22";
	
	//http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20boss.search%20where%20q%3D%22Summer%20of%2069%20Bryan%20Adams%22%20and%20secret%20%3D%20%22a3d93853ba3bad8a99a175e8ffa90a702cd08cfa%22%20and%20ck%3D%22dj0yJmk9YWF3ODdGNWZPYjg2JmQ9WVdrOWVsWlZNRk5KTldFbWNHbzlNVEEyTURFNU1qWXkmcz1jb25zdW1lcnNlY3JldCZ4PTUz%22%20AND%20sites%20%3D%20%22youtube.com%22%20AND%20count%20%3D%20%225%22%3B&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=cbfunc
	
	qry = youquery.replace("Lyrics","");
	
	yousearchurl = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20boss.search%20where%20q%3D%22";

	yousearchurl = yousearchurl + qry ; 
	
	//yousearchurl = yousearchurl + "%22%20and%20secret%20%3D%20%22a3d93853ba3bad8a99a175e8ffa90a702cd08cfa%22%20and%20ck%3D%22dj0yJmk9YWF3ODdGNWZPYjg2JmQ9WVdrOWVsWlZNRk5KTldFbWNHbzlNVEEyTURFNU1qWXkmcz1jb25zdW1lcnNlY3JldCZ4PTUz%22%20AND%20sites%20%3D%20%22youtube.com%22%3B&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=cbfunc";
		
	yousearchurl = yousearchurl + "%22%20and%20secret%20%3D%20%22a3d93853ba3bad8a99a175e8ffa90a702cd08cfa%22%20and%20ck%3D%22dj0yJmk9YWF3ODdGNWZPYjg2JmQ9WVdrOWVsWlZNRk5KTldFbWNHbzlNVEEyTURFNU1qWXkmcz1jb25zdW1lcnNlY3JldCZ4PTUz%22%20AND%20sites%20%3D%20%22youtube.com%22%20AND%20count%20%3D%20%222%22%3B&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys" ;
		
	yousearchurl = yousearchurl.replace(/\ /g,"%20");
	//yousearchurl = yousearchurl.replace("Lyrics","");
	
	console.log(yousearchurl);
	
	
	return yousearchurl;
	
}


function searchquery(squery)
{	
	
	$('#searchl').css('display', 'block');
	document.getElementById("searchresults").innerHTML = "";

	
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
		
			outp = "<div onclick=\"linkclick('" ;
		 	contt = value.title.content.replace(/<b>/g,"") ;
		 	contt1 = contt.replace(/<\/b>/g,"") ;
		 	
		 	contt = contt1.replace(/\'/g,"\\'") ;

		 	outp += contt;
		 	
		 	var straa = contt.replace(/(.+)\ -\ /g, "");
		 	songname = straa.replace(" Lyrics","");
		 	
		 	var artistname = contt.replace(/\ -(.+)/g, "");

		 	
		 	console.log(songname);
		 	console.log(artistname);


		 	outp += "')\">";
		 	outp += contt1.replace("Lyrics",""); 
		 	outp += "</div><br>";
		 	
		 	
		 	

		 	document.getElementById("searchresults").innerHTML += outp;
		 	
		 
		});
		
		
		
		contt = resultarray[0].title.content.replace(/<b>/g,"") ;
		contt1 = contt.replace(/<\/b>/g,"") ;
		contt = contt1.replace(/\'/g,"\\'") ;
		linkclick(contt);
		
		
		
		//alert($('a').html());

		//alert("done");
		
	}});
}


function linkclick(linkname)
{
	$('#searchl').css('display', 'block');

	searchurl = createyousearchurl(linkname);
	
	$.getJSON(searchurl, function(data) {
			
			youtubeurl = data.query.results.bossresponse.web.results.result[0].url;
			
			console.log(youtubeurl);
			
			youtubeurl = youtubeurl.replace("watch?v=","embed/");
			
			var vidid = youtubeurl.replace(/http:\/\/www.youtube.com\/embed\//, "");
			
			//alert(vidid);
			
			ytplayer = document.getElementById("ytplayer");
			
			ytplayer.loadVideoById(vidid, 0, "large");
			
			
			$('#searchl').css('display', 'none');

		});
	
	
}

function onYouTubePlayerReady(playerId) {
  ytplayer = document.getElementById("ytplayer");
   // alert("ready");
}