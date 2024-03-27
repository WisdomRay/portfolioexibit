$(document).ready(function() {
    var isMobile = false;

    function checkMobile() {
        isMobile = $(window).width() < 768;
    }

    function isElementInViewport(elem) {
        var rect = elem.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        $('.  ').each(function() {
            if (isElementInViewport(this) && !isMobile && !$(this).hasClass('animated')) {
                $(this).addClass('animated animate__fadeInLeft'); 
                $(this).addClass('animated'); 
            } else if (!isElementInViewport(this)) {
                $(this).removeClass('animated');
            }
        });
    }

    $(window).on('scroll', handleScroll);

    handleScroll();
});
$(document).ready(function() {
    $('#hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('.mobile-nav-link').toggleClass('toogle')
    });
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
$(document).ready(function(){
    $('#mb-a').on('click', function(){
        $('.db-a').show()
        $('.db-b').hide()
        $('.db-c').hide()
        $('.db-d').hide()

    })
    $('#mb-b').on('click', function(){
        $('.db-a').hide()
        $('.db-b').show()
        $('.db-c').hide()
        $('.db-d').hide()
    })
    $('#mb-c').on('click', function(){
        $('.db-a').hide()
        $('.db-b').hide()
        $('.db-c').show()
        $('.db-d').hide()
    })
    $('#mb-d').on('click', function(){
        $('.db-a').hide()
        $('.db-b').hide()
        $('.db-c').hide()
        $('.db-d').show()
    })

})