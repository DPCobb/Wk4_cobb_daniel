$(document).ready(function(){
    $("#menu").click(function(){
        $("#submenu").slideToggle()
    });
    $("#share").click(function(){
        $("#share-menu").slideToggle()
    });
    $("#submenu a").click(function(){
        $("body").fadeOut("fast")
    });
});
