// Next Transition
function nextStep() {
    $(this).parent().parent().parent().fadeOut(500);
    $(this).parent().parent().parent().next().fadeIn(500);
}

// Prev Transition
function prevStep() {
    $(this).parent().parent().parent().fadeOut(500);
    $(this).parent().parent().parent().prev().fadeIn(500);
}

$(".btn__next").on("click", nextStep);

$(".btn__back").on("click", prevStep);

// Change bg to white
$(".btn__change--white").on("click", function() {
    $(".bg").removeClass("blue");
    setTimeout(function() {
        $(".head").removeClass("hidden");
    }, 500);
})

// Change bg to blue
$(".btn__change--blue").on("click", function() {
    $(".bg").addClass("blue");
    setTimeout(function() {
        $(".head").addClass("hidden");
    }, 500);
})

$(".multiple__input, .radio__pick").on("click", function() {
    if ($(".input__wrap input:checked, .radio__pick:checked").length > 0) {
        $('.btn__next').removeAttr("disabled");
        $('.btn__next').removeClass("disabled");
    } else {
        $('.btn__next').attr("disabled", true);
        $('.btn__next').addClass("disabled");
    }

    // first yes/no
    if ($('input[name=ques1]:checked').val() == "yes") {
        $(".btn__next").on("click", nextStep);
    } else if ($('input[name=ques1]:checked').val() == "no") {
        $(".btn__next").on("click", function() {
            $(this).parent().parent().parent().next().fadeOut(100);
            $(this).parent().parent().parent().fadeOut(500);
            setTimeout(function() {
                $(".last--page").fadeIn(500);
                $(".bg").addClass("blue");
                $(".head").addClass("hidden");
            }, 500);
            $(".last--page h1").text("Terima kasih atas ketertarikan Bapak/Ibu dalam mengisi survei ini");
        });
    }

    // second yes/no
    if($('input[name=q2]:checked').val() == "yes") {
        $(".btn__next").on("click", nextStep);
    } else if ($('input[name=q2]:checked').val() == "no") {
        $(".btn__next").on("click", function() {
            $(this).parent().parent().parent().next().fadeOut(100);
            $(this).parent().parent().parent().fadeOut(500);
            setTimeout(function() {
                $(".last--page").fadeIn(500);
                $(".bg").addClass("blue");
                $(".head").addClass("hidden");
            }, 500);
           $(".last--page h1").text("Terima kasih atas waktu Bapak/Ibu");
        });
    }
});

// Disabled
$(".input__text").on("change", function() {
    var nameInput = $(".input__text").value;
    if (nameInput != "") {
        $('.btn__next').removeAttr("disabled");
        $('.btn__next').removeClass("disabled");
    } else {
        $('.btn__next').attr("disabled", true);
        $('.btn__next').addClass("disabled");
    }
});

// add disabled for next class
$(".btn__form").on("click", function() {
    $(".btn__form").addClass("disabled")
    $('.btn__form').attr("disabled", true);
});

$(".input__dropdown").on("change", function() {
    $('.btn__next').removeAttr("disabled");
    $('.btn__next').removeClass("disabled");
});