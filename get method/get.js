$(document).ready(function() {
    var a = $('#box').html();
    console.log(a);

    var b = $('body').html();
    console.log(b);

    var c = $('#box p').text();
    console.log(c);

    var d = $('#box').attr('class');

    console.log(d); //give result test abc in console 
});

// val() it work only on form

$(document).ready(function() {
    $('#sform').submit(function() {
        var name = $('#fname').val();
        var lastname = $('#lname').val();
        var country = $('#scountry').val();

        alert("hello" + name + "class:" + classname + lastname + country);

    });

});