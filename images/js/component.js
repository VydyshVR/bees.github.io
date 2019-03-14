$(document).ready(function() { 
  $('.head-img img').click(function(){
    var destination = $(".program").offset().top - 0;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
});

$('.slyder-top').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    pagination : true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


//Tabs

$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$('.slyder-bottom').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        450:{
            items:1
        },
        670:{
            items:2
        },
        880:{
            items:3
        },
        1100:{
            items:4
        }
    }
});


jQuery(document).ready(function($){
$('.menu-body').hide();
$('.menu-title').click(function(){$(this).next().toggle()});
});




