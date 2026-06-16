$(document).ready(function(){
    $('#fname,#lname,#scls,#scountry').focus(function(){
        $(this).css('background-color','yellow');
     });

     $('#fname,#lname,#scls,#scountry').blur(function(){
        $(this).css('background-color','');
     });
     $('#scountry').change(function(){
      //$(this).css('background-color','orange');
      var a= $(this).val();
      $('#test').html(a);
   });

   $('#fname,#lname,#scls').select(function(){
      $(this).css('background-color','orange');
    });

    $('#sform').submit(function(){
      alert('form submitted');

    });
});
