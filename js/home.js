
// nav js



$(document).ready(function() {
    if (scrollY > 100) {
        $("header").css("background-color", "white");
        $("#logo img").attr("src", "img/logo.png");
        $("nav li ").attr("style", "color: black !important");
    } else {
        $("header").css("background-color", "");
        $("#logo img").attr("src", "img/logo.png");
        $(".navbar-nav .nav-link ").attr("style", "");
    }

    $(window).scroll(function() {
        if (scrollY > 100) {
            $("header").css("background-color", "white");
            $("#logo img").attr("src", "img/logo.png");
            $("  ").attr("style", "color: black !important");
        } else {
            $("header").css("background-color", "");
            $(".navbar-brand").attr("style", "");
            $(".navbar-nav .nav-link ").attr("style", "");
        }
    })

    $(".about").click(scrollDown);

    function scrollDown(e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: $("#about").offset().top
        })
    }

    $(".navbar-brand").click(function() {
        $("html,body").animate({
            scrollTop: 0
        })
    })



})
// end js


























// parallax

$(document).ready(function(){
    if(scrollY>3000){
        var count=setInterval(function(){
            var line=$("#parallax .one span").text();
            var cofe=$("#parallax .two span").text();
            var finish=$("#parallax .three span").text();
            console.log(finish);

            var clients=$("#parallax .four span").text();
            if(line<12416){
                line++
                $("#parallax .one span").text(line)
            }
            if(cofe<365){
                cofe++
                $("#parallax .two span").text(cofe)
            }

            if(finish<114){
                finish++
                $("#parallax .three span").text(finish)
            }

            if(clients<14825){
                clients++
                $("#parallax .four span").text(clients)
            }

        },50)



    }






})



























$(window).scroll(function(){
    if(scrollY>3000){
        var count=setInterval(function(){
            var line=$("#parallax .one span").text();
            var cofe=$("#parallax .two span").text();
            var finish=$("#parallax .three span").text();
            console.log(finish);

            var clients=$("#parallax .four span").text();
            if(line<12416){
                line++
                $("#parallax .one span").text(line)
            }
            if(cofe<365){
                cofe++
                $("#parallax .two span").text(cofe)
            }

            if(finish<114){
                finish++
                $("#parallax .three span").text(finish)
            }

            if(clients<14825){
                clients++
                $("#parallax .four span").text(clients)
            }

        },50)
            
        
    }
})




// scrol welcome

   $(window).scroll(function(){
       if(scrollY>500){
           $("#welcome .wel").animate({top:'0px'},700);
       }

       if(scrollY>500){
        $("#welcome .wel1").animate({top:'0px'},700);
    }

   })


//    what section
if(scrollY>1700){
    $("#What .animated-text").animate({top:'0'},700)
    $("#What .animated-text").next().animate({top:'0'},900)
    $("#What .animated-text").next().next().animate({top:'0'},1000)
    $("#What .animated-text").next().next().next().animate({top:'0'},1200)
    $("#What .animated-text").next().next().next().next().animate({top:'0'},1400)
    $("#What .animated-text").next().next().next().next().next().animate({top:'0'},1600)



}
