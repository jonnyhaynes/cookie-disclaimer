var theWebsite = '_CookieDisclaimer',
    acceptText = 'Our website uses cookies to monitor traffic on our website and ensure that we can provide our customers with the best online experience possible. Please read our <strong><a href="/cookies">cookie policy</a></strong> to view more details on the cookies we use.';

$(document).ready(function(){

  testCookie();

  $(document).on('click', '#close-cookies', function(e) {
    createCookie(theWebsite, true, 1800);
    $('#cookies').remove();
    $('body').css({
      'background-position': '50% 0'
    });
    e.preventDefault();
  });
});

function testCookie() {
  if (!readCookie(theWebsite)) {
    var theDiv = '<div id="cookies"><div class="wrap"><p class="alpha">' + acceptText + '</p><p class="omega"><a id="close-cookies" href="#" role="link">Close</a></p></div></div>';
    $('body').prepend(theDiv).css({
      'background-position': '50% 54px'
    });
  }
}

function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

