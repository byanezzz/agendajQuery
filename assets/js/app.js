var idPin = 0;
$(document).ready(function(){
  $('#buttonAdd').click(add);
  // $('.search').click(search);

  // function add() {
  //   $('.container').append(add)
  // }

  function add() {
    var name = $('#inputName').val();
    $('#inputName').val('');
    var phone = $('#inputPhone').val();
    $('#inputPhone').val('');

    $('#sectionAgenda').append('<div class="col-md-8">' +
    '<div class="row">' + 
    '<div class="col-md-12">' + 
    '<h3 id="contactName_' + idPin + '">' + name + '</h3>'+
    '</div> </div>' +
    '<div class="row">' +
    '<div class="col-md-8">' +
    '<h5 id="contactNumber_' + idPin + '">' + phone + '</h5>' +
    '</div> </div>' 
    );
  }
});