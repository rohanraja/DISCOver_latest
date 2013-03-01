function searchquery(squery)
{
	$.ajax({
		url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20boss.search%20where%20q%3D%22I%20got%20my%20first%20real%20six%20string%22%20and%20secret%20%3D%20%22a3d93853ba3bad8a99a175e8ffa90a702cd08cfa%22%20and%20ck%3D%22dj0yJmk9YWF3ODdGNWZPYjg2JmQ9WVdrOWVsWlZNRk5KTldFbWNHbzlNVEEyTURFNU1qWXkmcz1jb25zdW1lcnNlY3JldCZ4PTUz%22%20AND%20sites%20%3D%20%22lyrics007.com%22%3B&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
		type: "GET",
		dataType: 'json',
		async: true,
		success: function(data) {
		
		$('body').html(data.query.count);
		console.log(data);
		//alert("done");
		
	}});
}