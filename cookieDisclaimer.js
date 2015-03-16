var CookieDisclaimer = (function () {

  var settings = {
    name: 'cookies_accepted',
    template: '/build/javascripts/templates/cookie.html',
    message: 'Our website uses cookies to monitor traffic on our website and ensure that we can provide our customers with the best online experience possible. Please read our <strong><a href="/cookies">cookie policy</a></strong> to view more details on the cookies we use.'
  };

  var request;


  /**
   * Get contents of file
   */

  var _getFileContents = function(template, callback) {

    request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        callback(request.responseText);
      }
    };
    request.open('GET', template, true);
    request.send();

  };


  /**
   * Create the cookie
   */

  var _create = function (name, value, days) {

    var expires;

    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      expires = '; expires=' + date.toGMTString();
    } else {
      expires = '';
    }

    document.cookie = name + '=' + value + expires + '; path=/';

  };


  /**
   * Read the cookie
   */

  var _read = function (name) {

    var nameEQ = name + '=';
    var ca = document.cookie.split(';');

    for (var i=0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0)== ' ') {
        c = c.substring(1,c.length);
      }

      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length,c.length);
      }
    }

    return null;

  };


  /**
   * Test for the cookie
   */

  var _test = function (options) {

    // override the default config
    for(var prop in options) {
      if(options.hasOwnProperty(prop)){
        settings[prop] = options[prop];
      }
    }

    if (!_read(settings.name)) {

      _getFileContents(settings.template, function (response) {

        var bodyClass = 'has-cookie-banner';

        // create the banner
        var el = document.createElement('div');
        el.id = 'cookie-banner';
        el.innerHTML += response;

        // prepend to the body
        document.body.insertBefore(el, document.body.firstChild);

        // add message
        document.getElementById('message').innerHTML = settings.message;

        // add class to body
        if (document.body.classList)
          document.body.classList.add(bodyClass);
        else
          document.body.className += ' ' + bodyClass;

        document.getElementById('close').onclick = function () {
          // create the cookie
          _create(settings.name, true, 1800);

          // remove the banner
          var el = document.getElementById('cookie-banner');
          el.parentNode.removeChild(el);

          // remove the class name from the body
          if (document.body.classList)
            document.body.classList.remove(bodyClass);
          else
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + bodyClass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

          // prevent the default link action
          return false;
        }

      });
    }

  };


  /**
   * Initilise the cookie banner
   */

  var init = function (options) {

    _test(options);

  };


  return {
    init: init
  };

})();
