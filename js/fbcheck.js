function sBs(ss1,ss2,fs) {
	ss1 = fs.search(ss1) + ss1.length; // continue *after* the first substring
	ss2 = fs.search(ss2); //grab the position of the beginning of substring2
	var sbsResult = fs.slice(ss1,ss2); 
	console.log(sbsResult);
	return sbsResult;
}


var acctkn, iddd ;

$(document).ready(function() {




	acctkn = sBs("=","&",location.hash);
	if(acctkn)	
		getfromfb();


});



function getfromfb()
{
	var result = null ;

	$.ajax({
	 url: "https://graph.facebook.com/me?access_token="+acctkn,
	 type: 'get',
	 dataType: 'json',
	 async: false,
	 success: function(mee) { 

		iddd= mee.id;

		result = mee;


		$.get('php/chkfbid.php?fbid='+mee.id, function(rett) {

			if(rett==0)
			{
						console.log("registering");

						$.ajax({
	 url: "php/createuser.php?fbid=" + mee.id + "&first_name=" + mee.first_name + "&last_name=" + mee.last_name+ "&email=" +  mee.email,
	 type: 'get',
	 dataType: 'json',
	 async: false,
	 success: function(mee) {}});





			}



			onlogin(mee.first_name, mee.id);





		}); //--chkfbid







	}}); //-- ajax, facebook.com



}


function onlogin(name, fbid)
{


	console.log("FB LOADED");

	$("#propictab").attr("src","http://graph.facebook.com/" + fbid + "/picture");

	$("#proname").html("Hi "+name+"!");



}