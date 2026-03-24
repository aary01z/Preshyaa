$(document).ready(function(){

    let carousel = $("#categoryCarousel");
    let cards = $(".cat-card");

    // 🔥 CLONE FIRST 3 ITEMS FOR LOOP
    carousel.append(cards.slice(0, 3).clone());

    let index = 0;

    function getVisibleItems() {
        if (window.innerWidth <= 576) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    function slideCarousel() {

        let cardWidth = $(".cat-card").outerWidth(true);
        index++;

        carousel.css("transition", "transform 0.6s ease");
        carousel.css("transform", `translateX(-${index * cardWidth}px)`);

        let visibleItems = getVisibleItems();
        let totalItems = $(".cat-card").length;

        // 🔥 RESET WITHOUT JUMP
        if(index >= totalItems - visibleItems){
            setTimeout(() => {
                carousel.css("transition", "none");
                carousel.css("transform", "translateX(0)");
                index = 0;
            }, 600);
        }
    }

    setInterval(slideCarousel, 3000);

});