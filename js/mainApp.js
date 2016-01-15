var main = function(){
	var mainhref = window.location.href;
	var n = mainhref.indexOf("#");
	if (n > 1)
	{
		var shortHref =mainhref.substr(n+2);
		
		$('#main_menu li').removeClass('active');
		if (shortHref.length>1)
		{		
			$('#'+shortHref).toggleClass('active');
		}
		else
		{
				$('#about').toggleClass('active');
		}	
			
		
	}
	$('#main_menu li').click(function(event){
			$('#main_menu li').removeClass('active');
			$(this).toggleClass('active');
	});
document.getElementById('myElement').onclick = function() {
    		var xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new 	ActiveXObject("Microsoft.XMLHTTP");
	xmlhttp.open('POST', 'https://mandrillapp.com/api/1.0/messages/send.json');
	xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4) {
	        if(xmlhttp.status == 200) alert('Mail sended!')
	        else if(xmlhttp.status == 500) alert('Check apikey')
	        else alert('Request error');
	    }
	}
	xmlhttp.send(JSON.stringify({'key': 'ES1fqDzSBDEpbOw1Kph4Pw',
	   'message': {
	       'from_email': 'astaffer@mail.ru',
	       'to': [{'email': 'support@novsir.ru', 'type': 'to'}],
	       'autotext': 'true',
	       'subject': 'Yeah!',
	       'html': '<h1>Its work!</h1>'
	    }}));
	}
};
//alert(window.location.href);
//$(document).ready(main);
$(function(){
main();
});