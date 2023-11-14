$(function () {
    //이벤트, 공지사항 전환
    var tabs = $(".tabs");
    var activeItem = tabs.find(".on");
    var activeWidth = activeItem.innerWidth();
    $(".selector").css({
        left: activeItem.position.left + "px",
        width: activeWidth + "px",
    });

    $(".tabs li").on("click", function (e) {
        e.preventDefault();
        $(".tabs li").removeClass("on");
        $(this).addClass("on");
        var activeWidth = $(this).innerWidth();
        var itemPos = $(this).position();
        $(".selector").css({
            left: itemPos.left + "px",
            width: activeWidth + "px",
        });

        var tab_id = $(this).attr("data-tab");
        $("#" + tab_id).css("opacity", "0");
        $("ul.tabs li").removeClass("on");
        $(".tab-content").removeClass("on");

        $(this).addClass("on");
        $("#" + tab_id).addClass("on");
        $("#" + tab_id).animate({ opacity: "1" });
    });

    // 최근 인기 여행기
    new Swiper(".travelsSwiper", {
        slidesPerView: 4,
        spaceBetween: 33,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 웰컴투윌리
    $(".text-bounce").bind(
        "webkitAnimationEnd mozAnimationEnd animationEnd",
        function () {
            $(this).removeClass("animate");
        }
    );
    $(".text-bounce").hover(function () {
        $(this).addClass("animate");
    });
    $(window).scroll(function () {
        $(".inner_sub_banner").each(function (i) {
            var bottom_of_element =
                $(this).offset().top + $(this).outerHeight() / 5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ opacity: "1" }, 1500);
            }
        });
    });
});
