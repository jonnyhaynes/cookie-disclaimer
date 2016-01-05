PowerHouse.ready(function () {

  PowerHouse.getFileContents('test.html', function (response) {
    console.log(response);
    document.body.innerHTML += response;
  }, function (response) {
    console.log(response);
  });

});
