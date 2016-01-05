PowerHouse.ready(function () {
  var url = window.location.href;
  if(PowerHouse.getQueryString('name', url)) {
    alert(PowerHouse.getQueryString('name', url));
  }
});
