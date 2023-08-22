$(function(){
    $(".changeImage").click(function(){
        $(".memesblock").css("display", "none");
        $(".img-wall").css("display", "table");
    });

    $(".changeMedia").click(function(){
        $(".memesblock").css("display", "none");
        $(".media-wall").css("display", "flex");
    });

    $(".changeWriting").click(function(){
        $(".memesblock").css("display", "none")
    });
})