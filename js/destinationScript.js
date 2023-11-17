$(function () {
    // $("#land3").css("fill", "#ff9621");

    $(".land").click(function () {
        let land = $(this);
        const idx = land.index() + 1;
        $(".land").removeClass("on");
        land.addClass("on");
        $(".land_lnb").css("display", "none");
        $(".land_lnb" + idx).css("display", "block");

        // 지도 색 변경
        // $(".land").css("fill", "#bcbcbc");
        // switch (land.attr("id")) {
        //     case "land1":
        //         land.css("fill", "#ffd25a");
        //         break;
        //     case "land2":
        //         land.css("fill", "#85cdf2");
        //         break;
        //     case "land3":
        //         land.css("fill", "#ff9621");
        //         break;
        //     case "land4":
        //         land.css("fill", "#6885c5");
        //         break;
        //     case "land5":
        //         land.css("fill", "#529b58");
        //         break;
        // }
    });
});
