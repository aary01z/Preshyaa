$(document).ready(function(){

    $(".accordion-header").click(function(){

        let item = $(this).parent();

        // Close others (optional)
        $(".accordion-item").not(item).removeClass("active")
            .find(".icon").text("+");

        // Toggle current
        item.toggleClass("active");

        let icon = $(this).find(".icon");

        if(item.hasClass("active")){
            icon.text("−");
        } else {
            icon.text("+");
        }

    });

});