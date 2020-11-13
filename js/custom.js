$(function () {
    //scrolling To Sections
    $(".nav-item").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({
            "scrollTop": $($(this).data("scroll")).offset().top
        }, 500);
    })
});