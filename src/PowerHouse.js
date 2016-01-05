/**
 * PowerHouse.ready() is fired when the initial HTML document has been
 * completely loaded and parsed, without waiting for stylesheets, images,
 * to finish loading.
 *
 * @memberOf  PowerHouse
 * @name      Powerhouse.ready
 * @access    public
 * @param     {Callback} [cb] – the name of the callback that should be fired
 *
 * ```js
 *   PowerHouse.ready(function () {
 *     console.log('The document is ready');
 *   });
 * ```
 */
export function ready (cb) {

  if (document.readyState != 'loading') {
    cb();
  } else {
    document.addEventListener('DOMContentLoaded', cb);
  }

}

/**
 * PowerHouse.addClass() adds a class to a specified element.
 *
 * @memberOf  PowerHouse
 * @name      Powerhouse.addClass
 * @access    public
 * @param     {Element} [el] – the element being targetted
 * @param     {String} [className] – the class name being added
 *
 * ```js
 *   PowerHouse.addClass(document.querySelector('.this'), 'class-name');
 * ```
 */
export function addClass (el, className) {

  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += ' ' + className;

}

/**
 * PowerHouse.addClass() removes a class to a specified element.
 *
 * @memberOf  PowerHouse
 * @name      Powerhouse.removeClass
 * @access    public
 * @param     {Element} [el] – the element being targetted
 * @param     {String} [className] – the class name being removed
 *
 * ```js
 *   PowerHouse.removeClass(document.querySelector('.this'), 'class-name');
 * ```
 */
export function removeClass (el, className) {

  if (el.classList) el.classList.remove(className);
  else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');

}

/**
 * PowerHouse.toggleClass() toggles a class on a specified element.
 *
 * @memberOf  PowerHouse
 * @name      Powerhouse.toggleClass
 * @access    public
 * @param     {Element} [el] – the element being targetted
 * @param     {String} [className] – the class name being toggled
 *
 * ```js
 *   PowerHouse.toggleClass(document.querySelector('.this'), 'class-name');
 * ```
 */
export function toggleClass (el, className) {

  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0) {
      classes.splice(existingIndex, 1);
    } else {
      classes.push(className);
    }

    el.className = classes.join(' ');
  }

}

/**
 * PowerHouse.hasClass() checks whether an element has a specified class.
 *
 * @memberOf  PowerHouse
 * @name      Powerhouse.hasClass
 * @access    public
 * @param     {Element} [el] – the element being targetted
 * @param     {String} [className] – the class name being toggled
 * @returns   {boolean}
 *
 * ```js
 *   if(PowerHouse.hasClass(document.querySelector('.this'), 'class-name')) {
 *     console.log('true');
 *   }
 * ```
 */
export function hasClass (el, className) {

  return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);

}

/**
 * PowerHouse.randomNumber() returns a random number within a specified range.
 *
 * @memberOf  PowerHouse
 * @name      Powerhouse.randomNumber
 * @access    public
 * @param     {Integer} [min] – the lowest possible number
 * @param     {Integer} [max] – the highest possible number
 * @returns   {Integer}
 *
 * ```js
 *   PowerHouse.randomNumber(10, 20);
 * ```
 */
export function randomNumber (min, max) {

  return Math.floor(Math.random() * (max - min)) + min;

}

/**
 * PowerHouse.getQueryString() returns data from a URL's query string
 *
 * @memberOf  PowerHouse
 * @name      Powerhouse.getQueryString
 * @access    public
 * @param     {Integer} [key] – the name of the item in the query string
 * @param     {Integer} [url] – the URL containing the query string
 * @returns   {Integer}
 *
 * ```js
 *   var url = window.location.href;
 *   var name = PowerHouse.getQueryString('name', url);
 * ```
 */
export function getQueryString (key, url) {

  var href = url ? url : window.location.href,
      reg = new RegExp('[?&]' + key + '=([^&#]*)', 'i'),
      string = reg.exec(href);

  return string ? string[1] : null;

}

/**
 * PowerHouse.getFileContents() returns the content of a file
 *
 * @memberOf  PowerHouse
 * @name      Powerhouse.getFileContents
 * @access    public
 * @param     {Integer} [key] – the name of the item in the query string
 * @param     {Integer} [url] – the URL containing the query string
 * @returns   {Integer}
 *
 * ```js
 *   PowerHouse.getFileContents('/file.html', function (response) {
 *     console.log(response);
 *   }, function (response)
 *     console.log('There was an error: ' + response);
 *   });
 * ```
 */
export function getFileContents (file, success, error) {

  // Detect whether XMLHttpRequest is supported
  if (!window.XMLHttpRequest) {
    return;
  }

  // Create a new request
  var request = new XMLHttpRequest();

  // Setup callbacks
  request.onreadystatechange = function () {

    // If the request is completed
    if (this.readyState === 4) {

      // If the request failed
      if (request.status !== 200) {
        if (error && typeof(error) === 'function') {
          error(request.responseText, request);
        }
        return;
      }

      // If the request was successful
      if (success && typeof(success) === 'function') {
        success(request.responseText, request);
      }
    }
  };

  // Send the HTML
  request.open('GET', file, true);
  request.send();

}

/**
 * PowerHouse.forEach() loops through a given array
 *
 * @memberOf  PowerHouse
 * @name      Powerhouse.forEach
 * @access    public
 * @param     {Array} [array] – the array being targetted
 * @param     {Callback} [cb] – the name of the callback that should be fired
 * @returns   {Integer}
 *
 * ```js
 *   PowerHouse.forEach(document.querySelectorAll('.item'), function (el, i) {
 *     console.log(i + ': ' + el);
 *   });
 * ```
 */

export function forEach (array, cb) {

  for (var i = 0; i < array.length; i++) {
    cb(array[i], i);
  }

}

/**
 * PowerHouse.insertAfter() inserts a given node after a reference node
 *
 * @memberOf  PowerHouse
 * @name      Powerhouse.insertAfter
 * @access    public
 * @param     {Element} [newNode] – the new node
 * @param     {Element} [referenceNode] – the node to insert the new node after
 *
 * ```js
 *   PowerHouse.insertAfter(document.querySelector('.item-2'), document.querySelector('.item-1'));
 * ```
 */

export function insertAfter (newNode, referenceNode) {

  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

}

/**
 * PowerHouse.insertBefore() returns the content of a file
 *
 * @memberOf  PowerHouse
 * @name      Powerhouse.insertBefore
 * @access    public
 * @param     {Element} [newNode] – the new node
 * @param     {Element} [referenceNode] – the node to insert the new node before
 *
 * ```js
 *   PowerHouse.insertBefore(document.querySelector('.item-1'), document.querySelector('.item-2'));
 * ```
 */

export function insertBefore (newNode, referenceNode) {

  referenceNode.insertAdjacentHTML('beforebegin', newNode.outerHTML);

}

/**
 * PowerHouse.remove() removes an element
 *
 * @memberOf  PowerHouse
 * @name      Powerhouse.remove
 * @access    public
 * @param     {Element} [el] – the node to remove
 *
 * ```js
 *   PowerHouse.remove(document.querySelector('.item-1'));
 * ```
 */

export function remove (el) {

  el.parentNode.removeChild(el);

}

/**
 * PowerHouse.wrap() wraps an element inside another
 *
 * @memberOf  PowerHouse
 * @name      Powerhouse.wrap
 * @access    public
 * @param     {Element} [el] – the element being wrapped
 * @param     {Element} [wrapper] – the new wrapping element
 *
 * ```js
 *   PowerHouse.wrap(document.querySelector('.needs-a-wrapper'), document.createElement('div'));
 * ```
 */

export function wrap (el, wrapper) {

  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);

}

/**
 * PowerHouse.unwrap() unwraps all children from their parent
 *
 * @memberOf  PowerHouse
 * @name      Powerhouse.wrap
 * @access    public
 * @param     {Element} [el] – the element being unwrapped
 *
 * ```js
 *   PowerHouse.unwrap(document.querySelector('.unwrap-me'));
 * ```
 */

export function unwrap (el) {

  var parent = el.parentNode;

  while (el.firstChild) parent.insertBefore(el.firstChild, el);

  parent.removeChild(el);

}
