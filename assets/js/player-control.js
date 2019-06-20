$(function() {

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
});

function myRound(num, precision) {
  if (num === null) {
    throw "Esperado num";
  }

  if (precision === null) {
    precision = 2;
  }

  return parseFloat((num).toPrecision(precision));
}

function playSound(idEl) {
  var element = document.getElementById('item-'+idEl);
  element.volume = 1; // Volume 100%

  var bgOutlineClass = null;
  for (var className of $('#btn-'+idEl).attr('class').split(' ')) {
    if (className.indexOf('outline') !== -1) {
      bgOutlineClass = className;
    }
  }

  var bgNotOutline = (bgOutlineClass !== null) ? bgOutlineClass.replace('-outline', '') : null;

  if ($('#btn-'+idEl).data('state') === 'stoped') {

    $('#btn-'+idEl).data('state', 'playing');
    element.currentTime = 0;
    element.play();

    var playing = setInterval(function() {

      if (myRound(element.currentTime) === myRound(element.duration)) {

        element.load();

        $('#btn-'+idEl).data('state', 'stoped');
        $('#btn-'+idEl).addClass(bgOutlineClass).removeClass(bgNotOutline);

        clearInterval(playing);

      } else {

        // Blink button
        if ($('#btn-'+idEl).hasClass(bgOutlineClass)) {
          $('#btn-'+idEl).removeClass(bgOutlineClass).addClass(bgNotOutline);
        } else {
          $('#btn-'+idEl).addClass(bgOutlineClass).removeClass(bgNotOutline);
        }
      }

    }, 300);
  } else {
    element.currentTime = element.duration;
  }

}
