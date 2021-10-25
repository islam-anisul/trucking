// navbar start
$(".nav-item").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
// sticky navbar
$(window).scroll(function(){
    var sticky = $(this).scrollTop();
    if(sticky>=300){
        $(".navbar").addClass("sticky");
    } else{
        $(".navbar").removeClass("sticky");
    }
});

// banner slider 
$('.banCont').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 3000,
    arrows: false,
    mobileFirst: true,
    dots: true,
    arrows: false,   
    pauseOnFocus: false,
    pauseOnHover: false,   
    fade: true,
});
// counter
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// service start
$(".srvType").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
$(".logisticBTN").click(function(){
    $(".logiCont").show("slow").siblings().hide("slow");
});
$(".whBTN").click(function(){
    $(".whCont").show("slow").siblings().hide("slow");
});
$(".cargoBTN").click(function(){
    $(".cargoCont").show("slow").siblings().hide("slow");
});
$(".trackBTN").click(function(){
    $(".trackingCont").show("slow").siblings().hide("slow");
});

// offers start
$(".offerBTN").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
$(".ownOpBTN").click(function(){
    $(".ownCont").show("slow").siblings().hide("slow");
});
$(".lpBTN").click(function(){
    $(".leasePurchCont").show("slow").siblings().hide("slow");
});
$(".leaseBTN").click(function(){
    $(".leaseCont").show("slow").siblings().hide("slow");
});
$(".driverBTn").click(function(){
    $(".driverCont").show("slow").siblings().hide("slow");
});

// testimonial
$('.testimonial_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    arrows: false,
    mobileFirst: true,
    dots: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,   
});
// success story
$(document).ready(function(){
    $('.venobox').venobox(); 
    
});

// back top top btn
$(function () {
    $("#back_to_top").hide();

    $(window).scroll(function () {
        var backToTop = $(this).scrollTop();
        if (backToTop >= 400) {
            $("#back_to_top").show("slow");
        } else {
            $("#back_to_top").hide("slow");
        }
    });
    $('#back_to_top').click(function () {
        $('html , body').animate({
            scrollTop: 0,
        }, 2000);
    });
});
// navbar smooth navigation
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $(' html,body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
});