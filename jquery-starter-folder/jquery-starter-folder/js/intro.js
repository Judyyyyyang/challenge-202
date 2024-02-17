//resource link: https://www.w3schools.com/jquery/default.asp

$(function(){
    $("#btn").click(function(){
        $("#container").fadeToggle();
    })
    var timer;
    $("#container").click(function(){
        $("#container").addClass("moveAnimation");
        timer = setTimeout(() => {
            $("#container").removeClass("moveAnimation");
        }, 2000);
    })
    $("#myName").click(function(){
        $("#container").toggleClass("newClass");
    })
})