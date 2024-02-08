// var tag = document.getElementsByTagName('p');
// var p = tag[0];
// p.innerHTML ="hello";

$('#p').html('hola');

// $('#p').css('color', 'red');
// $('#p').css('fontSize', '80px');
// $('#p').css('backgroundColor', 'black');

$('.div').css({
  color: 'red',
  fontSize: '40px',
  backgroundColor: 'blue',
  width: '100px',
  height: '100px'
});


$('a').on('click', function (event) {
  event.preventDefault();
  alert('congratulations');
});


var box = $('.box');
box.css({
  width: '100px',
  height: '100px',
  backgroundColor: 'red'
});

box.on('click', function () {
  var e = $(this);
  e.width(e.width() + 10 + 'px');
});



// ================ Toggle =============




$('#button').on('click', function () {
  $('#section').toggleClass('yellow');
});




