$(function () {
    const pathname = $(location).attr("pathname");
    $(".gnb").addClass("sub_gnb");
    if (pathname.includes("about-us")) {
        $(".gnb li:nth-child(1) a").addClass("active");
    } else if (pathname.includes("destination")) {
        $(".gnb li:nth-child(2) a").addClass("active");
    } else if (pathname.includes("community")) {
        $(".gnb li:nth-child(3) a").addClass("active");
    } else if (pathname.includes("store")) {
        $(".gnb li:nth-child(4) a").addClass("active");
    } else {
        $(".gnb").removeClass("sub_gnb");
    }

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5; // 이벤트를 발생시킬 스크롤의 이동 범위
    var navbarHeight = $("header").outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 100); // 스크롤이 멈춘 후 동작이 실행되기 까지의 딜레이

    function hasScrolled() {
        var st = $(this).scrollTop(); // 현재 window의 scrollTop 값

        // delta로 설정한 값보다 많이 스크롤 되어야 실행된다.
        if (Math.abs(lastScrollTop - st) <= delta) return;

        if (st > lastScrollTop && st > navbarHeight) {
            // 스크롤을 내렸을 때
            $("header").slideUp("fast"); // header 숨기기
        } else {
            // 스크롤을 올렸을 때
            if (st + $(window).height() < $(document).height()) {
                $("header").slideDown("fast"); // header 보이기
            }
        }

        lastScrollTop = st; // 현재 멈춘 위치를 기준점으로 재설정
    }
});
