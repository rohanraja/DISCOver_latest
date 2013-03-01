function searchquery(squery)
{
	srchurl = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20boss.search%20where%20q%3D%22";
	
	srchurl = srchurl + squery;
		
	srchurl = srchurl + "%22%20and%20secret%20%3D%20%22a3d93853ba3bad8a99a175e8ffa90a702cd08cfa%22%20and%20ck%3D%22dj0yJmk9YWF3ODdGNWZPYjg2JmQ9WVdrOWVsWlZNRk5KTldFbWNHbzlNVEEyTURFNU1qWXkmcz1jb25zdW1lcnNlY3JldCZ4PTUz%22%20AND%20sites%20%3D%20%22lyrics007.com%22%3B&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys" ;
	
	
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
		
		$.each(data.query.results.bossresponse.web.results.result, function(index, value) {
		
			outp = "<a href='" 
		 	outp += value.url ;
		 	outp += "'>"
		 	outp += value.title.content ;
		 	outp += "</a><br>"
		 	
		 	document.getElementById("searchresults").innerHTML += outp;
		 
		});

		//alert("done");
		
	}});
}