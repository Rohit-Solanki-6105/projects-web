$(document).ready(function(){
    $("body").css("transition","1s");
    $("#Theme").click(function(){
        $("body").toggleClass("theme1");
        if($("#Theme").text() == "Dark Theme"){
            $("#Theme").text("Light Theme");
        }
        else{
            $("#Theme").text("Dark Theme");    
        }
    });
});