$(document).ready(function(){
    $('#box').scroll(function(){
        console.log("you r scrolling");

    });

    $(window).resize(function(){
        console.log("you are Resizing window");

    });
});