$("#accordion h6").click(function () {
    $(this).next().slideToggle();
    $(this).children().children().toggleClass("fas fa-plus").toggleClass("fas fa-minus");

})