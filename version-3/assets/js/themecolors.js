var red = "#314152", redsecond="#51677f", blue = "#1e88e5", bluesecond = "#0e79d6", yellow = "#5d001e", yellowsecond = "#a91f4c";

$('.alert').hide();

$('input[type="radio"]').change(function(){
  var selected = $(this).val();
  
  switch(selected) {
    case "red":
      $("html").attr("style","--main-color:"+red+"; --second-color:"+redsecond);
    break;
      
    case "blue":
      $("html").attr("style","--main-color:"+blue+"; --second-color:"+bluesecond);      
    break;
      
    case "yellow":
      $("html").attr("style","--main-color:"+yellow+"; --second-color:"+yellowsecond);      
    break;
  }
  
  $(".alert").append("<p>Selected color: "+ selected +"</p>").show();
})