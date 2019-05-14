$(function() {
    var slides = $(".slider ul");
    var slideCount = slides.children().length;
    var slideWidth = 100.0 / slideCount;
    var slideIndex = 0;

    slides.find("li").each(function(indx) {
        var left_percent = (slideWidth * indx) + "%";
        $(this).css({"left":left_percent});
        $(this).css({width:(100 / slideCount) + "%"});
    });
    $(".slider .prev").click(function() {
        slide(slideIndex - 1);
    });
    $(".slider .next").click(function() {
        slide(slideIndex + 1);
    });
    function slide(newSlideIndex) {
        if(newSlideIndex < 0 || newSlideIndex >= slideCount) return; 
        var margin_left_pc = (newSlideIndex * (-100)) + "%";
        slides.animate({"margin-left": margin_left_pc}, 400, function(){
            slideIndex = newSlideIndex;
        });
    }
});