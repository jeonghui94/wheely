$(function () {
    // 슬라이드 배너
    $(".slide li").hide();
    $(".slide li").eq(0).show();

    var t = 0;

    function slide() {
        if (t < 2) {
            t++;
        } else {
            t = 0;
        }

        $(".slide li").fadeOut(1500);
        $(".slide li").eq(t).fadeIn(1500);
    }

    setInterval(slide, 4000);
});
