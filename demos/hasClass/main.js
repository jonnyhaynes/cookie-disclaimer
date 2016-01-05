PowerHouse.ready(function () {
  var el = document.querySelector('.item');
  if(PowerHouse.hasClass(el, 'a-specific-class')) {
    el.style['color'] = 'red';
  }
});
