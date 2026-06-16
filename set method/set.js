$(document).ready(function() {
    $('#clickbutton').click(function() {
        $('#box h2').text("hello yahoo baba");


        $('#box p').text("The PARA Method: The Simple System for Organizing Your Digital Life in Seconds");
        $('#box p').html("The PARA Method: <i>The Simple System </i> for<b> Organizing Your Digital Life in Seconds </b>");

        $('#box h2').attr("class", "red");

        // val() fn is used in form.

    });

});
// val() fn is used in form.
$(document).ready(function() {
    $('#sname').val("yahoo baba");
    $('#sclass').val("MCA");
});