$(document).ready(function() {
  $("form").on('submit', function(e){
    e.preventDefault();
    $('form').hide();
    $("<div id='patience'>YOUR TWEET IS TWITTERING</div>").appendTo(".container");
    $.ajax({
      type: "POST",
      url:  "/",
      data: $(this).serialize(),
      success: console.log(this)
    }).done(function(){
      $('form').show();
      $('form input[name=tweet]').val("");
      $('#patience').hide();
    });
  });
});
