// $(document).ready(function(){
//     Banner
//     $(".banner-content").on("mouseover", function(){
//         console.log("cc");
//                     $(".banner-header").addClass("banner-header-hover")
//             }
//         );
 
//     $(".banner-content").on({
//         mouseenter: function () {
//             console.log($(this).find(".banner-header"));
//             console.log("in");
//         },
//         mouseleave: function () {
//             console.log("out");
//         }
//     });
// });

$(document).ready(function(){
    $("#banner-content-left").hover(function(){
        $("#banner-header-left").addClass("banner-header-hover")
        }, function(){
        $("#banner-header-left").removeClass("banner-header-hover")
        }
    );

    $("#banner-content-center").hover(function(){
        $("#banner-header-center").addClass("banner-header-hover")
        }, function(){
        $("#banner-header-center").removeClass("banner-header-hover")
        }
    );

    $("#banner-content-right").hover(function(){
        $("#banner-header-right").addClass("banner-header-hover")
        }, function(){
        $("#banner-header-right").removeClass("banner-header-hover")
        }
    );

    $('input[name="birthday"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'),10),
        locale:{
            format:'DD/MM/YYYY',      
        }
    });

    //Carousel
    $('#carousel-example').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 5;
        var totalItems = $('.carousel-item').length;
    
        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (e.direction=="left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                }
                else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }   
        }
    });
});

function formValidation() {
    var name = $("#name").val();
    var company = $("#company").val();
    var birthday = $("#birthday").val();

    if(name == "") {
        $("#error_name").show();
        $("#error_name").text("Vui lòng nhập họ và tên");
        return false;
    }
    else {
        var start_name = name.startsWith("Forbes");
        if(start_name == false) {
            $("#error_name").show();
            $("#error_name").text("Họ và tên chưa đúng định dạng");
            return false;
        }
    }

    if(company == "") {
        $("#error_name").hide();
        $("#error_company").show();
        $("#error_company").text("Vui lòng nhập công ty");
        return false;
    }

    if(birthday == "") {
        $("#error_name").hide();
        $("#error_company").hide();
        $("#error_birthday").show();
        $("#error_birthday").text("Vui lòng nhập ngày sinh");
        return false;
    }

    return true;
}