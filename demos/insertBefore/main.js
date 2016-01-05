PowerHouse.ready(function () {

  var newElement = document.createElement('li'),
      newElementText = document.createTextNode('I\'ve been inserted before item 4... see!');

  newElement.appendChild(newElementText);

  PowerHouse.insertBefore(newElement, document.querySelector('li:nth-of-type(4n)'));

});
